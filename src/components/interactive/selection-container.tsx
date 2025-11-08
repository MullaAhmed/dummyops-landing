"use client";

import { useTextSelection } from "@/lib/client/context/text-selection";
import { useMousePosition } from "@/lib/client/context/mouse-position";
import { useState, useRef, useEffect, useMemo } from "react";
import { SCROLL_MESSAGES } from "@/lib/content/scroll-messages";

export default function SelectionContainer() {
  const { isTextSelected } = useTextSelection();
  const { mousePosition } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const selectedMessage = useMemo(() => {
    if (!isTextSelected) return "";
    return SCROLL_MESSAGES[Math.floor(Math.random() * SCROLL_MESSAGES.length)];
  }, [isTextSelected]);

  useEffect(() => {
    if (isTextSelected === true) {
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }

    if (!isTextSelected) {
      setIsVisible(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTextSelected]);

  return (
    <div
      className={`hidden md:flex fixed pointer-events-none z-50 transition-opacity duration-300 w-[300px] text-right justify-end`}
      style={{
        left: mousePosition.x - 320,
        top: mousePosition.y - 40,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <span className="bg-[#0563FF] rounded-2xl px-4 py-2 shadow-lg flex items-center text-white overflow-hidden">
        {selectedMessage}
      </span>
    </div>
  );
}
