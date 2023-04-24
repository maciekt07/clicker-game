import { playSound } from "./playSound";
import toastSound from "../assets/toast.mp3";
import { toast } from "react-toastify";

interface ToastProps {
  header: string;
  text: string;
  emoji: string;
  volume: number;
}

export const showToast = (props: ToastProps) => {
  const { header, text, emoji, volume } = props;
  playSound(toastSound, volume);
  toast(
    <>
      <b>{header}</b>
      <br />
      <span>{text}</span>
    </>,
    {
      icon: emoji,
    }
  );
};
