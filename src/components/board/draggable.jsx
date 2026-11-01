import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

// Props: children, className, label (for screen readers), rotate (tilt in degrees)
function Draggable({ children, className, label, rotate = 0 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const el = useRef(null); // this note's own <div>

  // NEW: listen for the "tidy up!" message from the section this note lives in
  useEffect(() => {
    const section = el.current?.closest("section"); // the nearest parent <section>
    if (!section) return;
    const reset = () => setPos({ x: 0, y: 0 }); // back to the starting position
    section.addEventListener("sticky-reset", reset);
    return () => section.removeEventListener("sticky-reset", reset);
  }, []);

  const down = (e) => {
    e.target.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    setDragging(true);
  };

  const move = (e) => {
    if (!dragging) return;
    setPos({
      x: start.current.px + e.clientX - start.current.x,
      y: start.current.py + e.clientY - start.current.y,
    });
  };

  const key = (e) => {
    const step = e.shiftKey ? 40 : 10;
    const moves = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const v = moves[e.key];
    if (v) {
      e.preventDefault();
      setPos((p) => ({ x: p.x + v[0], y: p.y + v[1] }));
    }
  };

  return (
    <div
      ref={el}
      data-drag
      tabIndex={0}
      role="group"
      aria-roledescription="draggable sticky note"
      aria-label={`${label}. Use arrow keys to move.`}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={() => setDragging(false)}
      onKeyDown={key}
      className={cn(
        "sticky-note relative touch-none select-none cursor-grab transition-[box-shadow,transform] duration-300",
        dragging && "duration-0 cursor-grabbing shadow-float z-20", // no animation while dragging
        className,
      )}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${dragging ? 0 : rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
}

export default Draggable;
