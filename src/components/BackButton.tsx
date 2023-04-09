import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colorPalette } from "../styles";

export const BackButton = () => {
  const n = useNavigate();
  const handleClick = () => {
    n(-1);
  };
  return (
    <Btn onClick={handleClick}>
      <ArrowBackIosNew fontSize="small" />
      &nbsp;Back
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 18px;

  padding: 8px;
  background-color: transparent;
  color: ${colorPalette.orange};
  cursor: pointer;
  border-radius: 12px;
`;
