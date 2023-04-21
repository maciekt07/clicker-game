import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colorPalette } from "../styles";

export const BackButton = () => {
  const n = useNavigate();
  // Function that navigates back to the previous page using the useNavigate hook
  const handleClick = () => {
    n(-1);
  };
  return (
    <Btn onClick={handleClick}>
      <ArrowBackIosNew />
      &nbsp;Back
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 20px;
  margin: 8px;
  margin-left: 16px;
  padding: 12px 18px;
  background-color: transparent;
  background: #f5f5f5;
  color: ${colorPalette.orange};
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s all;
  &:hover {
    background: #f5f5f5e8;
  }
`;
