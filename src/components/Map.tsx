
import React, { useEffect, useState, useRef } from 'react';
import { Navigation } from 'lucide-react';
import { buses as mockBuses, busRoutes, busStops } from '../utils/mockData';
import { Bus } from '../utils/types';

interface MapProps {
  selectedBus: Bus | null;
  onBusSelect: (bus: Bus) => void;
  buses?: Bus[];
}

const Map: React.FC<MapProps> = ({ selectedBus, onBusSelect, buses = mockBuses }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });

  // Map bounds (latitude and longitude ranges)
  const mapBounds = {
    minLat: 16.9307, // South bound
    maxLat: 17.1307, // North bound
    minLng: 82.1504, // West bound
    maxLng: 82.3504, // East bound
  };

  // Center of the map (Pragati Engineering College)
  const mapCenter = {
    latitude: 17.0307,
    longitude: 82.2504
  };

  // Convert latitude/longitude to x/y coordinates on the map
  const geoToPixel = (lat: number, lng: number) => {
    const mapWidth = mapRef.current?.clientWidth || 800;
    const mapHeight = mapRef.current?.clientHeight || 600;
    
    const x = ((lng - mapBounds.minLng) / (mapBounds.maxLng - mapBounds.minLng)) * mapWidth;
    const y = ((mapBounds.maxLat - lat) / (mapBounds.maxLat - mapBounds.minLat)) * mapHeight;
    
    return { x, y };
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    positionRef.current = { ...position };
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    
    setPosition({
      x: positionRef.current.x + dx,
      y: positionRef.current.y + dy
    });
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle wheel events for zooming
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newZoom = Math.max(0.5, Math.min(3, zoom - e.deltaY * 0.001));
    setZoom(newZoom);
  };

  // Get status class for a bus
  const getBusStatusClass = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'delayed': return 'bg-amber-500';
      case 'stopped': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  // Show the route for the selected bus
  const showBusRoute = (bus: Bus) => {
    if (!selectedBus) return null;
    
    const route = busRoutes.find(r => r.id === bus.routeId);
    if (!route) return null;
    
    const points = route.stops.map(stop => {
      const { x, y } = geoToPixel(stop.location.latitude, stop.location.longitude);
      return { x, y };
    });
    
    if (points.length < 2) return null;
    
    // Create path data for the SVG
    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      pathData += ` L ${points[i].x} ${points[i].y}`;
    }
    
    return (
      <path
        d={pathData}
        fill="none"
        stroke="#0A84FF"
        strokeWidth="3"
        strokeDasharray="5,5"
        className="z-10"
      />
    );
  };

  // Handle the click on a bus marker
  const handleBusClick = (bus: Bus) => {
    onBusSelect(bus);
  };

  // Clean up event listeners
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return (
    <div className="map-container relative bg-blue-50 dark:bg-neutral-800 overflow-hidden">
      <div
        ref={mapRef}
        className="absolute inset-0 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className="absolute"
          style={{
            width: '100%',
            height: '100%',
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Background grid */}
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(100,100,100,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Bus stops */}
          {busStops.map(stop => {
            const { x, y } = geoToPixel(stop.location.latitude, stop.location.longitude);
            return (
              <div 
                key={stop.id}
                className="absolute"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="h-3 w-3 bg-neutral-400 dark:bg-neutral-300 rounded-full"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[10px] font-medium px-1.5 py-0.5 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xs rounded text-neutral-800 dark:text-neutral-200">
                    {stop.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Route path for selected bus */}
          <svg width="100%" height="100%" className="absolute inset-0 z-10">
            {selectedBus && showBusRoute(selectedBus)}
          </svg>

          {/* Bus markers */}
          {buses.map(bus => {
            const { x, y } = geoToPixel(bus.currentLocation.latitude, bus.currentLocation.longitude);
            const statusClass = getBusStatusClass(bus.status);
            const isSelected = selectedBus?.id === bus.id;
            
            return (
              <div 
                key={bus.id}
                className={`absolute bus-marker ${isSelected ? 'selected' : ''}`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) ${isSelected ? 'scale(1.3)' : 'scale(1)'}`,
                  zIndex: isSelected ? 20 : 10,
                  transition: 'transform 0.3s ease'
                }}
                onClick={() => handleBusClick(bus)}
              >
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${statusClass} shadow-lg`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M8 6v6"/>
                    <path d="M15 6v6"/>
                    <path d="M2 12h19.6"/>
                    <path d="M18 18h3"/>
                    <path d="M2 18h3"/>
                    <rect x="5" y="2" width="13" height="20" rx="2"/>
                  </svg>
                </div>
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-white/90 dark:bg-neutral-800/90 rounded shadow-sm text-neutral-800 dark:text-neutral-200">
                    {bus.busNumber}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button 
          className="w-8 h-8 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center"
          onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}
        >
          <span className="text-xl">+</span>
        </button>
        <button 
          className="w-8 h-8 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center"
          onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
        >
          <span className="text-xl">-</span>
        </button>
        <button 
          className="w-8 h-8 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center"
          onClick={() => {
            setPosition({ x: 0, y: 0 });
            setZoom(1);
          }}
        >
          <Navigation className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Map;
