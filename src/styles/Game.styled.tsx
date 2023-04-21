import styled from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { colorPalette } from "./theme";
export const AvatarContainer = styled.span`
  margin-left: auto;
  margin-right: 30px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-right: 15px;
  }
`;
export const ClickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;
export const ClickImg = styled.img`
  width: 20vw;
  max-width: 360px;
  min-width: 220px;
  filter: drop-shadow(0px 0px 30px #ffd071);
`;

export const ClickButton = muistyled(Button)({
  border: `5px solid ${colorPalette.orange}`,
  borderRadius: "48px",
  transition: ".15s all ease-out",
  "&:active": {
    "@media not all and (pointer: coarse)": {
      transform: "scale(.85)",
      borderRadius: "72px",
    },
  },
});

export const ShareButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 110px;
  right: 16px;
  padding: 16px 26px;
  font-size: 16px;
  border-radius: 20px;
  background: #ffffff2f;
  display: flex;
  color: ${colorPalette.orange};
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background: #ffffff35;
  }
`;
