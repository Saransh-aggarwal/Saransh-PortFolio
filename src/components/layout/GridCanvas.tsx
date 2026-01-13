'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function GridCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: 0, y: 0 };
        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const dots: { x: number; y: number; originX: number; originY: number }[] = [];
        const spacing = 40;

        for (let x = 0; x < width + spacing; x += spacing) {
            for (let y = 0; y < height + spacing; y += spacing) {
                dots.push({ x, y, originX: x, originY: y });
            }
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = theme === 'dark';
            ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

            dots.forEach(dot => {
                const dist = Math.hypot(dot.originX - mouse.x, dot.originY - mouse.y);
                const maxDist = 200;

                if (dist < maxDist) {
                    const angle = Math.atan2(dot.originY - mouse.y, dot.originX - mouse.x);
                    const force = (maxDist - dist) / maxDist;
                    dot.x = dot.originX + Math.cos(angle) * force * 15;
                    dot.y = dot.originY + Math.sin(angle) * force * 15;
                } else {
                    dot.x += (dot.originX - dot.x) * 0.1;
                    dot.y += (dot.originY - dot.y) * 0.1;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted, theme]);

    if (!mounted || theme !== 'light') return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10"
            style={{ opacity: 0.5 }}
        />
    );
}
