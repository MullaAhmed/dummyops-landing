import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function InfiniteTicker({
  children,
  direction = "left",
  speed = 30,
  gap = 6,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
}) {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Left blur mask */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      {/* Right blur mask */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className={`flex gap-${gap}`}
        animate={{
          x: direction === "left" ? [0, -contentWidth] : [0, contentWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          width: "max-content",
        }}
      >
        {/* Original content */}
        <div ref={contentRef} className={`flex gap-${gap}`}>
          {children}
        </div>
        {/* Duplicated content for seamless loop */}
        <div className={`flex gap-${gap}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
