
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map';
import BusList from '../components/BusList';
import BusDetail from '../components/BusDetail';
import { buses } from '../utils/mockData';
import { Bus } from '../utils/types';

const Index = () => {
  const [allBuses, setAllBuses] = useState<Bus[]>(buses);
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>(buses);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showBusDetails, setShowBusDetails] = useState(false);
  
  // Update bus locations every few seconds (simulate real-time updates)
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real application, this would fetch real-time data from an API
      // For this mock, we'll just slightly modify the current locations to simulate movement
      setAllBuses(prevBuses => 
        prevBuses.map(bus => {
          if (bus.status === 'running') {
            // Small random movement
            const latDelta = (Math.random() - 0.5) * 0.005;
            const lngDelta = (Math.random() - 0.5) * 0.005;
            
            return {
              ...bus,
              currentLocation: {
                latitude: bus.currentLocation.latitude + latDelta,
                longitude: bus.currentLocation.longitude + lngDelta
              },
              lastUpdated: new Date()
            };
          }
          return bus;
        })
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Update filtered buses when all buses are updated
  useEffect(() => {
    setFilteredBuses(allBuses);
  }, [allBuses]);
  
  const handleSearchResults = (results: Bus[]) => {
    setFilteredBuses(results.length > 0 ? results : allBuses);
  };
  
  const handleBusSelect = (bus: Bus) => {
    setSelectedBus(bus);
    setShowBusDetails(true);
  };
  
  const handleCloseBusDetails = () => {
    setShowBusDetails(false);
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      
      <main className="pt-20 px-6 pb-6 max-w-screen-2xl mx-auto animate-fade-in">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
          College Bus Tracker
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Pragati Engineering College, Surampalem
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <SearchBar onSearchResults={handleSearchResults} />
            </div>
            
            <Map 
              selectedBus={selectedBus} 
              onBusSelect={handleBusSelect} 
            />
          </div>
          
          <div className="flex flex-col h-[calc(100vh-12rem)]">
            <div className="neo-card mb-4 p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Available Buses</h3>
                <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full">
                  {filteredBuses.length} buses
                </span>
              </div>
            </div>
            
            {showBusDetails && selectedBus ? (
              <BusDetail 
                bus={selectedBus}
                onClose={handleCloseBusDetails}
              />
            ) : (
              <div className="flex-1 overflow-hidden neo-card">
                <BusList 
                  buses={filteredBuses}
                  selectedBus={selectedBus}
                  onBusSelect={handleBusSelect}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
