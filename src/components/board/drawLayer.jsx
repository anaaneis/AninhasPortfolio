import { useEffect, useRef, useState } from "react";
import { Pencil, Eraser, Trash2, MousePointer2 } from "lucide-react";
import { cn } from "../../lib/utils";

const COLORS = ["#1e1e1e", "#f24822", "#0d99ff", "#14ae5c", "#9747ff"];

function DrawLayer() {
  const canvas = useRef(null); // the <canvas> element
  const last = useRef(null); // the last point of the current stroke
  const [mode, setMode] = useState("off"); // 'off' | 'pen' | 'eraser'
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const fit = () => {
      const w = document.documentElement.scrollWidth;
      const h = document.documentElement.scrollHeight;
      if (c.width >= w && c.height >= h) return; // already big enough
      const copy = document.createElement("canvas");
      copy.width = c.width;
      copy.height = c.height;
      copy.getContext("2d")?.drawImage(c, 0, 0);
      c.width = Math.max(w, c.width);
      c.height = Math.max(h, c.height);
      c.style.width = c.width + "px";
      c.style.height = c.height + "px";
      c.getContext("2d")?.drawImage(copy, 0, 0);
    };
    fit();
    const ro = new ResizeObserver(fit); // calls fit() whenever the page size changes
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setMode("off");
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const pt = (e) => {
    const r = canvas.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const draw = (e) => {
    if (!last.current) return;
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    const p = pt(e);
    ctx.globalCompositeOperation =
      mode === "eraser" ? "destination-out" : "source-over";
    ctx.strokeStyle = color;
    ctx.lineWidth = mode === "eraser" ? 28 : 4;
    ctx.lineCap = ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  };

  // Erase everything
  const clear = () => {
    const c = canvas.current;
    c?.getContext("2d")?.clearRect(0, 0, c.width, c.height);
  };

  // A small helper that builds one toolbar button (select / pen / eraser)
  const tool = (m, label, Icon) => (
    <button
      type="button"
      aria-label={label}
      aria-pressed={mode === m}
      title={label}
      onClick={() => setMode(m)}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-xl transition-colors hover:bg-card/15",
        mode === m && "bg-primary text-primary-foreground hover:bg-primary",
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );

  return (
    <>
      <canvas
        ref={canvas}
        aria-hidden="true"
        onPointerDown={(e) => {
          e.target.setPointerCapture(e.pointerId);
          last.current = pt(e);
          draw(e);
        }}
        onPointerMove={draw}
        onPointerUp={() => (last.current = null)}
        className={cn(
          "absolute left-0 top-0 z-30 touch-none",
          mode === "off"
            ? "pointer-events-none"
            : mode === "pen"
              ? "cursor-crosshair"
              : "cursor-cell",
        )}
      />

      <div
        role="toolbar"
        aria-label="Drawing tools"
        className="fixed bottom-20 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-2xl bg-ink p-1.5 text-card shadow-float"
      >
        {tool("off", "Select (stop drawing)", MousePointer2)}
        {tool("pen", "Pen: draw on the canvas", Pencil)}
        {tool("eraser", "Eraser", Eraser)}

        {/* The colour picker only appears while the pen is selected */}
        {mode === "pen" && (
          <div
            role="radiogroup"
            aria-label="Pen colour"
            className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 gap-1.5 rounded-full bg-card p-1.5 shadow-float"
          >
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={color === c}
                aria-label={`Colour ${c}`}
                onClick={() => setColor(c)}
                className={cn(
                  "h-6 w-6 rounded-full border-2",
                  color === c ? "scale-110 border-ink" : "border-card",
                )}
                style={{ background: c }}
              />
            ))}
          </div>
        )}

        <span className="mx-1 h-6 w-px bg-card/30" aria-hidden="true" />
        <button
          type="button"
          aria-label="Clear all drawings"
          title="Clear all drawings"
          onClick={clear}
          className="grid h-10 w-10 place-items-center rounded-xl hover:bg-destructive"
        >
          <Trash2 className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

export default DrawLayer;
