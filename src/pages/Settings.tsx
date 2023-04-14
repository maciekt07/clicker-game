import { useEffect, useState } from "react";
import { Navbar, ProfileAvatar, BackButton } from "../components";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Tooltip,
  IconButton,
  Badge,
} from "@mui/material";
import { formatTimeAgo, isImageUrl } from "../utils";

import { SaveButton, SettingsContainer, SettingsInput } from "../styles";

import { nameToAvatar } from "../utils";
import { Delete, Edit, InfoOutlined, Logout } from "@mui/icons-material";
import { defaultUserProfile } from "../constants";
import { UserProfileProps } from "../types/userProfileProps";

export const Settings = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [imgError, setImgError] = useState("");
  const [imgDialog, setImgDialog] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);

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
      <BackButton />
      <SettingsContainer>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClick={() => setImgDialog(true)}
          badgeContent={
            <Avatar style={{ background: "#6b6b6b", cursor: "pointer" }}>
              <Edit />
            </Avatar>
          }
        >
          <Avatar
            src={userProfile.profilePicture?.toString()}
            onError={() =>
              setUserProfile({ ...userProfile, profilePicture: null })
            }
            style={{
              width: "128px",
              height: "128px",
              fontSize: "60px",
              // border: `${
              //   userProfile.profilePicture === null
              //     ? "none"
              //     : "3px solid" + colorPalette.orange
              // }`,
              background: `${
                userProfile.profilePicture === null ? "#f28705" : ""
              }`,
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
        </Badge>
        <div style={{ fontSize: "24px" }}>{userProfile.name}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.7,
          }}
        >
          <Tooltip
            title={`Created At: ${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`}
          >
            <IconButton>
              <InfoOutlined />
            </IconButton>
          </Tooltip>
          <span> Registered since {formatTimeAgo(createdAt.toString())}</span>
        </div>
        {/* <div>🏆 Max Points: {formatNumber(userProfile.maxPoints)}</div> */}
        <br />
        {/* <Button
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
        <br /> */}

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
        {name !== "" && (
          <SaveButton
            disabled={name === userProfile.name}
            onClick={() => {
              if (name.length < 4) {
                setNameError("Must be at least 4 characters long");
              } else if (name.length > 32)
                setNameError("Can be up to 32 characters long");
              else {
                setUserProfile({
                  ...userProfile,
                  name: name,
                });
                setName("");
              }
            }}
          >
            Save
          </SaveButton>
        )}
        <Button
          style={{
            fontSize: ".9rem",
            borderRadius: 12,
            padding: "8px 14px",
          }}
          color="error"
          onClick={() => setLogoutDialog(true)}
        >
          <Logout /> &nbsp; logout
        </Button>
      </SettingsContainer>

      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
          },
        }}
        open={imgDialog}
        onClose={() => {
          setImgDialog(false);
        }}
      >
        <DialogTitle>Change Profile Picture</DialogTitle>
        <DialogContent>
          <br />

          <SettingsInput
            type="url"
            label="Link To Profile Picture"
            error={imgError !== ""}
            helperText={imgError}
            value={imgLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImgLink(e.target.value);
              setImgError("");
            }}
          />
          <br />
          <br />
          <Button
            color="error"
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => {
              setUserProfile({ ...userProfile, profilePicture: null });
              setImgDialog(false);
              setImgError("");
              setImgLink("");
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
            }}
            onClick={() => setImgDialog(false)}
          >
            cancel
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => {
              if (isImageUrl(imgLink)) {
                setImgDialog(false);
                setImgLink("");
                setUserProfile({
                  ...userProfile,
                  profilePicture: imgLink === "" ? null : imgLink,
                });
              } else {
                setImgError("Please provide a valid image URL.");
              }
            }}
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 4,
          },
        }}
        open={logoutDialog}
        onClose={() => setLogoutDialog(false)}
      >
        <DialogTitle>Are You Sure You Want To Log Out?</DialogTitle>
        <DialogContent>Your profile will not be saved</DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => setLogoutDialog(false)}
          >
            no
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
            }}
            onClick={() => {
              setLogoutDialog(false);
              setUserProfile(defaultUserProfile);
            }}
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
