"use client";

import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  angle: number;
  speed: number;
  life: number;
  maxLife: number;
  color: string;
  points: number;
  rotation: number;
}

const COLORS = ["#88e0d4", "#5ecec0", "#b2ede7", "#ffffff", "#a8e8e0"];

export default function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: -999, y: -999 });
  const idCounter = useRef(0);
  const rafRef = useRef<number>(0);
  const lastSpawn = useRef(0);
  const isTouching = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      if (isTouching.current) return;
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const onTouchStart = () => {
      isTouching.current = true;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      isTouching.current = true;
      const touch = e.touches[0];
      mousePos.current = { x: touch.clientX, y: touch.clientY };
    };
    const onTouchEnd = () => {
      mousePos.current = { x: -999, y: -999 };
      setTimeout(() => { isTouching.current = false; }, 300);
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const spawnParticle = (x: number, y: number) => {
      const maxLife = 40 + Math.random() * 30;
      const pointOptions = [4, 5, 6, 8];
      particles.current.push({
        id: idCounter.current++,
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        size: 2 + Math.random() * 3,
        opacity: 1,
        angle: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
        life: 0,
        maxLife,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        points: pointOptions[Math.floor(Math.random() * pointOptions.length)],
        rotation: Math.random() * Math.PI * 2,
      });
    };

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      color: string,
      points: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 3;
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const inner = size * (points <= 5 ? 0.45 : 0.3);
      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        const outerAngle = (i / points) * Math.PI * 2 - Math.PI / 2;
        const innerAngle = outerAngle + Math.PI / points;
        ctx.lineTo(Math.cos(outerAngle) * size, Math.sin(outerAngle) * size);
        ctx.lineTo(Math.cos(innerAngle) * inner, Math.sin(innerAngle) * inner);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const loop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastSpawn.current > 60) {
        const { x, y } = mousePos.current;
        if (x > 0 && y > 0) {
          spawnParticle(x, y);
          if (isTouching.current) spawnParticle(x, y);
        }
        lastSpawn.current = timestamp;
      }

      particles.current = particles.current.filter((p) => p.life < p.maxLife);
      for (const p of particles.current) {
        p.life++;
        const progress = p.life / p.maxLife;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 0.4;
        p.opacity = 1 - progress;
        drawStar(ctx, p.x, p.y, p.size * (1 - progress * 0.5), p.opacity, p.color, p.points, p.rotation + progress * 1.5);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
