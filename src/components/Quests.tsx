import styled from "styled-components";
import { UserProfileProps } from "../types/userProfileProps";
import { colorPalette } from "../styles";
import { compactFormat } from "../utils";
import { Done, TaskAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";

// TODO: Implement the quests component as it is not done yet.

export const Quests = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const [timer, setTimer] = useState(86400); // 24h in seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Restart the timer if it's up
  useEffect(() => {
    const createdAt = new Date(userProfile.createdAt).getTime() / 1000; // convert to seconds
    const now = Math.floor(Date.now() / 1000); // convert to seconds
    const diff = now - createdAt;
    const remainingTime = 86400 - (diff % 86400);
    setTimer(remainingTime);
  }, [userProfile.createdAt]);

  const timeRemaining = new Date(timer * 1000).toISOString().substr(11, 8);

  // Calculates the reward for completing all quests based on the user's maximum points.
  // If the maximum points divided by 6 is greater than 1000, the reward is equal to the maximum points divided by 6.
  // Otherwise, the reward is a minimum of 1000.
  const reward =
    userProfile.maxPoints / 6 > 1000 ? userProfile.maxPoints / 6 : 1000;

  const questsList = {
    FirstQuest: {
      name: "available soon (or not)",
      completed: false,
    },
    SecondQuest: {
      name: "completed quest",
      completed: true,
    },
    // clicksQuest: {
    //   name: "Click honey jar 1000 times",
    //   completed: false,
    // },
    // pointsQuest: {
    //   name: "Collect 10 000 points",
    //   completed: false,
    // },
  };

  const allCompleted = Object.values(questsList).every(
    (quest) => quest.completed
  );
  return (
    <Container>
      <Header>
        <TaskAlt /> &nbsp; Daily quests for {userProfile.name}
      </Header>

      <p>
        {allCompleted ? "Time to next quests: " : "Time remaining: "}
        <TimeRemaining nearTheEnd={timer < 7200}>{timeRemaining}</TimeRemaining>
      </p>

      {!allCompleted ? (
        Object.values(questsList).map((quest, index) => (
          <Item completed={quest.completed} key={index}>
            {quest.completed && <Done />} {quest.name}
          </Item>
        ))
      ) : (
        <Completed>All quests completed</Completed>
      )}
      {!allCompleted && <p>Reward = 🍯{compactFormat(reward)}</p>}
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff2f;
  margin-left: 20px;
  min-width: 300px;
  padding: 20px;
  position: absolute;
  top: 220px;
  border-radius: 20px;
  @media (max-width: 1100px) {
    position: relative;
    top: 0;
    margin: 25px 175px;
  }
  @media (max-width: 700px) {
    margin: 25px 60px;
  }
`;

const Header = styled.h3`
  color: ${colorPalette.orange};
  display: flex;
`;

interface TimeRemainingProps {
  nearTheEnd: boolean;
}

const TimeRemaining = styled.span<TimeRemainingProps>`
  color: ${(props) => (props.nearTheEnd ? colorPalette.red : "#efefef")};
  text-shadow: ${(props) =>
    props.nearTheEnd ? "0 0 12px#ff5e5e" : "0px 0px 5px rgba(0, 0, 0, 0.25)"};
`;

interface ItemProps {
  completed: boolean;
}

const Completed = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 28px;
`;

const Item = styled.div<ItemProps>`
  background: ${colorPalette.peach};
  display: flex;
  color: #333;
  margin: 16px 0;
  padding: 12px 16px;
  border-radius: 8px;
  opacity: ${(props) => (props.completed ? 0.6 : 0.9)};
  font-style: ${(props) => (props.completed ? "italic" : "normal")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
