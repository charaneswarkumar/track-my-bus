
import { BusRoute } from '../types';
import { busStops } from './busStops';

// Mock data for routes
export const busRoutes: BusRoute[] = [
  {
    id: "route1",
    routeNumber: "21",
    name: "Kakinada - Pragati College",
    stops: [busStops[1], busStops[0]],
    description: "Route from Kakinada RTC to Pragati College",
  },
  {
    id: "route2",
    routeNumber: "70",
    name: "Samalkot - Pragati College",
    stops: [busStops[2], busStops[0]],
    description: "Route from Samalkot to Pragati College",
  },
  {
    id: "route3",
    routeNumber: "23",
    name: "Pithapuram - Pragati College",
    stops: [busStops[3], busStops[0]],
    description: "Route from Pithapuram to Pragati College",
  },
  // Additional routes
  {
    id: "route4",
    routeNumber: "24",
    name: "Annavaram - Pragati College",
    stops: [busStops[4], busStops[0]],
    description: "Route from Annavaram to Pragati College",
  },
  {
    id: "route5",
    routeNumber: "25",
    name: "Peddapuram - Pragati College",
    stops: [busStops[5], busStops[0]],
    description: "Route from Peddapuram to Pragati College",
  },
  {
    id: "route6",
    routeNumber: "26",
    name: "Gollaprolu - Pragati College",
    stops: [busStops[6], busStops[0]],
    description: "Route from Gollaprolu to Pragati College",
  },
  {
    id: "route7",
    routeNumber: "27",
    name: "Tuni - Pragati College",
    stops: [busStops[7], busStops[0]],
    description: "Route from Tuni to Pragati College",
  },
  {
    id: "route8",
    routeNumber: "28",
    name: "Kotananduru - Pragati College",
    stops: [busStops[8], busStops[0]],
    description: "Route from Kotananduru to Pragati College",
  },
  {
    id: "route9",
    routeNumber: "29",
    name: "Prathipadu - Pragati College",
    stops: [busStops[9], busStops[0]],
    description: "Route from Prathipadu to Pragati College",
  },
];

// Function to get the details of a specific route
export const getRouteDetails = (routeId: string) => {
  return busRoutes.find(r => r.id === routeId);
};
