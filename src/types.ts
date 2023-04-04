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
@property {number} audioVolume - The user's audio volume level.
*/

export interface User {
  name: string | null;
  createdAt: Date | null;
  points: number;
  clicks: number;
  maxPoints: number;
  multiplier: number;
  perSecond: number;
  inventory: {
    [itemName: string]: number;
  };
  achievements: string[];
  audioVolume: number;
}

/**
Represents an item available for purchase in the shop.
@interface
@property {string} name - The name of the item.
@property {number} cost - The cost of the item in points.
@property {number} multiplier - The multiplier applied to the user's point earnings per click when the item is purchased.
@property {number} perSecond - The number of points the user earns per second when the item is purchased.
*/
export interface Item {
  name: string;
  cost: number;
  multiplier: number;
  perSecond: number;
}
