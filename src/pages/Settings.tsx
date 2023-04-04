import { useEffect } from "react";
import { Navbar, ProfileAvatar } from "../components";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}
// TODO:
// - Implement form to allow user to change name
// - Improve UI with additional styling/layout
// - Display success/error messages upon form submission

export const Settings = ({ userProfile, setUserProfile }: Props) => {
  const n = useNavigate();
  useEffect(() => {
    document.title = `Honey Clicker Settings - ${userProfile.name}`;
  }, []);
  useEffect(() => {
    if (userProfile.name === null) {
      n("/");
    }
  }, [userProfile]);
  const handleVolumeChange = (event: Event, value: number | number[]) => {
    setUserProfile({ ...userProfile, audioVolume: value as number });
  };
  const createdAt = new Date(userProfile.createdAt);
  return (
    <>
      <Navbar>
        <ProfileAvatar
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </Navbar>
      <div style={{ paddingTop: "100px" }} />
      <div>name: {userProfile.name}</div>
      <div>
        created at {createdAt.toLocaleDateString()}{" "}
        {createdAt.toLocaleTimeString()}
      </div>
      <div>Volume: {userProfile.audioVolume}</div>
      <Slider
        sx={{ width: "200px" }}
        value={userProfile.audioVolume}
        min={0}
        max={1}
        step={0.1}
        onChange={handleVolumeChange}
      />
    </>
  );
};
