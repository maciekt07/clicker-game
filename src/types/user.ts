/**
Represents the user profile data structure.
@interface
@property {string | null} name - The user's name.
@property {number} points - The user's total points.
@property {number} clicks - The number of clicks the user has made.
@property {number} maxPoints - The user's maximum possible points.
@property {number} multiplier - The user's current point multiplier.
@property {number} perSecond - The number of points the user earns per second.
@property {Object.<string, number>} inventory - The user's inventory of items, where the keys are the item names and the values are the number of items.
@property {string[]} achievements - The user's list of achieved achievements.
@property {number} newAchievements - The number of unread achievements.
@property {number} audioVolume - The user's audio volume level.
@property {Object.<string, Date>} dateAchievements - The dates when the user achieved each achievement.
*/

export interface User {
  name: string | null;
  profilePicture: string | null;
  createdAt: Date;
  points: number;
  clicks: number;
  maxPoints: number;
  multiplier: number;
  perSecond: number;
  inventory: {
    [itemName: string]: number;
  };
  achievements: string[];
  newAchievements: number;
  audioVolume: number;
  dateAchievements: {
    [achievementName: string]: Date;
  };
  quests: {
    daysCounter: number;
  };
}
