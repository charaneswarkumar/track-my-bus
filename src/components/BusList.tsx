
import React from 'react';
import { ChevronRight, Clock, MapPin, AlertCircle } from 'lucide-react';
import { Bus, BusRoute } from '../utils/types';
import { busRoutes } from '../utils/mockData';

interface BusListProps {
  buses: Bus[];
  selectedBus: Bus | null;
  onBusSelect: (bus: Bus) => void;
}

const BusList: React.FC<BusListProps> = ({ buses, selectedBus, onBusSelect }) => {
  // Helper function to get route name
  const getRouteName = (routeId: string) => {
    const route = busRoutes.find(r => r.id === routeId);
    return route ? route.name : 'Unknown Route';
  };

  // Helper function to get status class
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'running': return 'bus-status-running';
      case 'delayed': return 'bus-status-delayed';
      case 'stopped': return 'bus-status-stopped';
      default: return '';
    }
  };

  if (buses.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 animate-fade-in">
        <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
          <AlertCircle className="h-6 w-6 text-neutral-400" />
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-center">No buses found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto py-2">
      <div className="space-y-2 animate-fade-in">
        {buses.map((bus) => (
          <div 
            key={bus.id}
            className={`neo-card p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedBus?.id === bus.id ? 'ring-2 ring-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : ''
            }`}
            onClick={() => onBusSelect(bus)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-blue-500">{bus.busNumber}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(bus.status)}`}>
                  {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-neutral-400" />
            </div>
            
            <div className="mb-3 text-sm text-neutral-800 dark:text-neutral-300">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                <span className="truncate">{getRouteName(bus.routeId)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>ETA: {bus.estimatedArrival}</span>
              </div>
              
              <div>
                {bus.currentSpeed > 0 ? (
                  <span>{bus.currentSpeed} km/h</span>
                ) : (
                  <span>Stationary</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;
