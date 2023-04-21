/**
 * Represents an item that can be purchased in the clicker game.
 * @interface
 * @property {string} name - The name of the item.
 * @property {number} cost - The cost of the item in honey.
 * @property {number} multiplier - The multiplier that the item applies to honey production.
 * @property {number} perSecond - The amount of honey produced per second by the item.
 * @property {string} description - A description of the item.
 * @property {string} [emoji] - An optional emoji representing the item.
 */
export interface Item {
  name: string;
  cost: number;
  multiplier: number;
  perSecond: number;
  description: string;
  emoji?: string;
}

/**
 * An object containing all the items that can be purchased in the game.
 * @constant
 * @type {Object<string, Item>}
 */
export const items: { [key: string]: Item } = {
  smallBee: {
    name: "Very Small Bee",
    cost: 20,
    multiplier: 0.5,
    perSecond: 0.1,
    description:
      "A tiny bee that doesn't produce much honey, but is a good starting point for your hive.",
    emoji: "🐝",
  },
  workerBee: {
    name: "Worker Bee",
    cost: 100,
    multiplier: 2,
    perSecond: 0.5,
    description:
      "The backbone of any bee colony, this bee works tirelessly to gather nectar and pollen and produce honey.",
    emoji: "🐝",
  },
  droneBee: {
    name: "Drone Bee",
    cost: 500,
    multiplier: 5,
    perSecond: 2,
    description:
      "A male bee whose sole purpose is to mate with the queen bee. Essential for the survival of the colony.",
    emoji: "🐝",
  },
  queenBee: {
    name: "Queen Bee",
    cost: 2500,
    multiplier: 25,
    perSecond: 5,
    description:
      "The ruler of the hive, the queen bee is responsible for laying all the eggs and maintaining the colony's social order.",
    emoji: "👑",
  },
  honeycomb: {
    name: "Honeycomb",
    cost: 5000,
    multiplier: 50,
    perSecond: 10,
    description:
      "A hexagonal wax structure that bees build to store their honey and raise their young.",
    emoji: "🍯",
  },
  honeyJar: {
    name: "Honey Jar",
    cost: 20000,
    multiplier: 100,
    perSecond: 25,
    description:
      "A jar filled with delicious, golden honey that's ready for human consumption.",
    emoji: "🍯",
  },
  apiary: {
    name: "Apiary",
    cost: 100000,
    multiplier: 500,
    perSecond: 100,
    description:
      "A collection of beehives that's used for commercial honey production.",
    emoji: "🏭",
  },
  hive: {
    name: "Hive",
    cost: 500000,
    multiplier: 1000,
    perSecond: 200,
    description:
      "A structure made of wax and propolis that houses a bee colony.",
    emoji: "🏡",
  },
  royalJelly: {
    name: "Royal Jelly",
    cost: 1000000,
    multiplier: 2000,
    perSecond: 500,
    description:
      "A special substance secreted by worker bees that's fed exclusively to the queen bee and her larvae.",
    emoji: "👑",
  },
  royalHive: {
    name: "Royal Hive",
    cost: 5000000,
    multiplier: 5000,
    perSecond: 1000,
    description:
      "A luxurious hive fit for a queen, with spacious chambers and plenty of room for her attendants.",
    emoji: "🏰",
  },
  beeSuit: {
    name: "Bee Suit",
    cost: 10000000,
    multiplier: 7500,
    perSecond: 1500,
    description:
      "A protective suit that covers the entire body and prevents bee stings.",
    emoji: "👩‍🚀",
  },
  pollenCollector: {
    name: "Pollen Collector",
    cost: 25000000,
    multiplier: 10000,
    perSecond: 2000,
    description:
      "A machine that automatically collects pollen from flowers, making the work of the bees a little easier.",
    emoji: "🌼",
  },
  diamondHive: {
    name: "Diamond Hive",
    cost: 100000000,
    multiplier: 25000,
    perSecond: 5000,
    description:
      "A hive made entirely of diamond, the ultimate symbol of luxury and prestige.",
    emoji: "💎",
  },
  honeyExtractor: {
    name: "Honey Extractor",
    cost: 500000000,
    multiplier: 50000,
    perSecond: 10000,
    description:
      "A device that spins the honeycombs and extracts the honey using centrifugal force.",
    emoji: "🍯",
  },
  beeMuseum: {
    name: "Bee Museum",
    cost: 1000000000,
    multiplier: 100000,
    perSecond: 20000,
    description:
      "A place that showcases the history, culture, and science of bees and honey.",
    emoji: "🏛️",
  },
};
