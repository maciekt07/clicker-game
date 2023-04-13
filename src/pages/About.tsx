import React from "react";
import { useEffect } from "react";
import { Navbar, ProfileAvatar, BackButton } from "../components";
import styled from "styled-components";
import { User } from "../types";

import { colorPalette } from "../styles";
import { Favorite, GitHub } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { achievements, items } from "../constants";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}
// TODO: Add more content to the About page
export const About = ({ userProfile, setUserProfile }: Props) => {
  const achievementsCount = Object.keys(achievements).length;
  const itemsCount = Object.keys(items).length;

  useEffect(() => {
    document.title = "About - Honey Clicker";
  }, []);
  const techStack = [
    { name: "React.js", link: "https://react.dev/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "Vite", link: "https://vitejs.dev/" },
    { name: "MUI", link: "https://mui.com/" },
    { name: "styled-components", link: "https://styled-components.com/" },
  ];
  return (
    <>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
      <BackButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AboutContainer>
          <AboutTitle>About Honey Clicker</AboutTitle>
          <AboutText>
            <b>Welcome to Honey Clicker!</b> This is a simple yet addictive
            clicker game where you can earn points by clicking on a honey jar.
            You can use your points to upgrade your clicking power, earn more
            points per second, and unlock achievements.
          </AboutText>
          <AboutText>
            <b>To get started,</b> simply click on the honey jar to earn points.
            You can also use the volume slider to adjust the game's sound
            effects. Don't forget to check out the stats info to see how many
            points you've earned and your progress towards unlocking
            achievements.
          </AboutText>
          <AboutText>
            <b>As you play the game,</b> you will unlock various achievements.
            There are currently <b>{achievementsCount} achievements</b>{" "}
            available to unlock in Honey Clicker. These include achievements for
            producing honey, clicking the button, and more. You can also visit
            the shop to purchase upgrades that will increase your points per
            second and multiplier. They are <b>{itemsCount} unique items</b> to
            buy.
          </AboutText>
          <AboutText>
            <b>Honey Clicker is a Progressive Web App. </b>
            Add this app to your home screen for quick and easy access to the
            game. This game works offline, so you can play it anytime, anywhere
            without an internet connection.
          </AboutText>
          <AboutText>
            Made with 🧡 by{" "}
            <AboutLink href="https://github.com/maciekt07" target="_blank">
              maciekt07
            </AboutLink>{" "}
            using:{" "}
            {techStack.map((tech, index) => (
              <React.Fragment key={index}>
                <AboutLink href={tech.link} target="_blank">
                  {tech.name}
                </AboutLink>
                {index !== techStack.length - 1 && ", "} &nbsp;
              </React.Fragment>
            ))}
          </AboutText>

          <Button
            href="https://github.com/maciekt07/clicker-game"
            target="_blank"
            variant="text"
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              padding: 8,
            }}
          >
            <GitHub /> &nbsp; Github
          </Button>
        </AboutContainer>
      </div>
    </>
  );
};
const AboutContainer = styled.div`
  background-color: #f5f5f5;
  padding: 32px;
  margin: 18px;
  border-radius: 28px;
  max-width: 1000px;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colorPalette.orange};
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333333;
`;

const AboutLink = styled.a`
  cursor: pointer;
  color: ${colorPalette.orange};
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colorPalette.orange};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 100px;
  }
  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    text-shadow: 0px 0px 20px ${colorPalette.orange};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
