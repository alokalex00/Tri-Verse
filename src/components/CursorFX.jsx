
import { useEffect, useRef } from "react";

export default function CursorFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let lastX = 0;
    let lastY = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const distance = Math.hypot(x - lastX, y - lastY);

      if (distance > 2) {
        const count = Math.min(Math.floor(distance / 9), 5);

        for (let i = 0; i < count; i++) {
          const t = (i + 1) / count;

          particles.push({
            x: lastX + (x - lastX) * t,
            y: lastY + (y - lastY) * t,
            vx: (Math.random() - 0.5) * 1.1,
            vy: (Math.random() - 0.5) * 1.1,
            life: 1,
            size: Math.random() * 2.2 + 0.6,
            hue: Math.random() > 0.5 ? 260 : 190,
          });
        }
      }

      lastX = x;
      lastY = y;

      if (particles.length > 100) {
        particles.splice(0, particles.length - 100);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      particles = particles.filter((p) => p.life > 0.03);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.life *= 0.955;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.life})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, ${p.life})`;
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
