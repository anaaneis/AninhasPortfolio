import { useEffect, useRef, useState } from "react";

// The emojis that pop up when the user clicks on the empty board
const EMOJIS = ["✨", "💖", "👍", "🎉", "⭐", "🔥"];

// Label: "you" by default, "click" over links and buttons, "drag me" over sticky notes,
// or any element's data-cursor value (e.g. "that's me"). Off on touch screens
// and when the visitor prefers reduced motion.
function MultiCursor() {
  const ref = useRef(null); // the cursor <div>, so users can move it without re-rendering
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("you"); // the text in the name tag
  const [stamps, setStamps] = useState([]); // the emojis currently on screen

  useEffect(() => {
    // "fine" pointer = a mouse or trackpad. Phones and tablets are "coarse".
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine) return; // touch screen: do nothing at all
    setEnabled(!reduced);
    if (!reduced) document.documentElement.classList.add("custom-cursor");

    let id = 0; // a counter that gives each emoji its own number

    // The pointer moved: place the cursor there and pick the right label
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const target = e.target; // the element under the pointer

      // closest() looks at the element, then its parents, until it finds a match
      const custom = target.closest?.("[data-cursor]")?.dataset.cursor;
      setLabel(
        custom ??
          (target.closest?.("a,button,[role=button]")
            ? "click"
            : target.closest?.("[data-drag]")
              ? "drag me"
              : "you"),
      );
    };

    // A click: drop an emoji, but not when clicking something interactive
    const click = (e) => {
      if (e.target.closest("a,button,input,[role=button],[data-drag]")) return;
      id += 1;
      const stamp = {
        id,
        x: e.clientX,
        y: e.clientY,
        emoji: EMOJIS[id % EMOJIS.length],
      };

      // Keep the last 8 emojis plus the new one
      setStamps((previous) => [...previous.slice(-8), stamp]);

      // After 1.2 seconds, removes this emoji from the list
      setTimeout(
        () =>
          setStamps((previous) => previous.filter((s) => s.id !== stamp.id)),
        1200,
      );
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("click", click);

    // Cleanup: when the component disappears, stop listening
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("click", click);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    // A transparent layer over the whole screen. pointer-events-none = clicks pass through it
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
    >
      {enabled && (
        <div
          ref={ref}
          className="absolute left-0 top-0 transition-transform duration-100 ease-out"
        >
          {/* The arrow: red fill (text-cursor) with a white outline */}
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            className="text-cursor drop-shadow"
          >
            <path
              d="M1 1l15 7-7 2-3 8z"
              fill="currentColor"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          {/* The name tag: rounded everywhere except the top-left corner */}
          <span className="ml-4 inline-block rounded-full rounded-tl-none bg-cursor px-2.5 py-0.5 text-xs font-semibold text-cursor-foreground shadow">
            {label}
          </span>
        </div>
      )}

      {/* One emoji per item in the stamps list */}
      {stamps.map((s) => (
        <span
          key={s.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-3xl"
          style={{ left: s.x, top: s.y }}
        >
          <span className="block animate-pop">
            <span
              className="block"
              style={{ animation: "fade-up 0.8s 0.4s ease-in forwards" }}
            >
              {s.emoji}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default MultiCursor;
