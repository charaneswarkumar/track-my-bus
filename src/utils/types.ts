
export interface Location {
  latitude: number;
  longitude: number;
}

export interface BusStop {
  id: string;
  name: string;
  location: Location;
  timeToReach?: string; // Estimated time to reach this stop
}

export type BusStatus = 'running' | 'delayed' | 'stopped' | 'completed';

export interface BusRoute {
  id: string;
  name: string;
  stops: BusStop[];
  description?: string;
}

export interface Driver {
  id: string;
  name: string;
  phoneNumber: string;
  photo?: string;
}

export interface Bus {
  id: string;
  busNumber: string;
  routeId: string;
  driverId: string;
  currentLocation: Location;
  currentSpeed: number; // in km/h
  status: BusStatus;
  capacity: number;
  estimatedArrival: string; // Estimated time of arrival
  lastUpdated: Date;
}

export interface SearchFilters {
  busNumber?: string;
  routeName?: string;
  driverName?: string;
  status?: BusStatus;
}
