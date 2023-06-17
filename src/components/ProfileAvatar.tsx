import { useState } from "react";
import { nameToAvatar } from "../utils";
import { defaultUserProfile } from "../constants";
import {
  Avatar,
  Tooltip,
  MenuItem,
  Menu,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  IconButton,
  Badge,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { AvatarContainer, colorPalette } from "../styles";
import { UserProfileProps } from "../types/userProfileProps";
import {
  Close,
  EmojiEvents,
  Logout,
  ManageAccounts,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AchievementsList } from "./AchievementsList";
import { toast } from "react-toastify";
import styled from "@emotion/styled";
export const ProfileAvatar = ({
  userProfile,
  setUserProfile,
}: UserProfileProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [logoutDialog, setLogoutDialog] = useState<boolean>(false);
  const [achievementsDialog, setAchievementsDialog] = useState<boolean>(false);
  const n = useNavigate();
  return (
    <>
      <AvatarContainer
        onClick={(event) => {
          userProfile.name === null ? n("/") : setAnchorEl(event.currentTarget);
        }}
      >
        <Tooltip
          title={userProfile.name !== null ? userProfile.name : "No Account"}
          placement="bottom-start"
        >
          <IconButton>
            <Badge
              badgeContent={userProfile.newAchievements}
              max={9}
              color="secondary"
              overlap="circular"
            >
              <Avatar
                src={userProfile.profilePicture?.toString()}
                alt="Profile Avatar"
                onError={() => {
                  setUserProfile({ ...userProfile, profilePicture: null });
                  toast.error(
                    "Failed to load profile picture. Please check if image url is correct"
                  );
                }}
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "27px",

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
          </IconButton>
        </Tooltip>
      </AvatarContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            borderRadius: 16,
            marginTop: 24,
            padding: 2,
          },
        }}
      >
        <StyledMenuItem
          onClick={() => {
            n("/settings");
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <ManageAccounts />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </StyledMenuItem>

        <StyledMenuItem
          onClick={() => {
            setAnchorEl(null);
            setAchievementsDialog(true);
            setUserProfile({ ...userProfile, newAchievements: 0 });
          }}
          disabled={
            userProfile.name === null || userProfile.achievements.length === 0
          }
        >
          <ListItemIcon>
            <Badge
              badgeContent={userProfile.newAchievements}
              variant="dot"
              color="primary"
            >
              <EmojiEvents />
            </Badge>
          </ListItemIcon>
          <ListItemText>Achievements</ListItemText>
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem
          onClick={() => {
            setLogoutDialog(true);
            setAnchorEl(null);
          }}
          disabled={userProfile.name === null}
          color="error"
        >
          <ListItemIcon style={{ color: colorPalette.red }}>
            <Logout />
          </ListItemIcon>
          <ListItemText style={{ color: colorPalette.red }}>
            Logout
          </ListItemText>
        </StyledMenuItem>
      </Menu>
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
              toast.success("Successfully logged out");
            }}
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen={useMediaQuery("(max-width:768px)")}
        PaperProps={{
          style: {
            borderRadius: 32,
            padding: 24,
            minWidth: "500px",
          },
        }}
        open={achievementsDialog}
        onClose={() => setAchievementsDialog(false)}
      >
        <DialogTitle
          sx={{
            marginLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span> {userProfile.name} Achievements</span>
          <IconButton
            onClick={() => setAchievementsDialog(false)}
            color="error"
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <AchievementsList userProfile={userProfile} />
        <br />
        <Divider />
        <br />
        <Button
          onClick={() => setAchievementsDialog(false)}
          style={{
            fontSize: "1rem",
            borderRadius: 12,
            padding: 12,
          }}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};

const StyledMenuItem = styled(MenuItem)`
  padding: 12px;
  border-radius: 16px;
  margin: 6px 4px;
`;
