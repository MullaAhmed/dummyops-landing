"use client";

import { useCallback, useEffect, useRef } from "react";

interface ChatWidgetInstance {
  popupSize?: "small" | "medium" | "large";
  sendEssentialState: () => void
}

interface ChatWidgetConstructor {
  new (config: { companyId: string; userId: string }): ChatWidgetInstance;
}

declare global {
  var initChatWidget: ChatWidgetConstructor;
}

function ChatWidgetComponent() {
  const instanceRef = useRef<ChatWidgetInstance | null>(null);
  const isInitializedRef = useRef(false);

  const handleEmbedChatWidget = useCallback(() => {
    if (isInitializedRef.current) return;

    try {
      if (typeof initChatWidget === "undefined") {
        console.warn(
          "initChatWidget is not available. Make sure the script is loaded."
        );
        return;
      }

      const chatWidgetInstance = new initChatWidget({
        companyId: "dummy-ops",
        userId: "123",
      });

      chatWidgetInstance.sendEssentialState();

      instanceRef.current = chatWidgetInstance;
      isInitializedRef.current = true;
    } catch (error) {
      console.error("Failed to initialize initChatWidget:", error);
    }
  }, []);

  useEffect(() => {
    handleEmbedChatWidget();
    return () => {
      isInitializedRef.current = false;
      instanceRef.current = null;
    };
  }, [handleEmbedChatWidget]);

  return null;
}

export { ChatWidgetComponent };
