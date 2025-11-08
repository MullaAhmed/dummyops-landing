"use client";

import { useState, useEffect, useRef } from "react";
import { useCounters } from "@/lib/client/context/counters";
import { useMousePosition } from "@/lib/client/context/mouse-position";

export default function ClicksContainer() {
  const { allClicks } = useCounters();
  const { mousePosition } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousCountRef = useRef(allClicks);

  useEffect(() => {
    if (allClicks > previousCountRef.current) {
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }

    previousCountRef.current = allClicks;
  }, [allClicks]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed pointer-events-none z-50 transition-opacity duration-300`}
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y - 40,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-[#0563FF] rounded-2xl px-4 py-2 shadow-lg flex items-center">
        <span className="text-sm font-medium text-white">{allClicks}</span>
      </div>
    </div>
  );
}
