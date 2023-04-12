import { Button } from "@mui/material";
import { Navbar, ProfileAvatar } from "../components";
import { User } from "../types";
import styled from "styled-components";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}

export const NotFound = ({ userProfile, setUserProfile }: Props) => {
  const n = useNavigate();
  return (
    <Container>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
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
        <ArrowBackIos /> Go Back To Main Site
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

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Description = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
