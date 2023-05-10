import {
  Avatar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { nameToAvatar } from "../utils";
import { FormContainer, NameInput, CreateButton } from "../styles";
import { UserProfileProps } from "../types/userProfileProps";

export const CreateProfile = ({
  userProfile,
  setUserProfile,
}: UserProfileProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dialog, setDialog] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setInputValue(event.target.value);
  };

  useEffect(() => {
    document.title = "Create Profile - Honey Clicker";
  }, []);
  const handleSetUserProfile = () => {
    if (inputValue.length < 4) {
      setErrorMessage("Must be at least 4 characters long");
    } else if (inputValue.length > 16)
      setErrorMessage("Can be up to 16 characters long");
    else {
      setUserProfile({
        ...userProfile,
        name: inputValue,
        createdAt: new Date(),
      });
    }
  };

  return (
    <>
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
        <DialogTitle>Looks like you don't have a profile yet</DialogTitle>
        <DialogContent>
          You can create it now by entering your nickname
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: ".9rem",
              borderRadius: 12,
              fontFamily: "Inter",
            }}
            onClick={() => setDialog(false)}
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <FormContainer>
        <Avatar
          style={{
            width: "96px",
            height: "96px",
            fontSize: "36px",
            background: "#f28705",
            boxShadow: "0 0 30px -1px #f28705cb",
          }}
        >
          {inputValue !== "" ? nameToAvatar(inputValue) : null}
        </Avatar>
        <br />
        <NameInput
          error={errorMessage !== null}
          helperText={errorMessage}
          label="Enter You Username"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSetUserProfile()}
        />
        <br />
        <CreateButton onClick={handleSetUserProfile}>Save Profile</CreateButton>
      </FormContainer>
    </>
  );
};
