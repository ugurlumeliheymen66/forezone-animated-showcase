import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      
      // Tıklanabilir öğeler VEYA hover efekti olan özel listeler/yazılar
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("li"); // Selected work öğeleri için li kontrolü

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-transform duration-150 ease-out ${
        isHovered
          ? "h-12 w-12 bg-accent/30 backdrop-blur-sm"
          : "h-5 w-5 bg-primary/80"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
