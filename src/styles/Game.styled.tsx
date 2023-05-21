import styled, { css, keyframes } from "styled-components";
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
  width: 16vw;
  max-width: 320px;
  min-width: 220px;
  filter: drop-shadow(0px 0px 30px #ffd071);
`;

export const ClickButton = muistyled(Button)({
  border: `5px solid ${colorPalette.orange}`,
  borderRadius: "64px",
  transition: ".15s all ease-out",
  "@media not all and (pointer: coarse)": {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  "&.clicked": {
    borderRadius: "82px",
    borderColor: colorPalette.yellow,
    transform: "scale(.9)",
  },
});

export const ShareButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 110px;
  right: 16px;
  padding: 14px 22px;
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
export const Offline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & span {
    color: ${colorPalette.red};
    text-shadow: 0 0 6px#ff5e5e;
    margin-right: 6px;
    margin-left: 6px;
  }
`;

interface PointsProps {
  show: boolean;
}

const animatePoints = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  20% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

export const Points = styled.div<PointsProps>`
  font-size: 20px;
  position: absolute;
  left: 60vw;
  transition: 0.1s all;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) =>
    props.show ? css`var(--animatePoints) .3s ease-out` : "none"};

  /* Define animation as a CSS variable */
  --animatePoints: ${animatePoints};
`;
