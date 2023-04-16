import { formatNumber } from "../utils";
import { User } from "../types/user";
import styled from "styled-components";

interface Props {
  userProfile: User;
}
// TODO: - Improve UI with additional styling/layout
export const StatsInfo = ({ userProfile }: Props) => {
  return (
    <StatsContainer className="Stats">
      <h2>
        Points: 🍯
        {userProfile.points > 100
          ? formatNumber(userProfile.points, 0)
          : formatNumber(userProfile.points)}
      </h2>
      <span>
        Max Points:{" "}
        {userProfile.maxPoints > 100
          ? formatNumber(userProfile.maxPoints, 0)
          : formatNumber(userProfile.maxPoints)}
      </span>
      <br />
      <span>Clicks: {userProfile.clicks}</span>
      <br />
      <span>Multiplier: {formatNumber(userProfile.multiplier, 0)}</span>
      <br />
      <span>Per Second: {formatNumber(userProfile.perSecond)}</span>
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif !important;
  text-align: center;
  & h2 {
    font-size: 28px;
  }
  & span {
    font-size: 18px;
  }
`;
