import styled from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import { colorPalette } from "./theme";
import { TextField } from "@mui/material";

export const SettingsContainer = styled.div`
  margin: 0 auto;
  margin-top: 60px;

  max-width: 400px;
  padding: 85px 10px;
  border-radius: 50px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  color: black;
  border: 5px solid ${colorPalette.orange};

  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
`;

export const SaveButton = styled.button`
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
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.8;
  }
`;

export const SettingsInput = muistyled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    width: "250px",
  },
});
