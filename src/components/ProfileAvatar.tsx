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
} from "@mui/material";
import { AvatarContainer } from "../styles";
import { User } from "../types";
import { Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}

export const ProfileAvatar = ({ userProfile, setUserProfile }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [dialog, setDialog] = useState(false);
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
          <Avatar
            style={{
              width: "50px",
              height: "50px",
              fontSize: "24px",
              background: "#f28705",
              boxShadow: "0 0 30px -1px #f28705cb",
            }}
          >
            {nameToAvatar(userProfile.name)}
          </Avatar>
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
            setDialog(true);
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
            fontFamily: "Inter",
          },
        }}
        open={dialog}
        onClose={() => setDialog(false)}
      >
        <DialogTitle>Are You Sure You Want To Log Out?</DialogTitle>
        <DialogContent>Your profile will not be saved</DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => setDialog(false)}
          >
            no
          </Button>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => {
              setDialog(false);
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
