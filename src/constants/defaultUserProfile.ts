import { User } from "../types/user";
/**
 * The default user profile object.
 * @type {User}
 */
export const defaultUserProfile: User = {
  name: null,
  createdAt: new Date(),
  profilePicture: null,
  points: 0,
  clicks: 0,
  maxPoints: 0,
  multiplier: 1,
  perSecond: 0.1,
  inventory: {},
  achievements: [],
  newAchievements: 0,
  audioVolume: 0.3,
};
