import React from "react";
import { useEffect } from "react";
import { BackButton } from "../components";
import styled, { keyframes } from "styled-components";
import { colorPalette } from "../styles";
import { Coffee, GitHub } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { achievements, items } from "../constants";
import PLFlag from "../assets/poland-flag-icon.svg";
import HappyBee from "../assets/HappyBee.png";

export const About = () => {
  // Calculate the number of achievements and items
  const achievementsCount = Object.keys(achievements).length;
  const itemsCount = Object.keys(items).length;
  // Set the document title
  useEffect(() => {
    document.title = "About - Honey Clicker";
  }, []);

  // Define the technology stack used to build the game
  const techStack = [
    { name: "React.js", link: "https://react.dev/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "Vite", link: "https://vitejs.dev/" },
    { name: "MUI", link: "https://mui.com/" },
    { name: "styled-components", link: "https://styled-components.com/" },
  ];
  return (
    <>
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
            achievements. To customize your Honey Clicker profile, you can
            access the user profile settings by clicking on the profile icon at
            the top right corner of the game's screen. From there, you can
            change your username and profile picture by clicking on the
            respective fields and uploading a new image or typing in a new name.
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
            in <Flag src={PLFlag} /> using:{" "}
            {techStack.map((tech, index) => (
              <React.Fragment key={index}>
                <AboutLink href={tech.link} target="_blank">
                  {tech.name}
                </AboutLink>
                {index !== techStack.length - 1 && ", "} &nbsp;
              </React.Fragment>
            ))}
          </AboutText>
          <br />
          <Stack spacing={2} direction="row">
            <Button
              href="https://github.com/maciekt07/clicker-game"
              target="_blank"
              variant="outlined"
              style={{
                fontSize: ".9rem",
                borderRadius: 12,
                padding: 10,
              }}
            >
              <GitHub /> &nbsp; Github
            </Button>
            <Button
              href="https://www.buymeacoffee.com/maciekt07"
              target="_blank"
              variant="outlined"
              style={{
                fontSize: ".9rem",
                borderRadius: 12,
                padding: 10,
              }}
            >
              <Coffee /> &nbsp; Buy me a coffee
            </Button>
          </Stack>
        </AboutContainer>
        {/* <BeeImg src={HappyBee} alt="happy bee" /> */}
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

const Flag = styled.img`
  width: 20px;
  border-radius: 3px;
  filter: drop-shadow(0px 0px 1.5px rgba(0, 0, 0, 0.45));
`;

interface LinkProps {
  color?: string;
}

const AboutLink = styled.a<LinkProps>`
  cursor: pointer;
  color: ${(props) => props.color || colorPalette.orange};
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
    background-color: ${(props) => props.color || colorPalette.orange};
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
    text-shadow: 0px 0px 20px ${(props) => props.color || colorPalette.orange};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
// const bounce = keyframes`
//    0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-12px);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;
// const BeeImg = styled.img`
//   position: fixed;
//   bottom: 12px;
//   right: 12px;
//   width: 12vw;
//   max-width: 140px;
//   animation: ${bounce} 1.5s ease-in-out infinite;
//   @media (max-width: 1300px) {
//     opacity: 0.8;
//   }
// `;
