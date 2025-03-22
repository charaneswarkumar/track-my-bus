
import { Bus } from '../types';
import { busRoutes } from './busRoutes';
import { drivers } from './drivers';

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

// Function to get the details of a specific bus
export const getBusDetails = (busId: string) => {
  const bus = allBuses.find(b => b.id === busId);
  if (!bus) return null;
  
  const route = busRoutes.find(r => r.id === bus.routeId);
  const driver = drivers.find(d => d.id === bus.driverId);
  
  return {
    bus,
    route,
    driver
  };
};

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
