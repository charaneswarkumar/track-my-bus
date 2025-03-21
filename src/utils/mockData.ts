
import { Bus, BusRoute, BusStop, Driver, YearGroup } from './types';

// Mock Drivers - Updated with the provided data
export const drivers: Driver[] = [
  { id: 'd1', name: 'Ch Nageswararao', phoneNumber: '+91 9876543210' },
  { id: 'd2', name: 'B Raju', phoneNumber: '+91 9876543211' },
  { id: 'd3', name: 'Ch Venkateswarao', phoneNumber: '+91 9876543212' },
  { id: 'd4', name: 'V Saiji Rao', phoneNumber: '+91 9876543213' },
  { id: 'd5', name: 'Md Khalisha', phoneNumber: '+91 9876543214' },
  { id: 'd6', name: 'N Talupulachari', phoneNumber: '+91 9876543215' },
  { id: 'd7', name: 'G Govindu', phoneNumber: '+91 9876543216' },
  { id: 'd8', name: 'G Chinnarao', phoneNumber: '+91 9876543217' },
  { id: 'd9', name: 'K Raviteja', phoneNumber: '+91 9876543218' },
  { id: 'd10', name: 'M Srinu', phoneNumber: '+91 9876543219' },
  // Additional drivers as per the provided data
  { id: 'd11', name: 'S V Ramana', phoneNumber: '+91 9876543220' },
  { id: 'd12', name: 'Y Ganagadhar', phoneNumber: '+91 9876543221' },
  { id: 'd13', name: 'V Y Dasu', phoneNumber: '+91 9876543222' },
  { id: 'd14', name: 'Y Sathibabu', phoneNumber: '+91 9876543223' },
  { id: 'd15', name: 'V Venkateswarao', phoneNumber: '+91 9876543224' },
  { id: 'd16', name: 'M Nageswarao', phoneNumber: '+91 9876543225' },
  { id: 'd17', name: 'Kondapalli Prakash', phoneNumber: '+91 9876543226' },
  { id: 'd18', name: 'K Simhachalam', phoneNumber: '+91 9876543227' },
  { id: 'd19', name: 'Md Karimullasha', phoneNumber: '+91 9876543228' },
  { id: 'd20', name: 'R Prabhakar', phoneNumber: '+91 9876543229' },
  // And many more drivers from the list...
];

// College and main towns location coordinates
const locations = {
  pragatiEngCollege: { latitude: 17.0307, longitude: 82.2504 },
  surampalem: { latitude: 17.0338, longitude: 82.2376 },
  kakinada: { latitude: 16.9891, longitude: 82.2475 },
  rajahmundry: { latitude: 17.0139, longitude: 81.7800 },
  pithapuram: { latitude: 17.1155, longitude: 82.2528 },
  samalkota: { latitude: 17.0553, longitude: 82.1779 },
  mandapeta: { latitude: 17.0095, longitude: 81.9273 },
  anaparthy: { latitude: 17.0423, longitude: 82.1198 },
  biccavolu: { latitude: 17.0551, longitude: 82.0098 },
  kathipudi: { latitude: 17.1307, longitude: 82.2304 },
  pedapudi: { latitude: 17.0685, longitude: 82.2943 },
  gollaprolu: { latitude: 17.0685, longitude: 82.2943 },
  peddada: { latitude: 17.0784, longitude: 82.3050 },
  rayavaram: { latitude: 17.0834, longitude: 82.2645 },
  annavaram: { latitude: 17.2828, longitude: 82.4111 },
  yeleswaram: { latitude: 17.3000, longitude: 82.1500 },
  tuni: { latitude: 17.3580, longitude: 82.5487 },
  draksharamam: { latitude: 16.9500, longitude: 82.0000 },
  dowleswaram: { latitude: 16.9500, longitude: 81.7800 },
};

// Generate locations with slight offsets for routes not in the main list
const getLocationWithOffset = (baseLoc: { latitude: number, longitude: number }, offsetFactor: number) => {
  return {
    latitude: baseLoc.latitude + (Math.random() - 0.5) * 0.05 * offsetFactor,
    longitude: baseLoc.longitude + (Math.random() - 0.5) * 0.05 * offsetFactor
  };
};

// Mock Bus Stops - Expanded with more stops from the routes
export const busStops: BusStop[] = [
  { id: 's1', name: 'Pragati Engineering College', location: locations.pragatiEngCollege },
  { id: 's2', name: 'Surampalem Junction', location: locations.surampalem, timeToReach: '5 min' },
  { id: 's3', name: 'Kakinada Bus Stand', location: locations.kakinada, timeToReach: '20 min' },
  { id: 's4', name: 'Rajahmundry Bus Station', location: locations.rajahmundry, timeToReach: '45 min' },
  { id: 's5', name: 'Kathipudi', location: locations.kathipudi, timeToReach: '15 min' },
  { id: 's6', name: 'Samalkot', location: locations.samalkota, timeToReach: '25 min' },
  { id: 's7', name: 'Pithapuram', location: locations.pithapuram, timeToReach: '30 min' },
  { id: 's8', name: 'Gollaprolu', location: locations.gollaprolu, timeToReach: '18 min' },
  { id: 's9', name: 'Annavaram', location: locations.annavaram, timeToReach: '40 min' },
  { id: 's10', name: 'Mandapeta', location: locations.mandapeta, timeToReach: '30 min' },
  { id: 's11', name: 'Anaparthy', location: locations.anaparthy, timeToReach: '25 min' },
  { id: 's12', name: 'Biccavolu', location: locations.biccavolu, timeToReach: '35 min' },
  { id: 's13', name: 'Pedapudi', location: locations.pedapudi, timeToReach: '15 min' },
  { id: 's14', name: 'Peddada', location: locations.peddada, timeToReach: '20 min' },
  { id: 's15', name: 'Rayavaram', location: locations.rayavaram, timeToReach: '22 min' },
  { id: 's16', name: 'Tuni', location: locations.tuni, timeToReach: '50 min' },
  { id: 's17', name: 'Draksharamam', location: locations.draksharamam, timeToReach: '35 min' },
  // Additional stops from the routes data
  { id: 's18', name: 'Pulagurtha', location: getLocationWithOffset(locations.pragatiEngCollege, 1), timeToReach: '30 min' },
  { id: 's19', name: 'Machavaram', location: getLocationWithOffset(locations.pragatiEngCollege, 1.2), timeToReach: '35 min' },
  { id: 's20', name: 'Someswaram', location: getLocationWithOffset(locations.pragatiEngCollege, 1.3), timeToReach: '40 min' },
  { id: 's21', name: 'Lolla', location: getLocationWithOffset(locations.pragatiEngCollege, 1.4), timeToReach: '45 min' },
  { id: 's22', name: 'Tallapalem', location: getLocationWithOffset(locations.draksharamam, 0.5), timeToReach: '40 min' },
  { id: 's23', name: 'Dwarapudi', location: getLocationWithOffset(locations.mandapeta, 0.5), timeToReach: '35 min' },
  { id: 's24', name: 'Tapeswaram', location: getLocationWithOffset(locations.mandapeta, 0.7), timeToReach: '32 min' },
  { id: 's25', name: 'Ippanapadu', location: getLocationWithOffset(locations.mandapeta, 0.9), timeToReach: '38 min' },
  { id: 's26', name: 'Ramachandrapuram', location: getLocationWithOffset(locations.mandapeta, 1.1), timeToReach: '42 min' },
  { id: 's27', name: 'Mamaidada', location: getLocationWithOffset(locations.biccavolu, 0.5), timeToReach: '30 min' },
  { id: 's28', name: 'Neeladrirao Peta', location: getLocationWithOffset(locations.pragatiEngCollege, 1.5), timeToReach: '25 min' },
  { id: 's29', name: 'Jaggampeta', location: getLocationWithOffset(locations.pragatiEngCollege, 1.6), timeToReach: '30 min' },
  { id: 's30', name: 'Katravulapalli', location: getLocationWithOffset(locations.pragatiEngCollege, 1.7), timeToReach: '35 min' },
  // Add more stops as needed...
];

// Create bus routes based on the provided data
export const busRoutes: BusRoute[] = [
  {
    id: 'r21', 
    routeNumber: '21',
    name: 'Pulagurtha-Machavaram-Someswaram-Lolla',
    stops: [busStops[0], busStops[17], busStops[18], busStops[19], busStops[20]],
    description: 'Route 21 connecting Pragati Engineering College to surrounding villages'
  },
  {
    id: 'r70',
    routeNumber: '70',
    name: 'Draksharamam-Tallapalem',
    stops: [busStops[0], busStops[16], busStops[21]],
    description: 'Route 70 connecting college to Draksharamam and Tallapalem'
  },
  {
    id: 'r23',
    routeNumber: '23',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 23 serving Mandapeta, Dwarapudi and Anaparthy areas'
  },
  {
    id: 'r24',
    routeNumber: '24',
    name: 'Mandapeta-Tapeswaram-Ippanapadu-Iltd Anaparthy',
    stops: [busStops[0], busStops[9], busStops[23], busStops[24], busStops[10]],
    description: 'Route 24 covering extended areas around Mandapeta and Anaparthy'
  },
  {
    id: 'r36',
    routeNumber: '36',
    name: 'Ramachandrapuram Mamaidada Biccavolu',
    stops: [busStops[0], busStops[25], busStops[26], busStops[11]],
    description: 'Route 36 connecting to Ramachandrapuram and surrounding areas'
  },
  {
    id: 'r35',
    routeNumber: '35',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 35 serving Mandapeta, Dwarapudi and Anaparthy'
  },
  {
    id: 'r31',
    routeNumber: '31',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 31 covering Mandapeta, Dwarapudi and Anaparthy'
  },
  {
    id: 'r32',
    routeNumber: '32',
    name: 'Neeladrirao Peta-Jaggampeta-Katravulapalli-Surampalem',
    stops: [busStops[0], busStops[27], busStops[28], busStops[29], busStops[1]],
    description: 'Route 32 covering northern areas including Jaggampeta'
  },
  {
    id: 'r34',
    routeNumber: '34',
    name: 'Kadakuduru-Pedapudi-Peddada',
    stops: [busStops[0], busStops[12], busStops[13]],
    description: 'Route 34 covering eastern areas including Pedapudi and Peddada'
  },
  {
    id: 'r33',
    routeNumber: '33',
    name: 'Rayavaram-Tossipudi-Balabhadrapuram',
    stops: [busStops[0], busStops[14]],
    description: 'Route 33 serving areas around Rayavaram'
  },
  // Add more routes based on the data...
];

// Function to map years from string to YearGroup array
function parseYears(yearStr: string): YearGroup[] {
  if (yearStr === "STAFF") return ["STAFF"];
  
  return yearStr.split(',').map(y => {
    const trimmed = y.trim();
    if (trimmed === "I" || trimmed === "II" || trimmed === "III" || trimmed === "IV") {
      return trimmed as YearGroup;
    }
    return "I" as YearGroup; // default fallback
  });
}

// Generate buses based on the provided data
export const buses: Bus[] = [
  // First bus from data
  {
    id: 'b1',
    vehicleNumber: 'AP05TA0994',
    busNumber: '21',
    routeId: 'r21',
    driverId: 'd1',
    years: parseYears('I,II,III,IV'),
    currentLocation: getLocationWithOffset(locations.pragatiEngCollege, 0.5),
    currentSpeed: Math.floor(Math.random() * 40) + 20,
    status: 'running',
    capacity: 50,
    estimatedArrival: '08:30 AM',
    lastUpdated: new Date()
  },
  // Second bus
  {
    id: 'b2',
    vehicleNumber: 'AP05TD7854',
    busNumber: '70',
    routeId: 'r70',
    driverId: 'd2',
    years: parseYears('II, III'),
    currentLocation: getLocationWithOffset(locations.draksharamam, 0.3),
    currentSpeed: Math.floor(Math.random() * 40) + 15,
    status: 'running',
    capacity: 50,
    estimatedArrival: '08:45 AM',
    lastUpdated: new Date()
  },
  // Third bus
  {
    id: 'b3',
    vehicleNumber: 'AP05TA0996',
    busNumber: '23',
    routeId: 'r23',
    driverId: 'd3',
    years: parseYears('I'),
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.4),
    currentSpeed: Math.floor(Math.random() * 40) + 18,
    status: 'running',
    capacity: 46,
    estimatedArrival: '08:40 AM',
    lastUpdated: new Date()
  },
  // Fourth bus
  {
    id: 'b4',
    vehicleNumber: 'AP05TA0998',
    busNumber: '24',
    routeId: 'r24',
    driverId: 'd4',
    years: parseYears('II, III'),
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.6),
    currentSpeed: Math.floor(Math.random() * 30) + 20,
    status: 'delayed',
    capacity: 46,
    estimatedArrival: '09:00 AM',
    lastUpdated: new Date()
  },
  // Fifth bus
  {
    id: 'b5',
    vehicleNumber: 'AP05TA5278',
    busNumber: '36',
    routeId: 'r36',
    driverId: 'd5',
    years: parseYears('II'),
    currentLocation: getLocationWithOffset(locations.biccavolu, 0.4),
    currentSpeed: Math.floor(Math.random() * 40) + 22,
    status: 'running',
    capacity: 40,
    estimatedArrival: '08:50 AM',
    lastUpdated: new Date()
  },
  // And so on for other buses...
  // For brevity, we'll add just a few more representative buses
  {
    id: 'b6',
    vehicleNumber: 'AP05TA5279',
    busNumber: '35',
    routeId: 'r35',
    driverId: 'd6',
    years: parseYears('II,III,IV'),
    currentLocation: getLocationWithOffset(locations.anaparthy, 0.5),
    currentSpeed: Math.floor(Math.random() * 35) + 25,
    status: 'running',
    capacity: 40,
    estimatedArrival: '08:35 AM',
    lastUpdated: new Date()
  },
  {
    id: 'b7',
    vehicleNumber: 'AP05TA5280',
    busNumber: '31',
    routeId: 'r31',
    driverId: 'd7',
    years: parseYears('III'),
    currentLocation: getLocationWithOffset(locations.anaparthy, 0.7),
    currentSpeed: 0,
    status: 'stopped',
    capacity: 40,
    estimatedArrival: '09:15 AM',
    lastUpdated: new Date()
  },
  {
    id: 'b8',
    vehicleNumber: 'AP05TA5367',
    busNumber: '32',
    routeId: 'r32',
    driverId: 'd8',
    years: parseYears('I,II,III,IV'),
    currentLocation: getLocationWithOffset(locations.surampalem, 0.3),
    currentSpeed: Math.floor(Math.random() * 40) + 30,
    status: 'running',
    capacity: 50,
    estimatedArrival: '08:20 AM',
    lastUpdated: new Date()
  },
  {
    id: 'b9',
    vehicleNumber: 'AP05TA5368',
    busNumber: '34',
    routeId: 'r34',
    driverId: 'd9',
    years: parseYears('I,II,III,IV'),
    currentLocation: getLocationWithOffset(locations.pedapudi, 0.4),
    currentSpeed: Math.floor(Math.random() * 30) + 20,
    status: 'running',
    capacity: 46,
    estimatedArrival: '08:40 AM',
    lastUpdated: new Date()
  },
  {
    id: 'b10',
    vehicleNumber: 'AP05TA5370',
    busNumber: '33',
    routeId: 'r33',
    driverId: 'd10',
    years: parseYears('II,III,IV'),
    currentLocation: getLocationWithOffset(locations.rayavaram, 0.5),
    currentSpeed: Math.floor(Math.random() * 25) + 15,
    status: 'delayed',
    capacity: 40,
    estimatedArrival: '09:10 AM',
    lastUpdated: new Date()
  }
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
      bus.vehicleNumber.toLowerCase().includes(searchTerm) ||
      bus.busNumber.toLowerCase().includes(searchTerm) ||
      (route && route.name.toLowerCase().includes(searchTerm)) ||
      (driver && driver.name.toLowerCase().includes(searchTerm)) ||
      bus.status.toLowerCase().includes(searchTerm) ||
      bus.years.some(year => year.toLowerCase().includes(searchTerm))
    );
  });
};
