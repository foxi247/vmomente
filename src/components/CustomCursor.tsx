import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isImageHover, setIsImageHover] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"]')) {
        setIsHovering(true);
        setIsImageHover(false);
      } else if (target.closest('img, [data-cursor="zoom"]')) {
        setIsHovering(false);
        setIsImageHover(true);
      } else {
        setIsHovering(false);
        setIsImageHover(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationId: number;
    const animate = () => {
      // Smooth follow for dot
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;
      
      // Slower follow for ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hover' : ''} ${isImageHover ? 'image-hover' : ''}`}
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'hover' : ''} ${isImageHover ? 'image-hover' : ''}`}
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}
