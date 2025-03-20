
import React, { useEffect, useRef, useState } from 'react';
import { Bus as BusIcon, Navigation } from 'lucide-react';
import { buses, busRoutes, busStops } from '../utils/mockData';
import { Bus } from '../utils/types';

interface MapProps {
  selectedBus: Bus | null;
  onBusSelect: (bus: Bus) => void;
}

const Map: React.FC<MapProps> = ({ selectedBus, onBusSelect }) => {
  const [isLoading, setIsLoading] = useState(true);

  // In a real application, this would initialize a map using Google Maps or similar
  // For this mock, we'll just simulate a map loading
  
  useEffect(() => {
    // Simulate map loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'delayed': return 'bg-amber-500';
      case 'stopped': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  if (isLoading) {
    return (
      <div className="map-container bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-neutral-200 border-t-blue-500 animate-spin"></div>
          <p className="text-neutral-500 dark:text-neutral-400">Loading map...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="map-container relative bg-blue-50 dark:bg-neutral-900 overflow-hidden">
      {/* Mock map interface */}
      <div className="absolute inset-0 animate-fade-in">
        {/* Map background (simulated) */}
        <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/82.2504,17.0307,11/1200x800?access_token=pk.placeholder')] bg-no-repeat bg-cover opacity-90"></div>
        
        {/* Overlay elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bus stops */}
          {busStops.map((stop) => (
            <div 
              key={stop.id}
              className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 animate-scale"
              style={{ 
                left: `${(stop.location.longitude - 81.75) * 500 + 20}%`, 
                top: `${(17.15 - stop.location.latitude) * 500 + 20}%` 
              }}
            >
              <div className="h-3 w-3 bg-neutral-400 dark:bg-neutral-300 rounded-full"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] font-medium px-1.5 py-0.5 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xs rounded text-neutral-800 dark:text-neutral-200">
                  {stop.name}
                </span>
              </div>
            </div>
          ))}
          
          {/* Buses */}
          {buses.map((bus) => (
            <div 
              key={bus.id}
              className={`absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${selectedBus?.id === bus.id ? 'scale-125' : ''} transition-transform duration-200`}
              style={{ 
                left: `${(bus.currentLocation.longitude - 81.75) * 500 + 20}%`, 
                top: `${(17.15 - bus.currentLocation.latitude) * 500 + 20}%` 
              }}
              onClick={() => onBusSelect(bus)}
            >
              <div className={`h-6 w-6 rounded-full flex items-center justify-center ${getStatusColor(bus.status)} shadow-lg`}>
                <BusIcon className="h-3 w-3 text-white" />
              </div>
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-white/90 dark:bg-neutral-800/90 rounded shadow-sm text-neutral-800 dark:text-neutral-200">
                  {bus.busNumber}
                </span>
              </div>
            </div>
          ))}
          
          {/* Route lines (simplified) */}
          {busRoutes.map((route) => {
            // Only display the selected bus's route
            if (selectedBus && route.id === selectedBus.routeId) {
              return (
                <svg 
                  key={route.id} 
                  className="absolute inset-0 z-0 w-full h-full pointer-events-none animate-fade-in"
                >
                  {route.stops.map((stop, index, stops) => {
                    if (index < stops.length - 1) {
                      const nextStop = stops[index + 1];
                      return (
                        <line 
                          key={`${stop.id}-${nextStop.id}`}
                          x1={`${(stop.location.longitude - 81.75) * 500 + 20}%`}
                          y1={`${(17.15 - stop.location.latitude) * 500 + 20}%`}
                          x2={`${(nextStop.location.longitude - 81.75) * 500 + 20}%`}
                          y2={`${(17.15 - nextStop.location.latitude) * 500 + 20}%`}
                          stroke="#0A84FF"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          strokeLinecap="round"
                        />
                      );
                    }
                    return null;
                  })}
                </svg>
              );
            }
            return null;
          })}
        </div>
      </div>
      
      {/* Controls overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="glass-morphism h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/90 dark:hover:bg-neutral-800/90 transition-colors">
          <Navigation className="h-4 w-4 text-blue-500" />
        </button>
        <button className="glass-morphism h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/90 dark:hover:bg-neutral-800/90 transition-colors">
          <span className="text-blue-500 font-bold text-lg">+</span>
        </button>
        <button className="glass-morphism h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/90 dark:hover:bg-neutral-800/90 transition-colors">
          <span className="text-blue-500 font-bold text-lg">−</span>
        </button>
      </div>
    </div>
  );
};

export default Map;
