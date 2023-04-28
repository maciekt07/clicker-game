import { playSound } from "./playSound";
import toastSound from "../assets/sounds/toast.mp3";
import { toast } from "react-toastify";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface ToastProps {
  header: string;
  text?: string | ReactJSXElement;
  emoji?: string;
  volume: number;
}

export const showToast = ({
  header,
  text,
  emoji,
  volume,
}: ToastProps): void => {
  playSound(toastSound, volume);
  toast(
    <>
      <b>{header}</b>
      <br />
      {text && <span>{text}</span>}
    </>,
    {
      icon: emoji,
    }
  );
};
