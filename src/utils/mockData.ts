
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
  {
    id: 'd5',
    name: 'Ramesh Reddy',
    phoneNumber: '+91 9876543214',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 'd6',
    name: 'Kiran Rao',
    phoneNumber: '+91 9876543215',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 'd7',
    name: 'Praveen Kumar',
    phoneNumber: '+91 9876543216',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 'd8',
    name: 'Naresh Varma',
    phoneNumber: '+91 9876543217',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 'd9',
    name: 'Venkat Rao',
    phoneNumber: '+91 9876543218',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 'd10',
    name: 'Ganesh Babu',
    phoneNumber: '+91 9876543219',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
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
  {
    id: 's9',
    name: 'Annavaram',
    location: { latitude: 17.2828, longitude: 82.4111 },
    timeToReach: '40 min',
  },
  {
    id: 's10',
    name: 'Tuni',
    location: { latitude: 17.3580, longitude: 82.5487 },
    timeToReach: '50 min',
  },
  {
    id: 's11',
    name: 'Elamanchili',
    location: { latitude: 17.5491, longitude: 82.8590 },
    timeToReach: '65 min',
  },
  {
    id: 's12',
    name: 'Anakapalle',
    location: { latitude: 17.6882, longitude: 83.0040 },
    timeToReach: '75 min',
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
  {
    id: 'r5',
    name: 'Annavaram Route',
    stops: [busStops[0], busStops[1], busStops[7], busStops[8]],
    description: 'Route to Annavaram temple town',
  },
  {
    id: 'r6',
    name: 'Tuni Express Route',
    stops: [busStops[0], busStops[1], busStops[8], busStops[9]],
    description: 'Express route to Tuni via Annavaram',
  },
  {
    id: 'r7',
    name: 'Vizag Extended Route',
    stops: [busStops[0], busStops[9], busStops[10], busStops[11]],
    description: 'Extended route covering towns towards Visakhapatnam',
  },
];

// Generate 50 buses with random parameters
const generateBuses = (count: number): Bus[] => {
  const buses: Bus[] = [];
  const statuses: Array<'running' | 'delayed' | 'stopped' | 'completed'> = ['running', 'delayed', 'stopped', 'completed'];
  const routeIds = busRoutes.map(route => route.id);
  const driverIds = drivers.map(driver => driver.id);
  
  for (let i = 1; i <= count; i++) {
    // Generate padded bus number (e.g., PEC-001, PEC-002)
    const busNumber = `PEC-${i.toString().padStart(3, '0')}`;
    
    // Get random route id
    const routeId = routeIds[Math.floor(Math.random() * routeIds.length)];
    const route = busRoutes.find(route => route.id === routeId);
    
    // Get random driver id, cycling through available drivers
    const driverId = driverIds[i % driverIds.length];
    
    // Get random status
    const status = statuses[Math.floor(Math.random() * (statuses.length - 1))]; // Excluding 'completed' most of the time
    
    // Generate random location along the route
    const baseStop = route ? route.stops[Math.floor(Math.random() * route.stops.length)] : busStops[0];
    
    // Add some randomness to location
    const latRandom = (Math.random() - 0.5) * 0.02;
    const lngRandom = (Math.random() - 0.5) * 0.02;
    
    // Random speed between 0 and 60 km/h
    const speed = status === 'running' ? Math.floor(Math.random() * 60) + 20 : 
                  status === 'delayed' ? Math.floor(Math.random() * 20) + 5 : 0;
    
    // Random time strings for estimated arrival
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const ampm = Math.random() > 0.5 ? 'AM' : 'PM';
    const estimatedArrival = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    buses.push({
      id: `b${i}`,
      busNumber,
      routeId,
      driverId,
      currentLocation: {
        latitude: baseStop.location.latitude + latRandom,
        longitude: baseStop.location.longitude + lngRandom
      },
      currentSpeed: speed,
      status,
      capacity: Math.floor(Math.random() * 15) + 40, // Random capacity between 40 and 55
      estimatedArrival,
      lastUpdated: new Date()
    });
  }
  
  return buses;
};

// Generate 50 buses
export const buses: Bus[] = generateBuses(50);

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
