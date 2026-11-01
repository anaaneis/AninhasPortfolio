import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

function Section({ id, title, tab, children }) {
  const ref = useRef(null); // the <section> element
  const [hasDrag, setHasDrag] = useState(false);


  useEffect(() => setHasDrag(!!ref.current?.querySelector("[data-drag]")), []);

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-frame scroll-mt-8 px-5 pb-10 pt-14 sm:px-10"
    >
      <h2
        id={`${id}-title`}
        className={`absolute -top-4 left-6 rounded-md px-3 py-1 text-sm font-bold text-ink shadow-sticky ${tab}`}
      >
        {title}
      </h2>

      {hasDrag && (
        <button
          type="button"
          // Shouts "sticky-reset" to the whole section. Every Draggable inside is listening.
          onClick={() =>
            ref.current?.dispatchEvent(new CustomEvent("sticky-reset"))
          }
          className="group absolute -top-5 right-6 inline-flex rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-sticky-yellow py-1 pl-1 pr-3 text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 hover:rotate-0 active:translate-y-0.5 active:shadow-none"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-card">
            <RotateCcw
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-rotate-[360deg]"
              aria-hidden="true"
            />
          </span>
          <span className="font-hand text-xl leading-none">tidy up!</span>
          <span className="sr-only"> Reset notes in {title}</span>
        </button>
      )}

      {children}
    </section>
  );
}

export default Section;
