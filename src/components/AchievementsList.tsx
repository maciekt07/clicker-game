import { User } from "../types";
import { Achievement, achievements } from "../constants/achievements";

interface Props {
  userProfile: User;
}

export const AchievementsList = ({ userProfile }: Props) => {
  const unlockedAchievements = Object.values(achievements).filter(
    (achievement) => userProfile.achievements.includes(achievement.name)
  );

  return (
    <div>
      {userProfile.achievements.length !== 0 && <h2>unlocked achievements</h2>}

      {unlockedAchievements.map((achievement) => (
        <div key={achievement.name}>
          <h3>{achievement.name}</h3>
          <p>{achievement.description}</p>
          {/* <p>
            Requirement: {achievement.clicksRequired || achievement.requirement}
          </p> */}
        </div>
      ))}
    </div>
  );
};
