"use client";

import { useState, useEffect, useRef } from "react";
import { useScroll } from "@/lib/client/context/scroll";
import Mouse from "@/assets/icons/mouse";
import { useMousePosition } from "@/lib/client/context/mouse-position";

export default function ScrollContainer() {
  const { scrollBehavior } = useScroll();
  const { mousePosition } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (scrollBehavior.scrollCount > 0) {
      setIsVisible(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollBehavior.scrollCount]);

  return (
    <div
      className={`hidden md:block fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y + 10,
      }}
    >
      <div className="bg-white border border-[#0563FF] rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 min-w-[120px]">
        <div className="w-6 h-6 flex items-center justify-center">
          <Mouse />
        </div>

        <span className="text-sm font-medium text-gray-800">
          {Math.round(scrollBehavior.currentScrollPercentage)}% Scroll
        </span>
      </div>
    </div>
  );
}
