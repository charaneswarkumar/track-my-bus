
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { filterBuses } from '../utils/mockData';
import { Bus } from '../utils/types';
import { Command, CommandGroup, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SearchBarProps {
  onSearchResults: (results: Bus[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Bus[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      onSearchResults([]);
      return;
    }
    
    const searchResults = filterBuses(query);
    setResults(searchResults);
    onSearchResults(searchResults);
    
    // Open popover when there are results
    if (searchResults.length > 0) {
      setOpen(true);
    }
  }, [query, onSearchResults]);

  const handleClearSearch = () => {
    setQuery('');
    setOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelectBus = (bus: Bus) => {
    setQuery(bus.busNumber);
    onSearchResults([bus]);
    setOpen(false);
  };

  return (
    <Popover open={open && results.length > 0} onOpenChange={setOpen}>
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
  );
};

export default SearchBar;
