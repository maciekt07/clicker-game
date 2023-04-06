import { User } from "../types";
import { achievements } from "../constants/achievements";
import styled from "styled-components";
import { Avatar, Tooltip } from "@mui/material";

interface Props {
  userProfile: User;
}

export const AchievementsList = ({ userProfile }: Props) => {
  const unlockedAchievements = Object.values(achievements).filter(
    (achievement) => userProfile.achievements.includes(achievement.name)
  );

  return (
    <Container>
      {unlockedAchievements.map((achievement) => (
        <Tooltip
          key={achievement.name}
          title={`Requirement: ${
            achievement.clicksRequired
              ? achievement.clicksRequired + " clicks"
              : achievement.requirement + " points"
          }`}
        >
          <ItemWrapper>
            <AvatarWrapper>
              <Avatar
                style={{
                  marginLeft: "12px",
                  width: "64px",
                  height: "64px",
                  fontSize: "24px",
                  background: "#f28705",
                  boxShadow: "0 0 30px -1px #f28705cb",
                }}
              >
                {achievement.clicksRequired ? "🖱️" : "🍯"}
              </Avatar>
            </AvatarWrapper>
            <TextWrapper>
              <Name>{achievement.name}</Name>
              <br />
              <Description>{achievement.description}</Description>
            </TextWrapper>
          </ItemWrapper>
        </Tooltip>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  background: #e2e2e2;
  padding: 16px 32px 16px 16px;
  border-radius: 16px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 16px;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 16px;
`;

const TextWrapper = styled.div`
  margin: 0;
`;
