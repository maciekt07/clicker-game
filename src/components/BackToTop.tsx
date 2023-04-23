import { KeyboardArrowUp } from "@mui/icons-material";
import styled from "styled-components";
import { useScrollTrigger } from "../hooks";

export const BackToTop = () => {
  const checkScrollTop = useScrollTrigger();

  // Function to scroll to the top of the page smoothly
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Btn onClick={scrollTop} show={checkScrollTop}>
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
