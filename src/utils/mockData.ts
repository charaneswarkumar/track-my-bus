
import { Bus, BusRoute, BusStop, Driver } from './types';

// Mock Drivers
export const drivers: Driver[] = [
  {
    id: 'd1',
    name: 'Rajesh Kumar',
    phoneNumber: '+91 9876543210',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'd2',
    name: 'Suresh Patel',
    phoneNumber: '+91 9876543211',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 'd3',
    name: 'Vivek Singh',
    phoneNumber: '+91 9876543212',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 'd4',
    name: 'Amit Sharma',
    phoneNumber: '+91 9876543213',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

// Mock Bus Stops
export const busStops: BusStop[] = [
  {
    id: 's1',
    name: 'Pragati Engineering College',
    location: { latitude: 17.0307, longitude: 82.2504 },
  },
  {
    id: 's2',
    name: 'Surampalem Junction',
    location: { latitude: 17.0338, longitude: 82.2376 },
    timeToReach: '5 min',
  },
  {
    id: 's3',
    name: 'Kakinada Bus Stand',
    location: { latitude: 16.9891, longitude: 82.2475 },
    timeToReach: '20 min',
  },
  {
    id: 's4',
    name: 'Rajahmundry Bus Station',
    location: { latitude: 17.0139, longitude: 81.7800 },
    timeToReach: '45 min',
  },
  {
    id: 's5',
    name: 'Kathipudi',
    location: { latitude: 17.1307, longitude: 82.2304 },
    timeToReach: '15 min',
  },
  {
    id: 's6',
    name: 'Samalkot',
    location: { latitude: 17.0553, longitude: 82.1779 },
    timeToReach: '25 min',
  },
  {
    id: 's7',
    name: 'Pithapuram',
    location: { latitude: 17.1155, longitude: 82.2528 },
    timeToReach: '30 min',
  },
  {
    id: 's8',
    name: 'Gollaprolu',
    location: { latitude: 17.0685, longitude: 82.2943 },
    timeToReach: '18 min',
  },
];

// Mock Bus Routes
export const busRoutes: BusRoute[] = [
  {
    id: 'r1',
    name: 'Surampalem - Kakinada Route',
    stops: [busStops[0], busStops[1], busStops[2]],
    description: 'Main route connecting college to Kakinada city',
  },
  {
    id: 'r2',
    name: 'Surampalem - Rajahmundry Route',
    stops: [busStops[0], busStops[1], busStops[5], busStops[3]],
    description: 'Express route to Rajahmundry via Samalkot',
  },
  {
    id: 'r3',
    name: 'Northern Villages Route',
    stops: [busStops[0], busStops[1], busStops[4], busStops[6]],
    description: 'Covering northern villages including Kathipudi and Pithapuram',
  },
  {
    id: 'r4',
    name: 'Eastern Villages Route',
    stops: [busStops[0], busStops[1], busStops[7], busStops[2]],
    description: 'Covering eastern villages and ending at Kakinada',
  },
];

// Mock Buses
export const buses: Bus[] = [
  {
    id: 'b1',
    busNumber: 'PEC-001',
    routeId: 'r1',
    driverId: 'd1',
    currentLocation: { latitude: 17.0322, longitude: 82.2440 },
    currentSpeed: 42,
    status: 'running',
    capacity: 50,
    estimatedArrival: '08:45 AM',
    lastUpdated: new Date(),
  },
  {
    id: 'b2',
    busNumber: 'PEC-002',
    routeId: 'r2',
    driverId: 'd2',
    currentLocation: { latitude: 17.0400, longitude: 82.0100 },
    currentSpeed: 55,
    status: 'running',
    capacity: 45,
    estimatedArrival: '09:10 AM',
    lastUpdated: new Date(),
  },
  {
    id: 'b3',
    busNumber: 'PEC-003',
    routeId: 'r3',
    driverId: 'd3',
    currentLocation: { latitude: 17.1200, longitude: 82.2400 },
    currentSpeed: 0,
    status: 'stopped',
    capacity: 50,
    estimatedArrival: '09:30 AM',
    lastUpdated: new Date(),
  },
  {
    id: 'b4',
    busNumber: 'PEC-004',
    routeId: 'r4',
    driverId: 'd4',
    currentLocation: { latitude: 17.0500, longitude: 82.2700 },
    currentSpeed: 35,
    status: 'delayed',
    capacity: 45,
    estimatedArrival: '09:45 AM',
    lastUpdated: new Date(),
  },
];

// Helper function to get bus details with related data
export const getBusDetails = (busId: string) => {
  const bus = buses.find(b => b.id === busId);
  if (!bus) return null;
  
  const route = busRoutes.find(r => r.id === bus.routeId);
  const driver = drivers.find(d => d.id === bus.driverId);
  
  return {
    ...bus,
    route,
    driver,
  };
};

// Helper function to get route details with all stops
export const getRouteDetails = (routeId: string) => {
  return busRoutes.find(r => r.id === routeId);
};

// Helper function to filter buses based on search criteria
export const filterBuses = (query: string) => {
  const searchTerm = query.toLowerCase();
  
  return buses.filter(bus => {
    // Get related data
    const route = busRoutes.find(r => r.id === bus.routeId);
    const driver = drivers.find(d => d.id === bus.driverId);
    
    // Search in different fields
    return (
      bus.busNumber.toLowerCase().includes(searchTerm) ||
      (route && route.name.toLowerCase().includes(searchTerm)) ||
      (driver && driver.name.toLowerCase().includes(searchTerm)) ||
      bus.status.toLowerCase().includes(searchTerm)
    );
  });
};
