"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const MousePositionContext = createContext<{
  mousePosition: { x: number; y: number };
  setMousePosition: (position: { x: number; y: number }) => void;
}>({
  mousePosition: { x: 0, y: 0 },
  setMousePosition: () => {},
});

export const MousePositionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <MousePositionContext.Provider value={{ mousePosition, setMousePosition }}>
      {children}
    </MousePositionContext.Provider>
  );
};

export const useMousePosition = () => useContext(MousePositionContext);
