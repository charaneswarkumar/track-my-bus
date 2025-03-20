import React, { useEffect, useRef, useState } from 'react';
import { BusIcon, Navigation } from 'lucide-react';
import { buses as mockBuses, busRoutes, busStops } from '../utils/mockData';
import { Bus } from '../utils/types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  selectedBus: Bus | null;
  onBusSelect: (bus: Bus) => void;
  buses?: Bus[];
}

const Map: React.FC<MapProps> = ({ selectedBus, onBusSelect, buses = mockBuses }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;
    
    try {
      mapboxgl.accessToken = token;
      
      // Initialize map centered on Pragati Engineering College
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [82.2504, 17.0307], // Pragati Engineering College coordinates
        zoom: 12,
        pitch: 30
      });

      map.current.on('load', () => {
        setIsLoading(false);
        
        // Add navigation controls
        map.current?.addControl(
          new mapboxgl.NavigationControl(),
          'bottom-right'
        );
        
        // Add bus markers
        addBusMarkers();
        
        // Add bus stops
        addBusStops();
        
        // Show route if a bus is selected
        if (selectedBus) {
          showBusRoute(selectedBus);
        }
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setIsLoading(false);
      setShowTokenInput(true);
    }
  };

  const addBusMarkers = () => {
    if (!map.current) return;
    
    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};
    
    buses.forEach(bus => {
      // Create bus marker element
      const el = document.createElement('div');
      el.className = 'bus-marker';
      
      // Add appropriate status class
      const statusClass = getBusStatusClass(bus.status);
      el.innerHTML = `
        <div class="h-6 w-6 rounded-full flex items-center justify-center ${statusClass} shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3"/><path d="M2 18h3"/><rect x="5" y="2" width="13" height="20" rx="2"/></svg>
        </div>
        <div class="absolute top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span class="text-[10px] font-semibold px-1.5 py-0.5 bg-white/90 dark:bg-neutral-800/90 rounded shadow-sm text-neutral-800 dark:text-neutral-200">
            ${bus.busNumber}
          </span>
        </div>
      `;
      
      // Add click event
      el.addEventListener('click', () => {
        onBusSelect(bus);
      });
      
      // Create and store marker
      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([bus.currentLocation.longitude, bus.currentLocation.latitude])
        .addTo(map.current!);
      
      markersRef.current[bus.id] = marker;
    });
  };

  const addBusStops = () => {
    if (!map.current) return;
    
    busStops.forEach(stop => {
      // Create bus stop element
      const el = document.createElement('div');
      el.className = 'bus-stop-marker';
      el.innerHTML = `
        <div class="h-3 w-3 bg-neutral-400 dark:bg-neutral-300 rounded-full"></div>
        <div class="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span class="text-[10px] font-medium px-1.5 py-0.5 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xs rounded text-neutral-800 dark:text-neutral-200">
            ${stop.name}
          </span>
        </div>
      `;
      
      // Create marker
      new mapboxgl.Marker({ element: el })
        .setLngLat([stop.location.longitude, stop.location.latitude])
        .addTo(map.current!);
    });
  };

  const showBusRoute = (bus: Bus) => {
    if (!map.current) return;
    
    // Find route for the selected bus
    const route = busRoutes.find(r => r.id === bus.routeId);
    if (!route) return;
    
    // Remove existing route layer if it exists
    if (map.current.getSource('route')) {
      map.current.removeLayer('route-line');
      map.current.removeSource('route');
    }
    
    // Create coordinates array for the route
    const coordinates = route.stops.map(stop => 
      [stop.location.longitude, stop.location.latitude]
    );
    
    // Add route to the map
    map.current.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinates
        }
      }
    });
    
    map.current.addLayer({
      id: 'route-line',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#0A84FF',
        'line-width': 3,
        'line-dasharray': [2, 2]
      }
    });
    
    // Fit the map to show the entire route
    map.current.fitBounds([
      [
        Math.min(...coordinates.map(coord => coord[0])) - 0.02,
        Math.min(...coordinates.map(coord => coord[1])) - 0.02
      ],
      [
        Math.max(...coordinates.map(coord => coord[0])) + 0.02,
        Math.max(...coordinates.map(coord => coord[1])) + 0.02
      ]
    ], { padding: 50 });
  };

  useEffect(() => {
    if (map.current) {
      addBusMarkers();
    }
  }, [buses]);

  useEffect(() => {
    if (map.current && selectedBus) {
      showBusRoute(selectedBus);
      
      // Highlight the selected bus marker
      Object.entries(markersRef.current).forEach(([busId, marker]) => {
        const el = marker.getElement();
        if (busId === selectedBus.id) {
          el.classList.add('selected');
        } else {
          el.classList.remove('selected');
        }
      });
    }
  }, [selectedBus]);

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      setShowTokenInput(false);
      localStorage.setItem('mapbox_token', mapboxToken);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    // Check for token in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
      initializeMap(savedToken);
    }
  }, []);

  const getBusStatusClass = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'delayed': return 'bg-amber-500';
      case 'stopped': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  if (showTokenInput) {
    return (
      <div className="map-container bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-lg font-semibold mb-4 text-center">Mapbox API Token Required</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 text-center">
            Please enter your Mapbox public token to display the map. You can get one for free at{' '}
            <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter Mapbox public token"
              className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

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
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default Map;
