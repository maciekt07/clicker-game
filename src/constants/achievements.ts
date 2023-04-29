/**
Represents an achievement that can be earned by the user.
@interface
@property {string} name - The name of the achievement.
@property {string} emoji - The emoji representing the achievement.
@property {string} description - The short description of the achievement.
@property {string} [longDescription] - The longer description of the achievement.
@property {number} [requirement] - The amount required to obtain the achievement.
@property {number} [clicksRequired] - The number of clicks required to obtain the achievement.
@property {number} [purchasesRequired] - The number of purchases required to obtain the achievement.
*/
export interface Achievement {
  name: string;
  emoji: string;
  description: string;
  longDescription?: string;
  reward?: number;
  requirement?: number;
  clicksRequired?: number;
  purchasesRequired?: number;
  strRequirement?: string;
}
/**
An object containing all the achievements that can be earned by the user.
@constant
@type {Object.<string, Achievement>}
*/
export const achievements: { [key: string]: Achievement } = {
  //points
  honeyBeginner: {
    name: "Honey Beginner",
    emoji: "🍯",
    description: "Produce 100 honey",
    longDescription:
      "You've taken your first steps into the world of beekeeping and produced 100 sweet, golden drops of honey. Keep up the buzz-worthy work!",
    requirement: 100,
  },
  beekeeperTrainee: {
    name: "Beekeeper Trainee",
    emoji: "🍯",
    description: "Produce 1,000 honey",
    longDescription:
      "You've graduated to the rank of Beekeeper Trainee by producing 1,000 jars of honey. Your bees must be working overtime!",
    requirement: 1000,
  },
  honeyExpert: {
    name: "Honey Expert",
    emoji: "🍯",
    description: "Produce 10,000 honey",
    longDescription:
      "You're no longer a novice beekeeper; you're a Honey Expert! You've produced 10,000 jars of honey and have undoubtedly earned the respect of your bee colony.",
    requirement: 10000,
  },
  beekeepingMaster: {
    name: "Beekeeping Master",
    emoji: "🍯",
    description: "Produce 100,000 honey",
    longDescription:
      "You've mastered the art of beekeeping and produced 100,000 jars of honey. Your honey is in high demand and your bees couldn't be happier.",
    requirement: 100000,
  },
  honeyLegend: {
    name: "Honey Legend",
    emoji: "🍯",
    description: "Produce 1,000,000 honey",
    longDescription:
      "You're a Honey Legend! With 1,000,000 jars of honey under your belt, your honey is known far and wide for its sweetness and quality.",
    requirement: 1000000,
  },
  honeyTycoon: {
    name: "Honey Tycoon",
    emoji: "🍯",
    description: "Produce 10,000,000 honey",
    longDescription:
      "Your beekeeping empire is growing! With 10,000,000 jars of honey produced, you're now a Honey Tycoon. Keep up the sweet work!",
    requirement: 10000000,
  },
  honeyMagnate: {
    name: "Honey Magnate",
    emoji: "🍯",
    description: "Produce 100,000,000 honey",
    longDescription:
      "You're a Honey Magnate, producing 100,000,000 jars of honey! Your honey is a top seller and you've become a household name in the beekeeping world.",
    requirement: 100000000,
  },
  honeyBaron: {
    name: "Honey Baron",
    emoji: "🍯",
    description: "Produce 1,000,000,000 honey",
    longDescription:
      "With 1,000,000,000 jars of honey produced, you're now a Honey Baron. Your bees are well-fed and happy, and your honey is a sought-after commodity.",
    requirement: 1000000000,
  },
  honeyEmpire: {
    name: "Honey Empire",
    emoji: "🍯",
    description: "Produce 10,000,000,000 honey",
    longDescription:
      "You've built a honey empire with 10,000,000,000 jars of honey produced. Your bees are buzzing with pride, and your honey is the envy of all other beekeepers.",
    requirement: 10000000000,
  },
  honeyUniverse: {
    name: "Honey Universe",
    emoji: "🍯",
    description: "Produce 100,000,000,000 honey",
    longDescription:
      "You're a true master of beekeeping with 100,000,000,000 jars of honey produced, earning you the title of Honey Universe. Your bees bow down to your greatness!",
    requirement: 100000000000,
  },
  //clicks
  clickingNovice: {
    name: "Clicker Novice",
    emoji: "🖱️",
    description: "Click the button 10 times",
    longDescription:
      "You've clicked the button 10 times and earned the title of Clicker Novice. Your clicking skills are just starting to buzz!",
    clicksRequired: 10,
  },
  clickingPro: {
    name: "Clicker Pro",
    emoji: "🖱️",
    description: "Click the button 100 times",
    longDescription:
      "With 100 clicks under your belt, you're now a Clicker Pro. Keep up the speedy clicking!",
    clicksRequired: 100,
  },
  clickingChampion: {
    name: "Clicking Champion",
    emoji: "🖱️",
    description: "Click the button 500 times",
    longDescription:
      "You've clicked the button 500 times and have earned the title of Clicking Champion. Your clicking skills are truly impressive!",
    clicksRequired: 500,
  },
  clickingMaster: {
    name: "Clicking Master",
    emoji: "🖱️",
    description: "Click the button 1000 times",
    longDescription:
      "You've clicked the button 1000 times and are now a Clicking Master. Your fingers are lightning-fast and your clicking skills are truly impressive.",
    clicksRequired: 1000,
  },
  clickingSuperstar: {
    name: "Clicking Superstar",
    emoji: "🖱️",
    description: "Click the button 5000 times",
    longDescription:
      "You've clicked the button 5000 times and have earned the title of Clicking Superstar. Your clicking skills are unmatched, and you are truly a master of the art of clicking!",
    clicksRequired: 5000,
  },
  clickingLegend: {
    name: "Clicking Legend",
    emoji: "🖱️",
    description: "Click the button 10,000 times",
    longDescription:
      "You're a Clicking Legend with 10,000 button clicks. Your clicking abilities are unmatched, and your speed is simply astounding.",
    clicksRequired: 10000,
  },
  clickingTitan: {
    name: "Clicking Titan",
    emoji: "🖱️",
    description: "Click the button 50,000 times",
    longDescription:
      "You've clicked the button 50,000 times, achieving the title of Clicking Titan. Your clicking skills are beyond impressive and have reached a level of mastery that few can match.",
    clicksRequired: 50000,
  },
  clickingGod: {
    name: "Clicking God",
    emoji: "🖱️",
    description: "Click the button 100,000 times",
    longDescription:
      "You've clicked the button 100,000 times, earning the title of Clicking God. Your clicking skills are truly divine!",
    clicksRequired: 100000,
  },
  // buys
  buyBeginner: {
    name: "Buy Beginner",
    emoji: "🛍️",
    description: "Buy 10 items",
    longDescription:
      "You've made your first 10 purchases and earned the title of Buy Beginner. Keep buying and building your beekeeping empire!",
    purchasesRequired: 10,
  },
  shoppingPro: {
    name: "Shopping Pro",
    emoji: "🛍️",
    description: "Buy 100 items",
    longDescription:
      "With 100 purchases made, you're now a Shopping Pro. Your beekeeping equipment is top-of-the-line, and your bees are happy and well-cared-for.",
    purchasesRequired: 100,
  },
  buyTycoon: {
    name: "Buy Tycoon",
    emoji: "🛍️",
    description: "Buy 500 items",
    longDescription:
      "You've purchased 500 items and have earned the title of Buy Tycoon. Your dedication to beekeeping and your exceptional shopping skills have propelled your empire to new heights!",
    purchasesRequired: 500,
  },
  buyExpert: {
    name: "Buy Expert",
    emoji: "🛍️",
    description: "Buy 1,000 items",
    longDescription:
      "You've made 1,000 purchases and have earned the title of Buy Expert. Your beekeeping knowledge and equipment are second to none!",
    purchasesRequired: 1000,
  },
  buyingChampion: {
    name: "Buying Champion",
    emoji: "🛍️",
    description: "Buy 5,000 items",
    longDescription:
      "You've made 5,000 purchases and have earned the title of Buying Champion. Your beekeeping skills and knowledge have grown tremendously, and your bees are thriving under your expert care.",
    purchasesRequired: 5000,
  },
  buyingMaster: {
    name: "Buying Master",
    emoji: "🛍️",
    description: "Buy 10,000 items",
    longDescription:
      "You're a Buying Master, having made 10,000 purchases. Your beekeeping empire is growing rapidly, and your bees are thriving under your care.",
    purchasesRequired: 10000,
  },

  buyingLegend: {
    name: "Buy Legend",
    emoji: "🛍️",
    description: "Buy 50,000 items",
    longDescription:
      "With 50,000 purchases made, you're now a Buy Legend. Your beekeeping empire is massive, and your honey is in high demand worldwide.",
    purchasesRequired: 50000,
  },
  buyingTitan: {
    name: "Buying Titan",
    emoji: "🛍️",
    description: "Buy 100,000 items",
    longDescription:
      "You've made 100,000 purchases and have earned the title of Buying Titan. Your beekeeping empire is the envy of beekeepers everywhere, and your honey is known for its unparalleled quality.",
    purchasesRequired: 100000,
  },
  //others
  ShareGameEnthusiast: {
    name: "Share Game Enthusiast",
    emoji: "🔗",
    description: "Click on share button",
    longDescription:
      "You've shared this amazing game on a social media platform, spreading the word about the wonders of beekeeping. Keep buzzing and sharing!",
    reward: 1000,
  },
  volumeController: {
    name: "Volume Controller",
    emoji: "🔊",
    description: "Adjust the volume of game sounds",
    longDescription:
      "You've taken control of the game sounds by adjusting the volume to your liking. Whether you prefer it loud or soft, you're now in charge of the audio experience!",
  },
  profilePicturePro: {
    name: "Profile Picture Pro",
    emoji: "📷",
    description: "Change your profile picture",
    longDescription:
      "You've updated your profile picture and earned the title of Profile Picture Pro. Your new picture looks great!",
  },
};
