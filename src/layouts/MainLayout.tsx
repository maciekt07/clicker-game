import { ReactNode } from "react";
import { UserProfileProps } from "../types/userProfileProps";
import { Navbar, ProfileAvatar } from "../components";

interface Props extends UserProfileProps {
  children: ReactNode;
}

export const MainLayout = ({
  userProfile,
  setUserProfile,
  children,
}: Props) => {
  return (
    <>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
      {children}
    </>
  );
};
