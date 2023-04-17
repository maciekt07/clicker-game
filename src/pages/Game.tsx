import { useState, useEffect } from "react";
import {
  CreateProfile,
  StatsInfo,
  Shop,
  Navbar,
  ProfileAvatar,
  BackToTop,
} from "../components";

import { ClickButton, ClickContainer, ClickImg } from "../styles";
import { compactFormat, playSound } from "../utils";
import { achievements } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoneyJar from "../assets/honey-jar.png";
import ClickSound from "../assets/click.mp3";
import { VolumeSlider } from "../components/VolumeSlider";
import { UserProfileProps } from "../types/userProfileProps";
import { useKeyDown } from "../hooks";

export const Game = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const [clicks, setClicks] = useState<number>(userProfile.clicks);
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
        toast(
          <>
            <b>🖱️ {achievement.name} unlocked!</b>
            <br />
            <span>{achievement.description}</span>
          </>
        );
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

  useKeyDown("Enter", handleClick);

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
        // toast(`🍯 ${achievement.name} unlocked! - ${achievement.description}`);
        toast(
          <>
            <b>🍯 {achievement.name} unlocked!</b>
            <br />
            <span>{achievement.description}</span>
          </>
        );
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
      document.title = `Honey Clicker - ${compactFormat(userProfile.points)}`;
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
          <VolumeSlider
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
          {/* TODO: add click animation on mobile */}

          <ClickContainer onTouchStart={(e) => e.preventDefault()}>
            <ClickButton
              onClick={handleClick}
              onTouchStart={(e) => e.preventDefault()}
            >
              <ClickImg draggable="false" src={HoneyJar} />
            </ClickButton>
          </ClickContainer>
          <StatsInfo userProfile={userProfile} />
          <Shop userProfile={userProfile} setUserProfile={setUserProfile} />
          <BackToTop />
        </>
      )}
    </>
  );
};
