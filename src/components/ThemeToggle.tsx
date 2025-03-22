
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from './ui/switch';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle theme"
      />
      <Moon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
    </div>
  );
};

export default ThemeToggle;
