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
  const lockedAchievementsCount =
    Object.values(achievements).length - unlockedAchievements.length;
  return (
    <Container>
      {unlockedAchievements.map((achievement) => (
        <Tooltip
          key={achievement.name}
          title={`Requirement: ${
            achievement.clicksRequired
              ? achievement.clicksRequired + " clicks"
              : achievement.requirement
              ? achievement.requirement + " points"
              : achievement.purchasesRequired
              ? achievement.purchasesRequired + " purchases"
              : "Unknown requirement"
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
                {achievement.emoji}
              </Avatar>
            </AvatarWrapper>
            <TextWrapper>
              <Name>{achievement.name}</Name>
              <br />
              <Description>
                <b>
                  {achievement.description}
                  {achievement.longDescription && ": "}
                </b>
                {achievement.longDescription}
              </Description>
            </TextWrapper>
          </ItemWrapper>
        </Tooltip>
      ))}
      <br />

      {lockedAchievementsCount !== 0 && (
        <Locked>🔒 Locked Achievements: {lockedAchievementsCount}</Locked>
      )}
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
  margin: 8px 32px;
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
const Locked = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  opacity: 0.8;
`;
