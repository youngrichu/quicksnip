import { useEffect } from "react";

const useEscapeKey = (onEscapeEvent: () => void) => {
  useEffect(() => {
    const handleEscape = (event: { key: string }) => {
      if (event.key === "Escape") onEscapeEvent();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onEscapeEvent]);
};

export default useEscapeKey;
