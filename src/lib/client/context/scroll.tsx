"use client";

import ScrollContainer from "@/components/interactive/scroll-container";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ScrollBehavior {
  scrollCount: number;
  maxScrollPercentage: number;
  currentScrollPercentage: number;
}

const ScrollContext = createContext<{
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
  scrollBehavior: ScrollBehavior;
  setScrollBehavior: (behavior: ScrollBehavior) => void;
}>({
  scrollPosition: 0,
  setScrollPosition: () => {},
  scrollBehavior: {
    scrollCount: 0,
    maxScrollPercentage: 0,
    currentScrollPercentage: 0,
  },
  setScrollBehavior: () => {},
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollBehavior, setScrollBehavior] = useState<ScrollBehavior>({
    scrollCount: 0,
    maxScrollPercentage: 0,
    currentScrollPercentage: 0,
  });

  const calculateScrollPercentage = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const maxScrollable = documentHeight - windowHeight;
    const percentage = maxScrollable > 0 ? (scrollTop / maxScrollable) * 100 : 0;
    
    return Math.min(Math.max(percentage, 0), 100);
  }, []);

  const handleScroll = useCallback(() => {
    const newPosition = window.scrollY;
    const newPercentage = calculateScrollPercentage();
    
    setScrollPosition(newPosition);
    
    setScrollBehavior((prevBehavior) => {
      const newMaxPercentage = Math.max(prevBehavior.maxScrollPercentage, newPercentage);
      
      return {
        scrollCount: prevBehavior.scrollCount + 1,
        maxScrollPercentage: newMaxPercentage,
        currentScrollPercentage: newPercentage,
      };
    });
  }, [calculateScrollPercentage]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider 
      value={{ 
        scrollPosition, 
        setScrollPosition, 
        scrollBehavior, 
        setScrollBehavior 
      }}
    >
      {children}
      <ScrollContainer />
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);