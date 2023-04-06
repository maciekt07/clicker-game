import { useState, useEffect } from "react";
import {
  CreateProfile,
  StatsInfo,
  Shop,
  Navbar,
  ProfileAvatar,
  BackToTop,
} from "../components";
import { User } from "../types";
import { ClickButton, ClickContainer, ClickImg } from "../styles";
import { compactFormat } from "../utils";
import { achievements } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoneyJar from "../assets/honey-jar.png";
import ClickSound from "../assets/click.mp3";

interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}

export const Game = ({ userProfile, setUserProfile }: Props) => {
  const [clicks, setClicks] = useState<number>(userProfile.clicks);
  const handleSetUserProfile = (name: string | null, createdAt: Date) => {
    setUserProfile({
      ...userProfile,
      name: name,
      createdAt: createdAt,
    });
  };

  const handleClick = () => {
    const clickAudio = new Audio(ClickSound);
    clickAudio.volume = userProfile.audioVolume;
    clickAudio.play();
    handleAddPoints(userProfile.points + userProfile.multiplier);
    setClicks(clicks + 1);

    const unlockedClickAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.clicksRequired !== undefined &&
        clicks + 1 >= achievement.clicksRequired &&
        !userProfile.achievements.includes(achievement.name)
    );

    if (unlockedClickAchievements.length > 0) {
      // Show toast notification for each unlocked click achievement
      unlockedClickAchievements.forEach((achievement) => {
        toast(`🖱️ ${achievement.name} unlocked! - ${achievement.description}`);
      });

      // Add unlocked click achievements to user profile
      setUserProfile({
        ...userProfile,
        achievements: [
          ...userProfile.achievements,
          ...unlockedClickAchievements.map((achievement) => achievement.name),
        ],
      });
    }
  };

  const handleAddPoints = (points: number) => {
    const newPoints = points;
    const newMaxPoints = Math.max(newPoints, userProfile.maxPoints);

    const unlockedAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.requirement !== undefined &&
        newMaxPoints >= achievement.requirement &&
        userProfile.maxPoints < achievement.requirement &&
        !userProfile.achievements.includes(achievement.name)
    );

    if (unlockedAchievements.length > 0) {
      // Show toast notification for each unlocked achievement
      unlockedAchievements.forEach((achievement) => {
        toast(`🍯 ${achievement.name} unlocked! - ${achievement.description}`);
      });

      // Add unlocked achievements to user profile
      setUserProfile({
        ...userProfile,
        points: newPoints,
        maxPoints: newMaxPoints,
        clicks: clicks,
        achievements: [
          ...userProfile.achievements,
          ...unlockedAchievements.map((achievement) => achievement.name),
        ],
      });
    } else {
      setUserProfile({
        ...userProfile,
        points: newPoints,
        maxPoints: newMaxPoints,
        clicks: clicks,
      });
    }
  };

  useEffect(() => {
    if (userProfile.name !== null) {
      document.title = `Honey Clicker - ${compactFormat(userProfile.points)}`;
      //points per second interval
      const intervalId = setInterval(() => {
        handleAddPoints(userProfile.points + userProfile.perSecond / 100);
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  useEffect(() => {
    if (userProfile.name === null) {
      setClicks(0);
    }
  }, [userProfile]);

  return (
    <>
      {userProfile.name === null ? (
        <CreateProfile onSave={handleSetUserProfile} />
      ) : (
        <>
          <Navbar>
            <ProfileAvatar
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          </Navbar>

          <div style={{ paddingTop: "150px" }} />
          <ClickContainer>
            <ClickButton onClick={handleClick}>
              <ClickImg draggable="false" src={HoneyJar} />
            </ClickButton>
          </ClickContainer>
          <StatsInfo userProfile={userProfile} />
          <Shop userProfile={userProfile} setUserProfile={setUserProfile} />
          {/* TODO: Move the AchievementsList elsewhere */}
          {/* <AchievementsList userProfile={userProfile} /> */}
          <BackToTop />
        </>
      )}
    </>
  );
};
