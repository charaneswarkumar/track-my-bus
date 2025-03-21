
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { filterBuses } from '../utils/mockData';
import { Bus } from '../utils/types';

interface SearchBarProps {
  onSearchResults: (results: Bus[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      onSearchResults([]);
      return;
    }
    
    const results = filterBuses(query);
    onSearchResults(results);
  }, [query, onSearchResults]);

  const handleClearSearch = () => {
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
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
          onFocus={() => setIsFocused(true)}
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
  );
};

export default SearchBar;
