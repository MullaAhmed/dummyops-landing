"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import SelectionContainer from "@/components/interactive/selection-container";

const TextSelectionContext = createContext<{
  textSelection: string;
  setTextSelection: (text: string) => void;
  isTextSelected: boolean;
  setIsTextSelected: (isTextSelected: boolean) => void;
}>({
  textSelection: "",
  setTextSelection: () => {},
  isTextSelected: false,
  setIsTextSelected: () => {},
});

export const TextSelectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [textSelection, setTextSelection] = useState("");
  const [isTextSelected, setIsTextSelected] = useState(false);

  useEffect(() => {
    setIsTextSelected(textSelection.length > 0 && textSelection.trim() !== "" && textSelection !== " " && textSelection !== "\n");
  }, [textSelection]);

  const handleTextSelection = useCallback(() => {
    setTextSelection(window.getSelection()?.toString() || "");
  }, []);

  useEffect(() => {
    document.addEventListener("selectionchange", handleTextSelection);

    return () => {
      document.removeEventListener("selectionchange", handleTextSelection);
    };
  }, [handleTextSelection]);

  return (
    <TextSelectionContext.Provider value={{ textSelection, setTextSelection, isTextSelected, setIsTextSelected }}>
      {children}
      <SelectionContainer />
    </TextSelectionContext.Provider>
  );
};

export const useTextSelection = () => useContext(TextSelectionContext);
