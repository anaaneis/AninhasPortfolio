import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

function Draggable({ children, className, label, rotate = 0 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const start = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const down = (e) => {
    e.target.setPointerCapture(e.pointerId); // keep following even if the pointer moves fast
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

  // Arrow keys move the note by 10px (40px with Shift), so keyboard users can play too
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
      e.preventDefault(); // stops the page from scrolling
      setPos((p) => ({ x: p.x + v[0], y: p.y + v[1] }));
    }
  };

  return (
    <div
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
        "sticky-note relative touch-none select-none cursor-grab transition-shadow",
        dragging && "cursor-grabbing shadow-float z-20",
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
