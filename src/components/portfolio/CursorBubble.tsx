import { useEffect, useRef, useState } from "react";

type Trail = { x: number; y: number; life: number; id: number };

export function CursorBubble() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (!canvasRef.current) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let gx = mx, gy = my;
    let lx = mx, ly = my;
    let hovering = false;
    let pressed = false;
    let label = "";
    let idCounter = 0;
    const trail: Trail[] = [];

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor]',
      ) as HTMLElement | null;
      hovering = !!interactive;
      label = interactive?.getAttribute("data-cursor-label") || "";
      trail.push({ x: mx, y: my, life: 1, id: idCounter++ });
      if (trail.length > 24) trail.shift();
    };
    const onDown = () => (pressed = true);
    const onUp = () => (pressed = false);
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (glowRef.current) glowRef.current.style.opacity = "0.9";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.documentElement.classList.add("cursor-bubble-on");

    let raf = 0;
    let angle = 0;
    const tick = () => {
      // easings
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      lx += (mx - lx) * 0.22;
      ly += (my - ly) * 0.22;
      angle += 0.012;

      const scale = pressed ? 0.7 : hovering ? 2.2 : 1;
      const ringScale = pressed ? 0.6 : hovering ? 1.9 : 1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) rotate(${angle * 60}deg) scale(${ringScale})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${lx + 22}px, ${ly + 22}px, 0)`;
        labelRef.current.style.opacity = label ? "1" : "0";
        if (label) labelRef.current.textContent = label;
      }

      // canvas trail — glowing gold particles
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        p.life *= 0.9;
        const r = 10 * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grad.addColorStop(0, `rgba(247, 220, 111, ${0.55 * p.life})`);
        grad.addColorStop(0.5, `rgba(240, 201, 74, ${0.25 * p.life})`);
        grad.addColorStop(1, "rgba(247, 220, 111, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      // connecting shimmer line
      if (trail.length > 1) {
        ctx.strokeStyle = "rgba(247, 220, 111, 0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < trail.length; i++) {
          const p = trail[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      for (let i = trail.length - 1; i >= 0; i--) {
        if (trail[i].life < 0.05) trail.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-bubble-on");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[99]"
      />
      {/* Soft glow halo */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-32 w-32 rounded-full opacity-90 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(247,220,111,0.28) 0%, rgba(247,220,111,0.08) 40%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      {/* Ornate rotating ring (dashed + gradient border) */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-11 w-11 rounded-full transition-[opacity] duration-200"
        style={{
          border: "1.5px dashed rgba(247, 220, 111, 0.85)",
          boxShadow:
            "0 0 18px rgba(247,220,111,0.35), inset 0 0 12px rgba(247,220,111,0.15)",
        }}
      >
        <span
          className="absolute inset-[3px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(247,220,111,0) 0deg, rgba(247,220,111,0.55) 90deg, rgba(247,220,111,0) 180deg, rgba(247,220,111,0.55) 270deg, rgba(247,220,111,0) 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          }}
        />
      </div>
      {/* Core dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2.5 w-2.5 rounded-full bg-accent transition-[transform] duration-100"
        style={{ boxShadow: "0 0 14px rgba(247,220,111,0.95), 0 0 30px rgba(247,220,111,0.5)" }}
      />
      {/* Optional label chip (data-cursor-label="…") */}
      <div
        ref={labelRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] rounded-full border border-accent/40 bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent opacity-0 backdrop-blur-md transition-opacity duration-200"
      />
    </>
  );
}
