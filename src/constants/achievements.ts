/**
Represents an achievement that can be earned by the user.
@interface
@property {string} name - The name of the achievement.
@property {string} description - The description of the achievement.
@property {number=} requirement - The amount required to obtain the achievement.
@property {number=} clicksRequired - The number of clicks required to obtain the achievement.
*/
// TODO: Move this interface to types folder
export interface Achievement {
  name: string;
  description: string;
  requirement?: number;
  clicksRequired?: number;
}
/**
An object containing all the achievements that can be earned by the user.
@constant
@type {Object.<string, Achievement>}
*/
export const achievements: { [key: string]: Achievement } = {
  honeyBeginner: {
    name: "Honey Beginner",
    description: "Produce 100 honey",
    requirement: 100,
  },
  beekeeperTrainee: {
    name: "Beekeeper Trainee",
    description: "Produce 1,000 honey",
    requirement: 1000,
  },
  honeyExpert: {
    name: "Honey Expert",
    description: "Produce 10,000 honey",
    requirement: 10000,
  },
  beekeepingMaster: {
    name: "Beekeeping Master",
    description: "Produce 100,000 honey",
    requirement: 100000,
  },
  honeyLegend: {
    name: "Honey Legend",
    description: "Produce 1,000,000 honey",
    requirement: 1000000,
  },
  honeyTycoon: {
    name: "Honey Tycoon",
    description: "Produce 10,000,000 honey",
    requirement: 10000000,
  },
  honeyMagnate: {
    name: "Honey Magnate",
    description: "Produce 100,000,000 honey",
    requirement: 100000000,
  },
  honeyBaron: {
    name: "Honey Baron",
    description: "Produce 1,000,000,000 honey",
    requirement: 1000000000,
  },
  honeyEmpire: {
    name: "Honey Empire",
    description: "Produce 10,000,000,000 honey",
    requirement: 10000000000,
  },
  honeyUniverse: {
    name: "Honey Universe",
    description: "Produce 100,000,000,000 honey",
    requirement: 100000000000,
  },
  clickingNovice: {
    name: "Clicker Novice",
    description: "Click the button 10 times",
    clicksRequired: 10,
  },
  clickingPro: {
    name: "Clicker Pro",
    description: "Click the button 100 times",
    clicksRequired: 100,
  },
  clickingMaster: {
    name: "Clicking Master",
    description: "Click the button 1000 times",
    clicksRequired: 1000,
  },
  clickingLegend: {
    name: "Clicking Legend",
    description: "Click the button 10,000 times",
    clicksRequired: 10000,
  },
  clickingGod: {
    name: "Clicking God",
    description: "Click the button 100,000 times",
    clicksRequired: 100000,
  },
};
