import React, { useEffect, useRef } from 'react';

interface Drop {
  x: number;
  y: number;
  speed: number;
  char: string;
  opacity: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let drops: Drop[] = [];
    const fontSize = 14;
    const chars = '01';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = `${fontSize}px monospace`;
    };

    const createDrops = () => {
      const columns = Math.floor(canvas.width / fontSize);
      drops = [];
      
      for (let i = 0; i < columns; i++) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          speed: 1 + Math.random() * 2,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, i) => {
        // Draw the character
        ctx.fillStyle = `rgba(124, 58, 237, ${drop.opacity})`; // Purple color
        ctx.fillText(drop.char, drop.x, drop.y);

        // Update position
        drop.y += drop.speed;

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.char = chars[Math.floor(Math.random() * chars.length)];
          drop.opacity = Math.random() * 0.5 + 0.1;
        }

        // Randomly change character
        if (Math.random() < 0.02) {
          drop.char = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize
    resizeCanvas();
    createDrops();
    draw();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createDrops();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: -1 }}
    />
  );
}