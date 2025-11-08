"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import ClicksContainer from "@/components/interactive/clicks-container";

interface Counter {
  id: string;
  element: HTMLElement;
  value: number;
}

const CountersContext = createContext<{
  counters: Counter[];
  setCounters: (counters: Counter[]) => void;
  handleElementClick: (element: HTMLElement) => void;
  allClicks: number;
}>({
  counters: [],
  setCounters: () => {},
  handleElementClick: () => {},
  allClicks: 0,
});

export const CountersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counters, setCounters] = useState<Counter[]>([]);
  const [allClicks, setAllClicks] = useState<number>(0);

  const handleElementClick = useCallback((element: HTMLElement) => {
    setCounters((prevCounters) => {
      const elementId = `${element.tagName.toLowerCase()}-${
        element.className || "no-class"
      }-${element.id || "no-id"}`;
      const existingCounter = prevCounters.find(
        (counter) =>
          counter.element === element ||
          (counter.element.tagName === element.tagName &&
            counter.element.className === element.className &&
            counter.element.id === element.id)
      );

      if (existingCounter) {
        return prevCounters.map((counter) =>
          counter === existingCounter
            ? { ...counter, value: counter.value + 1 }
            : counter
        );
      } else {
        const newCounter: Counter = {
          id: `${elementId}-${Date.now()}`,
          element: element,
          value: 1,
        };
        return [...prevCounters, newCounter];
      }
    });
    setAllClicks(prevAllClicks => prevAllClicks + 1);
  }, []);

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        handleElementClick(target);
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [handleElementClick]);

  return (
    <CountersContext.Provider
      value={{ counters, setCounters, handleElementClick, allClicks }}
    >
      {children}
      <ClicksContainer />
    </CountersContext.Provider>
  );
};

export const useCounters = () => useContext(CountersContext);
