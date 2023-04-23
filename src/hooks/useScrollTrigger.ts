import { useState, useEffect } from "react";
/**
A custom hook that triggers a boolean flag when the user scrolls down past a certain Y position.
@param {number} Y - The Y position to trigger the flag at. Default is 400.
@returns {boolean} - The value of the triggered flag.
*/

export const useScrollTrigger = (Y: number = 400): boolean => {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!isTriggered && window.pageYOffset > Y) {
        setIsTriggered(true);
      } else if (isTriggered && window.pageYOffset <= Y) {
        setIsTriggered(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTriggered, Y]);

  return isTriggered;
};
