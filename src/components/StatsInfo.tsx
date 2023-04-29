import { formatNumber } from "../utils";
import { User } from "../types/user";
import styled from "styled-components";
import { colorPalette } from "../styles";
import { useScrollTrigger } from "../hooks";

interface Props {
  userProfile: User;
}

export const StatsInfo = ({ userProfile }: Props) => {
  const checkShowPoints = useScrollTrigger();

  const formatPoints = () => {
    return `Points: 🍯${
      userProfile.points > 100
        ? formatNumber(userProfile.points, 0)
        : formatNumber(userProfile.points)
    }`;
  };

  return (
    <>
      <StatsContainer>
        <h2>{formatPoints()}</h2>
        <span>
          Max Points:{" "}
          {userProfile.maxPoints > 100
            ? formatNumber(userProfile.maxPoints, 0)
            : formatNumber(userProfile.maxPoints)}
        </span>
        <br />
        <span>Clicks: {formatNumber(userProfile.clicks, 0)}</span>
        <br />
        <span>Multiplier: {formatNumber(userProfile.multiplier, 0)}</span>
        <br />
        <span>Per Second: {formatNumber(userProfile.perSecond)}</span>
      </StatsContainer>
      {/* TODO: - Improve UI beacause its ugly as fuck */}
      <Points show={checkShowPoints}>{formatPoints()}</Points>
    </>
  );
};

const StatsContainer = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif !important;
  text-align: center;
  & h2 {
    font-size: 28px;
  }
  & span {
    font-size: 20px;
  }
`;

interface PointsProps {
  show: boolean;
}

const Points = styled.div<PointsProps>`
  z-index: 2;
  position: fixed;
  top: 110px;
  left: 50%;
  transition: 0.3s all ease-in-out;
  transform: translate(-50%, 0) scale(${(props) => (props.show ? 1 : 0)});
  background: #ffffffd9;
  backdrop-filter: blur(4px);
  color: #333;
  border: 3px solid ${colorPalette.peach};
  font-size: 18px;
  border-radius: 20px;
  padding: 20px;
  min-width: 280px;

  @media (max-width: 600px) {
    font-size: 16px;
    min-width: 220px;
  }
`;
