import { useEffect } from "react";
import { Button } from "@mui/material";
import { Navbar, ProfileAvatar } from "../components";
import styled, { keyframes } from "styled-components";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SadBee from "../assets/SadBee.png";
import { UserProfileProps } from "../types/userProfileProps";

export const NotFound = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const n = useNavigate();
  useEffect(() => {
    document.title = `Page Not Found - Honey Clicker`;
  }, []);
  return (
    <Container>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
      <Image src={SadBee} />
      <Title>404</Title>
      <Description>Page not found</Description>
      <Button
        variant="outlined"
        style={{
          fontSize: "1rem",
          padding: ".9em 1.4em",
          borderRadius: "20px",
        }}
        onClick={() => n("/")}
      >
        <ArrowBackIos /> Go Back To Main Page
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 200px;
  animation: ${bounce} 1s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Description = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
