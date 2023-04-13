import styled, { css } from "styled-components";
import { colorPalette } from "./theme";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  color: white;
  margin-top: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 3px solid white;
    border-radius: 100px;
    margin-left: 100px;
    margin-right: 100px;
  }

  &:not(:empty)::before {
    margin-right: 0.5em;
    opacity: 0.7;
  }

  &:not(:empty)::after {
    margin-left: 0.5em;
    opacity: 0.7;
  }
`;

const Item = css`
  /* -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: black; */
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background: #ffffff1d;
  height: 410px;
  border: 5px solid ${colorPalette.orange};
  padding: 30px 20px;
  border-radius: 40px;
  transition: 0.3s all;
  min-width: 360px;
  margin: 25px;
  flex-basis: calc(25% - 10px);
  margin-bottom: 20px;

  @media screen and (max-width: 992px) {
    flex-basis: calc(33.33% - 10px);
  }

  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 10px);
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
  }
`;

export const ItemWrapper = styled.div`
  ${Item}
  &:hover {
    box-shadow: 0px 0px 26px ${colorPalette.orange};
  }
`;
export const LockedContainer = styled.div`
  ${Item}
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const ItemName = styled.h2`
  color: white;
  text-align: center;
  font-size: 24px;
`;

interface CostProps {
  enoughtPoints: boolean;
}

export const Cost = styled.h3<CostProps>`
  transition: 0.3s all;
  color: ${(props) => (props.enoughtPoints ? "white" : colorPalette.red)};
  text-shadow: ${(props) =>
    props.enoughtPoints
      ? "0px 0px 5px rgba(0, 0, 0, 0.25)"
      : "0 0 12px#ff5e5e"};
`;

export const Description = styled.h4`
  opacity: 0.8;
  font-size: 14px;
  min-height: 64px;
`;

export const BuyButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 16px 8px;
  font-size: 20px;
  border: 2px solid transparent;
  background: ${colorPalette.orange};
  color: white;
  cursor: pointer;
  border-radius: 25px;
  transition: 0.3s all;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  /* &:hover,
  &:focus-visible {
    outline: none;
    border: 2px solid ${colorPalette.yellow};
  } */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    text-shadow: none;
  }
`;
