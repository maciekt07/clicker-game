import { KeyboardArrowUp } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const checkScrollTop = () => {
    if (!showBtn && window.pageYOffset > 400) {
      setShowBtn(true);
    } else if (showBtn && window.pageYOffset <= 400) {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showBtn]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Btn
      onClick={scrollTop}
      //  style={{ display: showBtn ? "flex" : "none" }}
      show={showBtn}
    >
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
  transition: 0.3s all;
  background: #ffffffe2;
  backdrop-filter: blur(5px);
  color: white;
  cursor: pointer;
  padding: 12px;
  border-radius: 22px;
  transform: scale(${(props) => (props.show ? 1 : 0)});
  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff;
  }
`;
