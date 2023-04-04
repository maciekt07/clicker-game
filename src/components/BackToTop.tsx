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
    <Btn onClick={scrollTop} style={{ display: showBtn ? "flex" : "none" }}>
      <KeyboardArrowUp color="primary" fontSize="large" />
    </Btn>
  );
};

const Btn = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  transition: 0.3s all;
  background: #ffffffcb;
  backdrop-filter: blur(6px);
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 16px;

  &:hover {
    background-color: #fffffff3;
  }
`;
