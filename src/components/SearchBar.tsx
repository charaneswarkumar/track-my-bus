
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Bus, BusRoute } from '../utils/types';
import { allBuses, busRoutes } from '../utils/mockData';
import debounce from 'lodash/debounce';

interface SearchBarProps {
  onSearchResults: (results: Bus[]) => void;
  onBusSelect: (bus: Bus) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults, onBusSelect }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Bus[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Create a debounced search function
  const debouncedSearch = useRef(
    debounce((searchQuery: string) => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        onSearchResults([]);
        return;
      }

      const results = allBuses.filter(bus => {
        const busNumberLower = bus.busNumber.toLowerCase();
        const queryLower = searchQuery.toLowerCase();
        
        // Fix for single-digit bus numbers - exact match for bus numbers
        if (busNumberLower === queryLower) {
          return true;
        }
        
        // Contains match for bus numbers
        if (busNumberLower.includes(queryLower)) {
          return true;
        }
        
        // Search in routes
        const route = busRoutes.find(r => r.id === bus.routeId);
        if (route && route.name.toLowerCase().includes(queryLower)) {
          return true;
        }
        
        // Search in vehicle numbers
        if (bus.vehicleNumber.toLowerCase().includes(queryLower)) {
          return true;
        }
        
        // Search in driver names
        if (bus.driverName.toLowerCase().includes(queryLower)) {
          return true;
        }
        
        return false;
      });

      setSearchResults(results);
      onSearchResults(results);
    }, 300)
  ).current;

  useEffect(() => {
    debouncedSearch(query);
    
    // Only show dropdown if there's a query
    if (query.trim()) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
    
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Helper function to get route name
  const getRouteName = (routeId: string) => {
    const route = busRoutes.find(r => r.id === routeId);
    return route ? route.name : 'Unknown Route';
  };

  const handleClear = () => {
    setQuery('');
    setSearchResults([]);
    onSearchResults([]);
  };

  const handleBusSelect = (bus: Bus) => {
    onBusSelect(bus);
    setShowResults(false);
    setQuery(bus.busNumber); // Set the query to the selected bus number
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-neutral-500" />
        </div>
        <input
          type="text"
          className="neo-card py-3 pl-10 pr-10 w-full text-sm text-neutral-900 dark:text-white bg-transparent outline-none placeholder:text-neutral-500"
          placeholder="Search for bus number, route, or driver..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowResults(true)}
        />
        {query && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={handleClear}
          >
            <X className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" />
          </button>
        )}
      </div>
      
      {/* Search results dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full neo-card divide-y divide-neutral-100 dark:divide-neutral-700 overflow-hidden">
          <div className="py-1 max-h-60 overflow-y-auto">
            {searchResults.map((bus) => (
              <div
                key={bus.id}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                onClick={() => handleBusSelect(bus)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{bus.busNumber}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    bus.status === 'running' ? 'bus-status-running' : 
                    bus.status === 'delayed' ? 'bus-status-delayed' : 'bus-status-stopped'
                  }`}>
                    {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                  </span>
                </div>
                <div className="text-xs text-neutral-500">{getRouteName(bus.routeId)}</div>
                <div className="text-xs text-neutral-400">{bus.vehicleNumber} • Driver: {bus.driverName}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* No results message */}
      {showResults && query && searchResults.length === 0 && (
        <div className="absolute z-10 mt-1 w-full neo-card p-4 text-center">
          <p className="text-neutral-500 dark:text-neutral-400">No buses found matching "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
