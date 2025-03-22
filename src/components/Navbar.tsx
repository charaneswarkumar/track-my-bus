
import React from 'react';
import { Bus, Clock, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <header className="glass-morphism fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-lg border-b border-neutral-200/30 dark:border-neutral-800/30">
      <div className="flex items-center space-x-2">
        <Bus className="h-6 w-6 text-blue-500" />
        <h1 className="text-lg font-medium text-neutral-900 dark:text-white tracking-tight">
          <span className="text-blue-500">PEC</span> Bus Tracker
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-300">
          <Clock className="h-4 w-4" />
          <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
        
        <ThemeToggle />
        
        <Link to="/settings" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <SettingsIcon className="h-5 w-5" />
        </Link>
        
        <div className="bg-neutral-100 dark:bg-neutral-800 h-8 w-8 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">PEC</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
