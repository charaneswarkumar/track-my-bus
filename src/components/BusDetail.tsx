
import React from 'react';
import { Bus as BusType, BusRoute, Driver } from '../utils/types';
import { getBusDetails, getRouteDetails } from '../utils/mockData';
import { User, MapPin, Phone, Clock, BarChart2, X } from 'lucide-react';

interface BusDetailProps {
  bus: BusType;
  onClose: () => void;
}

const BusDetail: React.FC<BusDetailProps> = ({ bus, onClose }) => {
  const busDetails = getBusDetails(bus.id);
  const route = busDetails?.route as BusRoute | undefined;
  const driver = busDetails?.driver as Driver | undefined;
  
  if (!busDetails || !route || !driver) {
    return <div>Bus details not found</div>;
  }
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'delayed': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'stopped': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return '';
    }
  };
  
  return (
    <div className="glass-morphism rounded-xl overflow-hidden animate-slide-up">
      <div className="flex justify-between items-center p-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Bus Details</h3>
        <button 
          onClick={onClose}
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          <X className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-2xl font-bold text-neutral-900 dark:text-white">{bus.busNumber}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(bus.status)}`}>
                {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{route.name}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-neutral-900 dark:text-white">ETA</div>
            <div className="text-xl font-bold text-blue-500">{bus.estimatedArrival}</div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white">{driver.name}</h4>
              <div className="flex items-center space-x-1 text-xs text-neutral-500 dark:text-neutral-400">
                <Phone className="h-3 w-3" />
                <span>{driver.phoneNumber}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="neo-card p-3">
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Speed</div>
              <div className="text-lg font-medium text-neutral-900 dark:text-white">
                {bus.currentSpeed} <span className="text-xs">km/h</span>
              </div>
            </div>
            
            <div className="neo-card p-3">
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Capacity</div>
              <div className="text-lg font-medium text-neutral-900 dark:text-white">
                {bus.capacity} <span className="text-xs">seats</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-2">
          <h4 className="flex items-center text-sm font-medium text-neutral-900 dark:text-white mb-3">
            <MapPin className="h-4 w-4 mr-1 text-blue-500" />
            Route Information
          </h4>
          
          <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-900 ml-2">
            {route.stops.map((stop, index) => (
              <div key={stop.id} className={`mb-4 ${index === 0 ? 'animate-pulse-blue' : ''}`}>
                <div className="absolute -left-[9px]">
                  <div className={`h-4 w-4 rounded-full border-2 border-blue-200 dark:border-blue-900 ${
                    index === 0 ? 'bg-blue-500 border-blue-500' : 'bg-white dark:bg-neutral-800'
                  }`}></div>
                </div>
                
                <div className="mb-1">
                  <h5 className={`text-sm font-medium ${
                    index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-800 dark:text-neutral-200'
                  }`}>
                    {stop.name}
                  </h5>
                </div>
                
                {stop.timeToReach && (
                  <div className="flex items-center space-x-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="h-3 w-3" />
                    <span>{stop.timeToReach}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
