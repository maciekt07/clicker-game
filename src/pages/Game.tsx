import { useState, useEffect } from "react";
import {
  CreateProfile,
  StatsInfo,
  Shop,
  BackToTop,
  Quests,
} from "../components";
import { ClickButton, ClickContainer, ClickImg, ShareButton } from "../styles";
import { compactFormat, playSound, showToast } from "../utils";
import { achievements } from "../constants";
import "react-toastify/dist/ReactToastify.css";
import HoneyJar from "../assets/honey-jar.png";
import ClickSound from "../assets/sounds/click.mp3";
import { VolumeSlider } from "../components/VolumeSlider";
import { UserProfileProps } from "../types/userProfileProps";
import { Share } from "@mui/icons-material";

export const Game = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const userProfileProps = { userProfile, setUserProfile };
  const [clicks, setClicks] = useState<number>(userProfile.clicks);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleSetUserProfile = (name: string | null, createdAt: Date) => {
    setUserProfile({
      ...userProfile,
      name: name,
      createdAt: createdAt,
    });
  };

  // Function to handle clicking on the honey jar
  const handleClick = () => {
    // Play click sound
    playSound(ClickSound, userProfile.audioVolume);
    // Add points based on user's multiplier
    handleAddPoints(userProfile.points + userProfile.multiplier);
    // Increment click count
    setClicks(clicks + 1);
    //animation

    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    }
    // Check for unlocked click achievements
    const unlockedClickAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.clicksRequired !== undefined &&
        clicks + 1 >= achievement.clicksRequired &&
        !userProfile.achievements.includes(achievement.name)
    );
    // If there are unlocked click achievements, show toast notifications and update user profile
    if (unlockedClickAchievements.length > 0) {
      unlockedClickAchievements.forEach((achievement) => {
        showToast({
          header: `${achievement.name} unlocked!`,
          text: achievement.description,
          emoji: achievement.emoji,
          volume: userProfile.audioVolume,
        });
      });

      const newAchievements = userProfile.newAchievements + 1;
      // Add unlocked click achievements to user profile
      setUserProfile({
        ...userProfile,
        achievements: [
          ...userProfile.achievements,
          ...unlockedClickAchievements.map((achievement) => achievement.name),
        ],
        newAchievements: newAchievements,
      });
    }
  };

  // Function to add points to user's profile
  const handleAddPoints = (points: number) => {
    const newPoints = points;
    const newMaxPoints = Math.max(newPoints, userProfile.maxPoints);
    // Check for unlocked achievements
    const unlockedAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.requirement !== undefined &&
        newMaxPoints >= achievement.requirement &&
        userProfile.maxPoints < achievement.requirement &&
        !userProfile.achievements.includes(achievement.name)
    );
    // If there are unlocked achievements, show toast notifications and update user profile
    if (unlockedAchievements.length > 0) {
      // Show toast notification for each unlocked achievement
      unlockedAchievements.forEach((achievement) => {
        showToast({
          header: `${achievement.name} unlocked!`,
          text: achievement.description,
          emoji: achievement.emoji,
          volume: userProfile.audioVolume,
        });
      });
      const newAchievements = userProfile.newAchievements + 1;
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
        newAchievements: newAchievements,
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
      //Points per second interval
      const intervalId = setInterval(() => {
        handleAddPoints(userProfile.points + userProfile.perSecond / 100);
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  useEffect(() => {
    document.title = `Honey Clicker - ${compactFormat(userProfile.points)}`;
  }, [userProfile.points]);

  useEffect(() => {
    if (userProfile.name === null) {
      setClicks(0);
    }
  }, [userProfile]);

  const handleShareClick = async () => {
    //unlock share achievement
    const shareAchievementName = "ShareGameEnthusiast";
    const shareAchievement = achievements[shareAchievementName];

    if (!userProfile.achievements.includes(shareAchievement.name)) {
      const updatedAchievements = [
        ...userProfile.achievements,
        shareAchievement.name,
      ];
      setUserProfile({ ...userProfile, achievements: updatedAchievements });
      showToast({
        header: `${shareAchievement.name} unlocked!`,
        text: shareAchievement.description,
        emoji: shareAchievement.emoji,
        volume: userProfile.audioVolume,
      });
    }
    //share
    try {
      await navigator.share({
        title: "Honey Clicker",
        text: "Simple yet addictive clicker game where you can earn points by clicking on a honey jar. You can use your points to upgrade your clicking power and unlock achievements.",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      {userProfile.name === null ? (
        <CreateProfile onSave={handleSetUserProfile} />
      ) : (
        <>
          <VolumeSlider {...userProfileProps} />

          <ShareButton onClick={handleShareClick}>
            <Share /> &nbsp; Share
          </ShareButton>

          <ClickContainer onTouchStart={(e) => e.preventDefault()}>
            <ClickButton
              className={isClicked ? "clicked" : ""}
              onClick={handleClick}
              onTouchStart={(e) => e.preventDefault()}
            >
              <ClickImg draggable="false" src={HoneyJar} />
            </ClickButton>
          </ClickContainer>

          <StatsInfo userProfile={userProfile} />
          {/*TODO: Implement the quests component as it is not done yet. */}
          {/* <Quests {...userProfileProps} /> */}
          <Shop {...userProfileProps} />
          <BackToTop />
        </>
      )}
    </>
  );
};
