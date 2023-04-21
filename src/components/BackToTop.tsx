import { KeyboardArrowUp } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  // Function to check whether to show the button or not
  const checkScrollTop = () => {
    if (!showBtn && window.pageYOffset > 400) {
      setShowBtn(true);
    } else if (showBtn && window.pageYOffset <= 400) {
      setShowBtn(false);
    }
  };

  // Adding an event listener to the window object when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    // Removing the event listener when the component unmounts
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showBtn]); // Only rerun this effect if showBtn changes

  // Function to scroll to the top of the page smoothly
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Btn onClick={scrollTop} show={showBtn}>
      <KeyboardArrowUp
        color="primary"
        fontSize="large"
        sx={{
          fontSize: "2.5rem",
        }}
      />
    </Btn>
  );
};

interface BtnProps {
  show: boolean;
}

const Btn = styled.button<BtnProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;

  background: #ffffffd9;
  backdrop-filter: blur(4px);
  color: white;
  cursor: pointer;
  padding: 12px;
  border-radius: 22px;
  transform: scale(${(props) => (props.show ? 1 : 0)});
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #ffffff;
  }
`;
