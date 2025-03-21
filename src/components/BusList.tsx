
import React, { useState } from 'react';
import { ChevronRight, Clock, MapPin, AlertCircle, Bus as BusIcon, Users, Calendar } from 'lucide-react';
import { Bus, BusRoute, YearGroup } from '../utils/types';
import { busRoutes } from '../utils/mockData';

interface BusListProps {
  buses: Bus[];
  selectedBus: Bus | null;
  onBusSelect: (bus: Bus) => void;
}

const BusList: React.FC<BusListProps> = ({ buses, selectedBus, onBusSelect }) => {
  const [filterYear, setFilterYear] = useState<YearGroup | 'ALL'>('ALL');
  
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

  // Filter buses by year
  const filteredBuses = filterYear === 'ALL' 
    ? buses 
    : buses.filter(bus => bus.years.includes(filterYear));

  if (filteredBuses.length === 0) {
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
    <div className="flex flex-col h-full">
      {/* Year filter tabs */}
      <div className="flex p-2 gap-1 overflow-x-auto sticky top-0 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 z-10">
        {['ALL', 'I', 'II', 'III', 'IV', 'STAFF'].map((year) => (
          <button
            key={year}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              filterYear === year 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            onClick={() => setFilterYear(year as YearGroup | 'ALL')}
          >
            {year === 'ALL' ? 'All Years' : `Year ${year}`}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto py-2 px-2">
        <div className="space-y-2 animate-fade-in">
          {filteredBuses.map((bus) => (
            <div 
              key={bus.id}
              className={`neo-card p-3 cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedBus?.id === bus.id ? 'ring-2 ring-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : ''
              }`}
              onClick={() => onBusSelect(bus)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <div className="rounded-md p-1.5 bg-blue-50 dark:bg-blue-900/20">
                    <BusIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white">{bus.busNumber}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${getStatusClass(bus.status)}`}>
                        {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">{bus.vehicleNumber}</span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-neutral-400" />
              </div>
              
              <div className="mb-2 text-xs text-neutral-800 dark:text-neutral-300">
                <div className="flex items-center space-x-1 mb-1">
                  <MapPin className="h-3 w-3 text-neutral-500" />
                  <span className="truncate">{getRouteName(bus.routeId)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3 text-neutral-500" />
                  <span>Capacity: {bus.capacity} seats</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>Years: {bus.years.join(', ')}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>ETA: {bus.estimatedArrival}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusList;
