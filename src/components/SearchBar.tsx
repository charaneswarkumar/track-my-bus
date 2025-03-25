import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Clock, User, Phone, Route } from 'lucide-react';
import { filterBuses, getBusDetails, getRouteDetails } from '../utils/mockData';
import { Bus, BusRoute, Driver } from '../utils/types';
import { Command, CommandGroup, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from '@/components/ui/use-toast';

interface SearchBarProps {
  onSearchResults: (results: Bus[]) => void;
  onBusSelect?: (bus: Bus) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults, onBusSelect }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Bus[]>([]);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);
  
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      onSearchResults([]);
      return;
    }
    
    const searchResults = filterBuses(debouncedQuery);
    setResults(searchResults);
    onSearchResults(searchResults);
    
    if (searchResults.length > 0) {
      setOpen(true);
    }
  }, [debouncedQuery, onSearchResults]);

  const handleClearSearch = () => {
    setQuery('');
    setOpen(false);
    setSelectedBus(null);
    setShowDetails(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelectBus = (bus: Bus) => {
    setQuery(bus.busNumber);
    setSelectedBus(bus);
    setShowDetails(true);
    
    onSearchResults([bus]);
    if (onBusSelect) {
      onBusSelect(bus);
    }
    
    setOpen(false);
    
    toast({
      title: `Bus ${bus.busNumber} Selected`,
      description: `Status: ${bus.status}`,
      duration: 3000
    });
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedBus(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleViewFullDetails = (bus: Bus) => {
    if (onBusSelect) {
      onBusSelect(bus);
    }
    setShowDetails(false);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'delayed': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'stopped': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return '';
    }
  };

  const renderBusDetails = () => {
    if (!selectedBus) return null;
    
    const busDetails = getBusDetails(selectedBus.id);
    const route = busDetails?.route as BusRoute | undefined;
    const driver = busDetails?.driver as Driver | undefined;
    
    if (!busDetails || !route || !driver) {
      return <div className="p-4 text-sm text-neutral-500">Bus details not found</div>;
    }
    
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center p-3 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-2">
            <div className="rounded-md p-1.5 bg-blue-100 dark:bg-blue-900/20">
              <Route className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-md font-semibold text-neutral-900 dark:text-white">Bus {selectedBus.busNumber} Details</h3>
          </div>
          <button 
            onClick={handleCloseDetails}
            className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <X className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </button>
        </div>
        
        <div className="p-3">
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg font-bold text-neutral-900 dark:text-white">Route {selectedBus.busNumber}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(selectedBus.status)}`}>
                  {selectedBus.status.charAt(0).toUpperCase() + selectedBus.status.slice(1)}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {route.name}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">ETA</div>
              <div className="text-md font-bold text-blue-500">{selectedBus.estimatedArrival}</div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-900 dark:text-white">{driver.name}</h4>
                {driver.phoneNumber && (
                  <div className="flex items-center space-x-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <Phone className="h-3 w-3" />
                    <span>{driver.phoneNumber}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Route Stops</div>
          <div className="relative pl-5 border-l-2 border-blue-200 dark:border-blue-900 ml-1 mb-2">
            {route.stops.slice(0, 3).map((stop, index) => (
              <div key={stop.id} className="mb-2">
                <div className="absolute -left-[6px]">
                  <div className={`h-3 w-3 rounded-full border-2 border-blue-200 dark:border-blue-900 ${
                    index === 0 ? 'bg-blue-500 border-blue-500' : 
                    'bg-white dark:bg-neutral-800'
                  }`}></div>
                </div>
                
                <div className="mb-1">
                  <h5 className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                    {stop.name}
                  </h5>
                </div>
                
                {stop.timeToReach && (
                  <div className="flex items-center space-x-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="h-2 w-2" />
                    <span>{stop.timeToReach}</span>
                  </div>
                )}
              </div>
            ))}
            {route.stops.length > 3 && (
              <div className="text-xs text-blue-500 dark:text-blue-400 cursor-pointer hover:underline">
                +{route.stops.length - 3} more stops
              </div>
            )}
          </div>
          
          <button
            onClick={() => handleViewFullDetails(selectedBus)}
            className="w-full mt-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-800/30 text-blue-800 dark:text-blue-400 text-xs font-medium py-2 rounded-md transition-colors"
          >
            View Full Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Popover open={open && results.length > 0 && !showDetails} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div 
            className={`relative transition-all duration-200 ease-in-out ${
              isFocused ? 'ring-2 ring-blue-200 dark:ring-blue-900' : ''
            }`}
          >
            <div className="glass-morphism flex items-center rounded-full px-4 py-2 w-full transition-shadow duration-200">
              <Search className={`h-4 w-4 ${isFocused ? 'text-blue-500' : 'text-neutral-400'} transition-colors`} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by route number..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                  setIsFocused(true);
                  if (results.length > 0) setOpen(true);
                }}
                onBlur={() => setIsFocused(false)}
                className="w-full px-3 py-1 text-sm bg-transparent border-none focus:outline-none text-neutral-800 dark:text-white placeholder:text-neutral-400"
              />
              {query && (
                <button 
                  onClick={handleClearSearch}
                  className="flex items-center justify-center h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-600"
                >
                  <X className="h-3 w-3 text-neutral-500 dark:text-neutral-300" />
                </button>
              )}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="p-0 w-[300px] shadow-lg" 
          align="start" 
          sideOffset={5}
        >
          <Command>
            <CommandList>
              <CommandEmpty>No bus found</CommandEmpty>
              <CommandGroup heading="Bus Routes">
                {results.map((bus) => (
                  <CommandItem 
                    key={bus.id}
                    className="cursor-pointer flex items-center py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    onSelect={() => handleSelectBus(bus)}
                  >
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full mr-2 ${
                        bus.status === 'running' ? 'bg-green-500' : 
                        bus.status === 'delayed' ? 'bg-amber-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-sm font-medium">Bus {bus.busNumber}</span>
                    </div>
                    <div className="ml-auto flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                      <MapPin className="h-3 w-3 mr-1" /> 
                      {bus.estimatedArrival}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {showDetails && selectedBus && (
        <div className="mt-3">
          {renderBusDetails()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
