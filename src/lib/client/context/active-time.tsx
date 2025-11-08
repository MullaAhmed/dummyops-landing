"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ActiveTimeContext = createContext<{
  activeTime: number;
  setActiveTime: (time: number) => void;
}>({
  activeTime: 0,
  setActiveTime: () => {},
});

export const ActiveTimeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTime, setActiveTime] = useState(0);

  const handleActiveTime = useCallback(() => {
    setActiveTime(Date.now());
  }, []);
  
  useEffect(() => {
    handleActiveTime();
  }, [handleActiveTime]);

  return (
    <ActiveTimeContext.Provider value={{ activeTime, setActiveTime }}>
      {children}
    </ActiveTimeContext.Provider>
  );
};

export const useActiveTime = () => useContext(ActiveTimeContext);
