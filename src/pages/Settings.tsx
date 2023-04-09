import { useEffect, useState } from "react";
import { Navbar, ProfileAvatar } from "../components";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import {
  Slider,
  Avatar,
  Button,
  Typography,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { formatTimeAgo } from "../utils";
import { BackButton } from "../components/BackButton";
import { SaveButton, SettingsContainer, SettingsInput } from "../styles";

import { nameToAvatar } from "../utils";
import { Delete, Launch, VolumeDown } from "@mui/icons-material";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}
// TODO:
// - Implement form to allow user to change name
// - Implement form to allow user to change profile picture
// - Improve UI with additional styling/layout
// - Display success/error messages upon form submission

export const Settings = ({ userProfile, setUserProfile }: Props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [imgDialog, setImgDialog] = useState(false);

  const n = useNavigate();
  useEffect(() => {
    document.title = `Settings - ${userProfile.name} - Honey Clicker`;
  }, []);
  useEffect(() => {
    if (userProfile.name === null) {
      n("/");
    }
  }, [userProfile]);

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
      <BackButton />
      <SettingsContainer>
        <Avatar
          src={userProfile.profilePicture?.toString()}
          style={{
            width: "128px",
            height: "128px",
            fontSize: "64px",
            background: "#f28705",
            boxShadow: `${
              userProfile.profilePicture === null
                ? "0 0 30px -1px #f28705cb"
                : ""
            }`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {nameToAvatar(userProfile.name)}
        </Avatar>

        <div style={{ fontSize: "24px" }}>{userProfile.name}</div>
        <div>Registered since {formatTimeAgo(createdAt.toString())}</div>
        <br />
        <Button
          style={{
            fontSize: ".9rem",
            borderRadius: 12,
            padding: "8px 14px",
          }}
          variant="outlined"
          disableElevation
          onClick={() => setImgDialog(true)}
        >
          <Launch /> &nbsp; Change Image
        </Button>
        <br />

        <SettingsInput
          label="Change Name"
          type="text"
          value={name}
          error={nameError !== ""}
          helperText={nameError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
            setNameError("");
          }}
        />
        <br />

        <SaveButton
          disabled={name === userProfile.name}
          onClick={() => {
            if (name.length < 4) {
              setNameError("Must be at least 4 characters long");
            } else if (name.length > 16)
              setNameError("Can be up to 16 characters long");
            else {
              setUserProfile({
                ...userProfile,
                name: name,
              });
            }
          }}
        >
          Save
        </SaveButton>
      </SettingsContainer>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
            fontFamily: "Inter",
          },
        }}
        open={imgDialog}
        onClose={() => setImgDialog(false)}
      >
        <DialogTitle>Change Profile Picture</DialogTitle>
        <DialogContent>
          <br />

          <SettingsInput
            type="text"
            label="Link To Profile Picture"
            value={imgLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImgLink(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            color="error"
            onClick={() => {
              setUserProfile({ ...userProfile, profilePicture: null });
              setImgDialog(false);
            }}
          >
            <Delete /> &nbsp; Delete Image
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => setImgDialog(false)}
          >
            cancel
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => {
              setImgDialog(false);
              setUserProfile({
                ...userProfile,
                profilePicture: imgLink === "" ? null : imgLink,
              });
            }}
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
