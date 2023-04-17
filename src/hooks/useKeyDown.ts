import { useEffect, useState } from "react";
/**
 * A custom hook that listens for key down events on the document object.
 * @param {string} key - The key that should trigger the onKeyDown function.
 * @param {KeyDownHandler} onKeyDown - A function that is called when the specified key is pressed down.
 * @returns {void}
 */
interface KeyDownHandler {
  (event: KeyboardEvent): void;
}

export const useKeyDown = (key: string, onKeyDown: KeyDownHandler): void => {
  const [isKeyDown, setIsKeyDown] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === key && !isKeyDown) {
        setIsKeyDown(true);
        onKeyDown(event);
      }
    };

    const handleKeyUp = (event: KeyboardEvent): void => {
      if (event.key === key) {
        setIsKeyDown(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, onKeyDown, isKeyDown]);
};
