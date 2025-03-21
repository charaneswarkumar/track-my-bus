I'll provide the full code for the `filterBuses` function in `src/utils/mockData.ts`:

import { Bus, BusRoute, BusStop, Driver, YearGroup } from './types';

// ... (all previous existing code remains the same)

// Filter buses by route number
export const filterBuses = (query: string): Bus[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  return allBuses.filter(bus => {
    // Exactly match the bus number or check if it contains the query
    return bus.busNumber === lowercaseQuery || bus.busNumber.toLowerCase().includes(lowercaseQuery);
  });
};
