
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map';
import BusList from '../components/BusList';
import BusDetail from '../components/BusDetail';
import { buses } from '../utils/mockData';
import { Bus } from '../utils/types';
import { toast } from '@/components/ui/use-toast';
import { Bus as BusIcon, Calendar, Users } from 'lucide-react';

const Index = () => {
  const [allBuses, setAllBuses] = useState<Bus[]>(buses);
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>(buses.slice(0, 10)); // Initially show only first 10 buses
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showBusDetails, setShowBusDetails] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
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
      
      // Occasionally change a bus status for demonstration
      if (Math.random() > 0.95) {
        const randomIndex = Math.floor(Math.random() * allBuses.length);
        const statuses: Array<'running' | 'delayed' | 'stopped'> = ['running', 'delayed', 'stopped'];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        setAllBuses(prevBuses => {
          const newBuses = [...prevBuses];
          if (newBuses[randomIndex].status !== newStatus) {
            newBuses[randomIndex] = {
              ...newBuses[randomIndex],
              status: newStatus
            };
            
            // Show toast notification for status change
            toast({
              title: `Status Update: Bus ${newBuses[randomIndex].busNumber}`,
              description: `Bus is now ${newStatus}`,
              variant: newStatus === 'running' ? 'default' : 'destructive',
              duration: 3000
            });
          }
          return newBuses;
        });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [allBuses]);
  
  // Update filtered buses when search is not active
  useEffect(() => {
    if (!searchActive) {
      setFilteredBuses(allBuses.slice(0, 20)); // Show first 20 buses when not searching
    }
  }, [allBuses, searchActive]);
  
  const handleSearchResults = (results: Bus[]) => {
    if (results.length === 0 && !searchActive) {
      // If no search results and search is not active, show first 20 buses
      setFilteredBuses(allBuses.slice(0, 20));
    } else {
      setFilteredBuses(results);
      setSearchActive(results.length > 0);
    }
  };
  
  const handleBusSelect = (bus: Bus) => {
    setSelectedBus(bus);
    setShowBusDetails(true);
    
    // Add selected bus to filtered list if it's not already there
    if (!filteredBuses.some(b => b.id === bus.id)) {
      setFilteredBuses(prev => [bus, ...prev]);
    }
  };
  
  const handleCloseBusDetails = () => {
    setShowBusDetails(false);
  };
  
  // Calculate bus statistics
  const runningBuses = allBuses.filter(bus => bus.status === 'running').length;
  const delayedBuses = allBuses.filter(bus => bus.status === 'delayed').length;
  const stoppedBuses = allBuses.filter(bus => bus.status === 'stopped').length;
  
  // Calculate seats by capacity type (as shown in the data table)
  const seatsType50 = allBuses.filter(bus => bus.capacity === 50).length * 50;
  const seatsType46 = allBuses.filter(bus => bus.capacity === 46).length * 46;
  const seatsType40 = allBuses.filter(bus => bus.capacity === 40).length * 40;
  const totalSeats = seatsType50 + seatsType46 + seatsType40;
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      
      <main className="pt-20 px-6 pb-6 max-w-screen-2xl mx-auto animate-fade-in">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
          Pragati Engineering College Bus Tracker
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Buses Routes for the AY 2024-25
        </p>
        
        {/* Stats cards before the map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="neo-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Total Buses</h3>
                <p className="text-2xl font-semibold mt-1">{allBuses.length}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <BusIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="neo-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Total Capacity</h3>
                <p className="text-2xl font-semibold mt-1">{totalSeats}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
          
          <div className="neo-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Currently Running</h3>
                <p className="text-2xl font-semibold mt-1 text-green-600 dark:text-green-400">{runningBuses}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
          
          <div className="neo-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs text-neutral-500 dark:text-neutral-400">Delayed / Stopped</h3>
                <p className="text-2xl font-semibold mt-1 text-amber-600 dark:text-amber-400">{delayedBuses + stoppedBuses}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <SearchBar onSearchResults={handleSearchResults} />
            </div>
            
            <Map 
              selectedBus={selectedBus} 
              onBusSelect={handleBusSelect} 
              buses={allBuses}
            />
            
            <div className="mt-4 flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Running ({runningBuses})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-xs">Delayed ({delayedBuses})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Stopped ({stoppedBuses})</span>
                </div>
              </div>
              
              <div className="mt-2 md:mt-0 flex flex-wrap gap-3 text-xs text-neutral-500">
                <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  50 seats × {allBuses.filter(b => b.capacity === 50).length} buses = {seatsType50}
                </div>
                <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  46 seats × {allBuses.filter(b => b.capacity === 46).length} buses = {seatsType46}
                </div>
                <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  40 seats × {allBuses.filter(b => b.capacity === 40).length} buses = {seatsType40}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col h-[calc(100vh-12rem)]">
            <div className="neo-card mb-4 p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-neutral-900 dark:text-white">College Buses</h3>
                <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full">
                  {filteredBuses.length} / {allBuses.length} buses
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
