import styled, { css } from "styled-components";
import { colorPalette } from "./theme";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = css`
  background: ${colorPalette.brown};
  height: 300px;
  border: 5px solid ${colorPalette.orange};
  padding: 20px;
  border-radius: 30px;
  transition: 0.3s all;
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

export const Header = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 16px 8px;
  font-size: 20px;
  border: none;
  background: ${colorPalette.yellow};
  color: white;
  cursor: pointer;
  border-radius: 16px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
