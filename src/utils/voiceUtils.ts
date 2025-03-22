import { Bus, BusRoute } from './types';
import { busRoutes } from './mockData';

type CommandResult = {
  response: string;
  bus?: Bus;
};

/**
 * Process voice commands related to bus tracking
 */
export const processVoiceCommand = (command: string, buses: Bus[]): CommandResult => {
  const normalizedCommand = command.toLowerCase().trim();
  
  // Check for bus location queries
  if (normalizedCommand.includes('where is') || normalizedCommand.includes('locate')) {
    return handleLocationQuery(normalizedCommand, buses);
  }
  
  // Check for arrival time queries
  if (normalizedCommand.includes('when will') || normalizedCommand.includes('arrive') || normalizedCommand.includes('eta')) {
    return handleArrivalQuery(normalizedCommand, buses);
  }
  
  // Check for nearest bus stop
  if (normalizedCommand.includes('nearest stop') || normalizedCommand.includes('closest stop') || normalizedCommand.includes('bus stop')) {
    return handleNearestStopQuery(normalizedCommand);
  }
  
  // Check for bus delay queries
  if (normalizedCommand.includes('delayed') || normalizedCommand.includes('delay')) {
    return handleDelayQuery(normalizedCommand, buses);
  }
  
  // Default response for unrecognized commands
  return {
    response: "I can help you track buses, find arrival times, locate stops, or check for delays. Try asking 'Where is bus 10?' or 'When will my bus arrive?'"
  };
};

/**
 * Handle bus location queries
 */
const handleLocationQuery = (command: string, buses: Bus[]): CommandResult => {
  // Extract bus number from command with improved pattern matching
  // Look for patterns like "bus 5", "bus number 5", "#5", or just "5" when in context
  const busNumberMatch = 
    command.match(/bus (\d+)/i) || 
    command.match(/bus number (\d+)/i) || 
    command.match(/#(\d+)/i);
  
  let busNumber = null;
  
  if (busNumberMatch && busNumberMatch[1]) {
    busNumber = busNumberMatch[1];
  } else {
    // If no specific pattern matches, look for standalone digits
    // This should only be used when we're confident it's a bus number context
    const digitsMatch = command.match(/\b(\d+)\b/g);
    if (digitsMatch) {
      // Take the first number found as the bus number
      busNumber = digitsMatch[0];
    }
  }
  
  if (busNumber) {
    // Exact match for single-digit bus numbers
    const exactBus = buses.find(b => b.busNumber === busNumber);
    if (exactBus) {
      // Get route information
      const route = busRoutes.find(r => r.id === exactBus.routeId);
      const routeName = route ? route.name : "unknown route";
      
      // Format response based on bus status
      let response = '';
      switch (exactBus.status) {
        case 'running':
          response = `Bus number ${exactBus.busNumber} is currently running on ${routeName} and will arrive at the college in approximately ${exactBus.estimatedArrival}.`;
          break;
        case 'delayed':
          response = `Bus number ${exactBus.busNumber} is currently delayed on ${routeName}. The new estimated arrival time is ${exactBus.estimatedArrival}.`;
          break;
        case 'stopped':
          response = `Bus number ${exactBus.busNumber} is currently stopped. Please check with the transportation office for more details.`;
          break;
        default:
          response = `Bus number ${exactBus.busNumber} is on ${routeName} and will arrive in ${exactBus.estimatedArrival}.`;
      }
      
      return { response, bus: exactBus };
    }
    
    // If not an exact match, try partial match but with caution for single digits
    const isSingleDigit = busNumber.length === 1;
    const matchingBuses = buses.filter(b => {
      if (isSingleDigit) {
        // For single digits, only match if it starts with that digit and not part of a double-digit number
        return b.busNumber === busNumber || (b.busNumber.startsWith(busNumber) && b.busNumber.length === 1);
      } else {
        // For multi-digit numbers, partial matching is fine
        return b.busNumber.includes(busNumber);
      }
    });
    
    if (matchingBuses.length === 1) {
      const bus = matchingBuses[0];
      const route = busRoutes.find(r => r.id === bus.routeId);
      const routeName = route ? route.name : "unknown route";
      
      let response = '';
      switch (bus.status) {
        case 'running':
          response = `Bus number ${bus.busNumber} is currently running on ${routeName} and will arrive at the college in approximately ${bus.estimatedArrival}.`;
          break;
        case 'delayed':
          response = `Bus number ${bus.busNumber} is currently delayed on ${routeName}. The new estimated arrival time is ${bus.estimatedArrival}.`;
          break;
        case 'stopped':
          response = `Bus number ${bus.busNumber} is currently stopped. Please check with the transportation office for more details.`;
          break;
        default:
          response = `Bus number ${bus.busNumber} is on ${routeName} and will arrive in ${bus.estimatedArrival}.`;
      }
      
      return { response, bus };
    } else if (matchingBuses.length > 1) {
      const busNumbers = matchingBuses.map(b => b.busNumber).join(', ');
      return { 
        response: `I found multiple buses matching number ${busNumber}. The available buses are: ${busNumbers}. Please specify which one you're looking for.` 
      };
    } else {
      return { response: `I couldn't find information for bus number ${busNumber}. Please check the bus number and try again.` };
    }
  }
  
  // If no specific bus number mentioned, provide info about running buses
  const runningBuses = buses.filter(b => b.status === 'running');
  if (runningBuses.length > 0) {
    const busCount = runningBuses.length;
    const busNumbers = runningBuses.slice(0, 3).map(b => b.busNumber).join(', ');
    const response = `There are currently ${busCount} buses running. Some of them include: ${busNumbers}. You can ask about a specific bus for more details.`;
    return { response };
  }
  
  return { response: "I couldn't understand which bus you're looking for. Try specifying a bus number like 'Where is bus 10?'" };
};

/**
 * Handle bus arrival time queries
 */
const handleArrivalQuery = (command: string, buses: Bus[]): CommandResult => {
  // Extract bus number with improved pattern matching
  const busNumberMatch = 
    command.match(/bus (\d+)/i) || 
    command.match(/bus number (\d+)/i) || 
    command.match(/#(\d+)/i);
  
  let busNumber = null;
  
  if (busNumberMatch && busNumberMatch[1]) {
    busNumber = busNumberMatch[1];
  } else {
    // If no specific pattern matches, look for standalone digits
    const digitsMatch = command.match(/\b(\d+)\b/g);
    if (digitsMatch) {
      // Take the first number found as the bus number
      busNumber = digitsMatch[0];
    }
  }
  
  if (busNumber) {
    // Exact match for single-digit bus numbers
    const exactBus = buses.find(b => b.busNumber === busNumber);
    if (exactBus) {
      let response = '';
      switch (exactBus.status) {
        case 'running':
          response = `Bus number ${exactBus.busNumber} will arrive in approximately ${exactBus.estimatedArrival}.`;
          break;
        case 'delayed':
          response = `Bus number ${exactBus.busNumber} is delayed and will arrive in approximately ${exactBus.estimatedArrival}.`;
          break;
        case 'stopped':
          response = `Bus number ${exactBus.busNumber} is currently stopped and not in service. Please check with the transportation office for alternative options.`;
          break;
        default:
          response = `Bus number ${exactBus.busNumber} will arrive in ${exactBus.estimatedArrival}.`;
      }
      
      return { response, bus: exactBus };
    }
    
    // If not an exact match, try partial match but with caution for single digits
    const isSingleDigit = busNumber.length === 1;
    const matchingBuses = buses.filter(b => {
      if (isSingleDigit) {
        // For single digits, only match if it starts with that digit and not part of a double-digit number
        return b.busNumber === busNumber || (b.busNumber.startsWith(busNumber) && b.busNumber.length === 1);
      } else {
        // For multi-digit numbers, partial matching is fine
        return b.busNumber.includes(busNumber);
      }
    });
    
    if (matchingBuses.length === 1) {
      const bus = matchingBuses[0];
      let response = '';
      switch (bus.status) {
        case 'running':
          response = `Bus number ${bus.busNumber} will arrive in approximately ${bus.estimatedArrival}.`;
          break;
        case 'delayed':
          response = `Bus number ${bus.busNumber} is delayed and will arrive in approximately ${bus.estimatedArrival}.`;
          break;
        case 'stopped':
          response = `Bus number ${bus.busNumber} is currently stopped and not in service. Please check with the transportation office for alternative options.`;
          break;
        default:
          response = `Bus number ${bus.busNumber} will arrive in ${bus.estimatedArrival}.`;
      }
      
      return { response, bus };
    } else if (matchingBuses.length > 1) {
      const busNumbers = matchingBuses.map(b => b.busNumber).join(', ');
      return { 
        response: `I found multiple buses matching number ${busNumber}. The available buses are: ${busNumbers}. Please specify which one you're looking for.` 
      };
    } else {
      return { response: `I couldn't find arrival information for bus number ${busNumber}.` };
    }
  }
  
  // If no specific bus mentioned, check for "my bus" phrase
  if (command.includes('my bus')) {
    // Get the next arriving bus
    const sortedBuses = [...buses]
      .filter(b => b.status !== 'stopped')
      .sort((a, b) => {
        const timeA = parseInt(a.estimatedArrival.split(' ')[0]);
        const timeB = parseInt(b.estimatedArrival.split(' ')[0]);
        return timeA - timeB;
      });
    
    if (sortedBuses.length > 0) {
      const nextBus = sortedBuses[0];
      const response = `The next bus (number ${nextBus.busNumber}) will arrive in ${nextBus.estimatedArrival}.`;
      return { response, bus: nextBus };
    }
  }
  
  return { response: "I couldn't determine which bus you're asking about. Try specifying a bus number like 'When will bus 10 arrive?'" };
};

/**
 * Handle queries about the nearest bus stop
 */
const handleNearestStopQuery = (command: string): CommandResult => {
  // Simulated response since we don't have user's location in this implementation
  const response = "The nearest bus stop to the college is at Surampalem Junction, approximately 2 kilometers away. The next stop after that is Kakinada Bus Stand which is about 15 kilometers from the college.";
  return { response };
};

/**
 * Handle queries about delayed buses
 */
const handleDelayQuery = (command: string, buses: Bus[]): CommandResult => {
  const delayedBuses = buses.filter(b => b.status === 'delayed');
  
  if (delayedBuses.length === 0) {
    return { response: "Good news! There are currently no delayed buses." };
  }
  
  if (delayedBuses.length === 1) {
    const bus = delayedBuses[0];
    return { 
      response: `Bus number ${bus.busNumber} is currently delayed and will arrive in ${bus.estimatedArrival}.`,
      bus 
    };
  }
  
  const delayedCount = delayedBuses.length;
  const delayedNumbers = delayedBuses.slice(0, 3).map(b => b.busNumber).join(', ');
  return { 
    response: `There are ${delayedCount} delayed buses currently. These include: ${delayedNumbers}. You can ask about a specific bus for more details.` 
  };
};
