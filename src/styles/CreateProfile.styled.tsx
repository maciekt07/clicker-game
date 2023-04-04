import styled from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { colorPalette } from "./theme";
export const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: ${colorPalette.peach};
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;
  min-width: 350px;
  padding: 85px 10px;
  border-radius: 50px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
`;

export const NameInput = muistyled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    width: "250px",
  },
});

export const CreateButton = styled.button`
  color: white;
  background: ${colorPalette.orange};
  user-select: none;
  width: 250px;
  padding: 1.1em;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s all;
  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 40px -2px rgba(242, 135, 5, 0.5);
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
  /* &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  } */
`;
