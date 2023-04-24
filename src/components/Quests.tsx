import styled from "styled-components";
import { UserProfileProps } from "../types/userProfileProps";
import { colorPalette } from "../styles";
import { compactFormat } from "../utils";
import { Done } from "@mui/icons-material";

// TODO: Implement the quests component as it is not done yet.
export const Quests = ({ userProfile, setUserProfile }: UserProfileProps) => {
  // Calculates the reward for completing all quests based on the user's maximum points.
  // If the maximum points divided by 8 is greater than 100, the reward is equal to the maximum points divided by 8.
  // Otherwise, the reward is a minimum of 100.
  const reward =
    userProfile.maxPoints / 8 > 1000 ? userProfile.maxPoints / 8 : 1000;

  const questsList = {
    FirstQuest: {
      name: "available soon (or not)",
      completed: false,
    },
    SecondQuest: {
      name: "completed quest",
      completed: true,
    },
    // Example quests
    // clicks: {
    //   name: "Click Honey Jar 200 times",
    //   completed: false,
    // },
    // buys: {
    //   name: "Buy 50 items in shop",
    //   completed: false,
    // },
  };
  const allCompleted = Object.values(questsList).every(
    (quest) => quest.completed
  );
  return (
    <Container>
      <Header>Quests for {userProfile.name}</Header>

      {!allCompleted ? (
        Object.values(questsList).map((quest, index) => (
          <Item completed={quest.completed} key={index}>
            {quest.completed && <Done />} {quest.name}
          </Item>
        ))
      ) : (
        <p>All quests completed</p>
      )}
      {!allCompleted && <p>Reward = 🍯{compactFormat(reward)}</p>}
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff2f;
  margin-left: 20px;
  min-width: 250px;
  padding: 20px;
  position: absolute;
  top: 220px;
  border-radius: 20px;
  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    margin: 25px 200px;
  }
  @media (max-width: 700px) {
    margin: 25px 80px;
  }
`;

const Header = styled.h3`
  color: ${colorPalette.orange};
`;

interface ItemProps {
  completed: boolean;
}

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
