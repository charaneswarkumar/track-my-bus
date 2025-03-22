import { Bus, BusRoute, BusStop, Driver, YearGroup } from './types';

// Mock data for bus stops
export const busStops: BusStop[] = [
  {
    id: "stop1",
    name: "Pragati College",
    location: { latitude: 16.9912, longitude: 82.2475 },
  },
  {
    id: "stop2",
    name: "Kakinada RTC Complex",
    location: { latitude: 16.9980, longitude: 82.2450 },
  },
  {
    id: "stop3",
    name: "Samalkot Center",
    location: { latitude: 17.0500, longitude: 82.2000 },
  },
  // Additional stops
  {
    id: "stop4",
    name: "Pithapuram Main Bus Stop",
    location: { latitude: 17.1167, longitude: 82.2667 },
  },
  {
    id: "stop5",
    name: "Annavaram Temple",
    location: { latitude: 17.2167, longitude: 82.3333 },
  },
  {
    id: "stop6",
    name: "Peddapuram Bus Stand",
    location: { latitude: 17.0833, longitude: 82.1333 },
  },
  {
    id: "stop7",
    name: "Gollaprolu Center",
    location: { latitude: 17.1500, longitude: 82.0667 },
  },
  {
    id: "stop8",
    name: "Tuni Bus Complex",
    location: { latitude: 17.2500, longitude: 82.3000 },
  },
  {
    id: "stop9",
    name: "Kotananduru Bus Stop",
    location: { latitude: 17.3000, longitude: 82.3500 },
  },
  {
    id: "stop10",
    name: "Prathipadu Center",
    location: { latitude: 17.0333, longitude: 82.0333 },
  },
];

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

// Mock data for drivers
export const drivers: Driver[] = [
  {
    id: "driver1",
    name: "Ch Nageswararao",
    phoneNumber: "9876543210",
  },
  {
    id: "driver2",
    name: "B Raju",
    phoneNumber: "9876543211",
  },
  {
    id: "driver3",
    name: "Ch Venkateswarao",
    phoneNumber: "9876543212",
  },
  // Additional drivers
  {
    id: "driver4",
    name: "V Saiji Rao",
    phoneNumber: "9876543213",
  },
  {
    id: "driver5",
    name: "Md Khalisha",
    phoneNumber: "9876543214",
  },
  // ... more drivers as needed
];

// Mock data for buses
export const allBuses: Bus[] = [
  {
    id: "bus1",
    vehicleNumber: "AP05TA0994",
    busNumber: "21",
    routeId: "route1",
    driverId: "driver1",
    years: ["I", "II", "III", "IV"],
    currentLocation: { latitude: 16.9891, longitude: 82.2475 },
    currentSpeed: 45,
    status: "running",
    capacity: 50,
    estimatedArrival: "08:30 AM",
    lastUpdated: new Date(),
  },
  {
    id: "bus2",
    vehicleNumber: "AP05TD7854",
    busNumber: "70",
    routeId: "route2",
    driverId: "driver2",
    years: ["II", "III"],
    currentLocation: { latitude: 16.9791, longitude: 82.2375 },
    currentSpeed: 40,
    status: "running",
    capacity: 46,
    estimatedArrival: "08:45 AM",
    lastUpdated: new Date(),
  },
  {
    id: "bus3",
    vehicleNumber: "AP05TA0996",
    busNumber: "23",
    routeId: "route3",
    driverId: "driver3",
    years: ["I"],
    currentLocation: { latitude: 16.9691, longitude: 82.2575 },
    currentSpeed: 35,
    status: "running",
    capacity: 50,
    estimatedArrival: "08:40 AM",
    lastUpdated: new Date(),
  },
  // ... more buses as needed
];

// Filter buses by route number
export const filterBuses = (query: string): Bus[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  return allBuses.filter(bus => {
    // First try exact match on bus number
    if (bus.busNumber === lowercaseQuery) {
      return true;
    }
    
    // Then try partial match
    return bus.busNumber.toLowerCase().includes(lowercaseQuery);
  });
};
