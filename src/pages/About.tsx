import { useEffect } from "react";
import { Navbar, ProfileAvatar } from "../components";

import { User } from "../types";
import { BackButton } from "../components/BackButton";

interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}
// TODO: Add more content to the About page
export const About = ({ userProfile, setUserProfile }: Props) => {
  useEffect(() => {
    document.title = "About - Honey Clicker";
  }, []);
  return (
    <>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
      <div style={{ paddingTop: "100px" }} />
      <BackButton />
      <div>About</div>
      <h3>
        idk clicker game made in 3 days with react styled-components and mui
      </h3>
      <a target="_blank" href="https://github.com/maciekt07/clicker-game">
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=maciekt07&repo=clicker-game&theme=gruvbox"
          alt="github"
        />
      </a>
    </>
  );
};
