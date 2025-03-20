
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { BusRoute } from '../utils/types';

interface RouteInfoProps {
  route: BusRoute;
}

const RouteInfo: React.FC<RouteInfoProps> = ({ route }) => {
  return (
    <div className="neo-card p-4 animate-fade-in">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        {route.name}
      </h3>
      
      {route.description && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          {route.description}
        </p>
      )}
      
      <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-900 ml-2">
        {route.stops.map((stop, index) => (
          <div key={stop.id} className="mb-4">
            <div className="absolute -left-[9px]">
              <div className={`h-4 w-4 rounded-full border-2 ${
                index === 0 
                  ? 'bg-blue-500 border-blue-500' 
                  : index === route.stops.length - 1
                    ? 'bg-green-500 border-green-500'
                    : 'bg-white dark:bg-neutral-800 border-blue-200 dark:border-blue-900'
              }`}></div>
            </div>
            
            <div className="mb-1">
              <h5 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
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
  );
};

export default RouteInfo;
