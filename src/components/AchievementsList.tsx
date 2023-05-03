import { User } from "../types/user";
import { achievements } from "../constants";
import styled from "styled-components";
import { Avatar, Tooltip } from "@mui/material";
import { formatNumber } from "../utils";
import { colorPalette } from "../styles";

interface Props {
  userProfile: User;
}

export const AchievementsList = ({ userProfile }: Props) => {
  //TODO: remove `achievements` array from `userProfile` and map achievements list with `dateAchievements` object instead
  // Filter out the achievements that the user has unlocked
  const unlockedAchievements = Object.values(achievements).filter(
    (achievement) => userProfile.achievements.includes(achievement.name)
  );
  // Calculate the number of locked achievements
  const lockedAchievementsCount =
    Object.values(achievements).length - unlockedAchievements.length;

  const achievementsCount = Object.keys(achievements).length;

  const percentageProgress =
    (userProfile.achievements.length / achievementsCount) * 100;
  console.log(userProfile.dateAchievements);
  return (
    <Container>
      <span style={{ marginLeft: "32px" }}>
        Total progress: {formatNumber(percentageProgress)}%
      </span>
      <Tooltip
        title={`Achieved ${userProfile.achievements.length} out of ${achievementsCount} achievements`}
      >
        <Progress
          value={userProfile.achievements.length}
          max={achievementsCount}
        />
      </Tooltip>
      <br />
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
              : achievement.description
          }`}
        >
          <ItemWrapper>
            <AvatarWrapper>
              <Avatar
                style={{
                  marginLeft: "12px",
                  width: "76px",
                  height: "76px",
                  fontSize: "28px",
                  background: "#f28705",
                  boxShadow: "0 0 30px -1px #f28705cb",
                }}
              >
                {achievement.emoji}
              </Avatar>
            </AvatarWrapper>
            <TextWrapper>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Name>{achievement.name}</Name>
                <DateText>
                  {new Date(
                    userProfile.dateAchievements[achievement.name]
                  ).toLocaleDateString()}{" "}
                  {new Date(
                    userProfile.dateAchievements[achievement.name]
                  ).toLocaleTimeString()}
                </DateText>
              </span>

              <Description>
                <b>
                  {achievement.description}
                  {achievement.longDescription && ": "}
                </b>
                {achievement.longDescription}
                {achievement.reward && (
                  <>
                    <br />
                    <b> Reward: 🍯{achievement.reward}</b>
                  </>
                )}
              </Description>
            </TextWrapper>
          </ItemWrapper>
        </Tooltip>
      ))}
      <br />
      {/* Render the locked achievements count if there are any */}
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
  font-family: "Poppins", sans-serif;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 32px;
  background: #e2e2e2;
  padding: 16px 32px 16px 16px;
  border-radius: 24px;
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

const DateText = styled.span`
  font-style: italic;
  font-size: 14px;
`;

const Description = styled.span`
  font-size: 16px;
  & b {
    color: #333;
  }
`;

const TextWrapper = styled.div`
  margin: 0;
  margin-left: 8px;
`;
const Locked = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  opacity: 0.8;
`;

const Progress = styled.progress`
  accent-color: ${colorPalette.orange};
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 8px;
  height: 16px;
  width: auto;
  border-radius: 10px;
  background-color: #e2e2e2;

  &::-webkit-progress-bar {
    background-color: #e2e2e2;
    border-radius: 10px;
  }
  &::-webkit-progress-value {
    background-color: ${colorPalette.orange};
    border-radius: 10px;
    box-shadow: 0px 0px 16px -1.5px ${colorPalette.orange};
  }
  &::-moz-progress-bar {
    background-color: ${colorPalette.orange};
    border-radius: 10px;
  }
`;
