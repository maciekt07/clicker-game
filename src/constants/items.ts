import { Item } from "../types";

export const items: { [key: string]: Item } = {
  smallBee: {
    name: "Very Small Bee",
    cost: 20,
    multiplier: 0.5,
    perSecond: 0.1,
  },
  workerBee: {
    name: "Worker Bee",
    cost: 100,
    multiplier: 1,
    perSecond: 0.5,
  },
  droneBee: {
    name: "Drone Bee",
    cost: 500,
    multiplier: 5,
    perSecond: 2,
  },
  queenBee: {
    name: "Queen Bee",
    cost: 2500,
    multiplier: 25,
    perSecond: 5,
  },
  honeycomb: {
    name: "Honeycomb",
    cost: 5000,
    multiplier: 50,
    perSecond: 10,
  },
  honeyJar: {
    name: "Honey Jar",
    cost: 20000,
    multiplier: 100,
    perSecond: 25,
  },
  apiary: {
    name: "Apiary",
    cost: 100000,
    multiplier: 500,
    perSecond: 100,
  },
  hive: {
    name: "Hive",
    cost: 500000,
    multiplier: 1000,
    perSecond: 200,
  },
  royalJelly: {
    name: "Royal Jelly",
    cost: 1000000,
    multiplier: 2000,
    perSecond: 500,
  },
  royalHive: {
    name: "Royal Hive",
    cost: 5000000,
    multiplier: 5000,
    perSecond: 1000,
  },
  pollenCollector: {
    name: "Pollen Collector",
    cost: 25000000,
    multiplier: 10000,
    perSecond: 2000,
  },
  diamondHive: {
    name: "Diamond Hive",
    cost: 100000000,
    multiplier: 25000,
    perSecond: 5000,
  },
};
