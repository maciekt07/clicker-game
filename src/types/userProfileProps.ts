import { User } from "./user";
/**
 * Props for components that use user profile.
 *
 * @interface Props
 * @property {User} userProfile - The user profile.
 * @property {React.Dispatch<React.SetStateAction<User>>} setUserProfile - A function to update the user profile.
 */
export interface UserProfileProps {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}
