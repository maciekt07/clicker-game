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
} from "@mui/material";
import { AvatarContainer } from "../styles";
import { User } from "../types";
import { EmojiEvents, Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AchievementsList } from "./AchievementsList";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}

export const ProfileAvatar = ({ userProfile, setUserProfile }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [achievementsDialog, setAchievementsDialog] = useState(false);
  const n = useNavigate();
  return (
    <>
      <AvatarContainer
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Tooltip
          title={userProfile.name !== null ? userProfile.name : "No Account"}
          placement="bottom-start"
        >
          <IconButton>
            <Badge
              badgeContent={userProfile.newAchievements}
              color="secondary"
              overlap="circular"
            >
              <Avatar
                src={userProfile.profilePicture?.toString()}
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "24px",
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
            borderRadius: 12,
            background: "#ffffffd0",
            backdropFilter: "blur(6px)",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            n("/settings");
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem
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
        </MenuItem>

        <MenuItem
          onClick={() => {
            setLogoutDialog(true);
            setAnchorEl(null);
          }}
          disabled={userProfile.name === null}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
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
            }}
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 18,
            padding: 24,
          },
        }}
        open={achievementsDialog}
        onClose={() => setAchievementsDialog(false)}
      >
        <DialogTitle>{userProfile.name} Achievements </DialogTitle>
        <AchievementsList userProfile={userProfile} />
        <DialogActions>
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
        </DialogActions>
      </Dialog>
    </>
  );
};
