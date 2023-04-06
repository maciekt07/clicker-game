import { useEffect } from "react";
import { Navbar, ProfileAvatar } from "../components";

import { User } from "../types";

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
      <h3>
        idk clicker game made in 3 days with react styled-components and mui
      </h3>
    </>
  );
};
