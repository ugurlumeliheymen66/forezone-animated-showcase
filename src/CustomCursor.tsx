import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Mobil veya dokunmatik ekran kontrolü
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const hasHover = window.matchMedia("(hover: hover)").matches;
      // Mobilde touch event destekleniyorsa veya pointer dokunmatikse desktop DEĞİLDİR
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setIsDesktop(hasFinePointer && hasHover && !isTouchDevice);
    };

    checkIsDesktop();
  }, []);

  useEffect(() => {
    // Mobil cihazsa event listener'ları HİÇ bağlama
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    let animationFrameId: number;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isDesktop]);

  // MOBİLDE HİÇBİR HTML ELEMENTİ RENDER ETME
  if (!isDesktop) return null;

  return (
    <div data-custom-cursor="true" className="custom-cursor-container">
      {/* Merkezdeki Küçük Nokta */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${
            isHovered ? 0 : 1
          })`,
        }}
      />
      {/* Takip Eden Parlayan Halka */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-primary/50 transition-all duration-150 ease-out ${
          isHovered
            ? "h-12 w-12 bg-primary/20 border-primary scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            : "h-8 w-8 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${
            trailingPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </div>
  );
}
