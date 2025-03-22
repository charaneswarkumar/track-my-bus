
import React from 'react';
import { ArrowLeft, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Settings = () => {
  const { theme, themeColor, toggleTheme, setThemeColor } = useTheme();

  const themeColors = [
    { id: 'blue', name: 'Blue', bg: 'bg-blue-500' },
    { id: 'purple', name: 'Purple', bg: 'bg-purple-500' },
    { id: 'green', name: 'Green', bg: 'bg-green-500' },
    { id: 'orange', name: 'Orange', bg: 'bg-orange-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <ArrowLeft className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        </Link>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Settings</h1>
      </div>

      <Card className="neo-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Moon className="mr-2 h-5 w-5" />
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Toggle between light and dark themes
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <Moon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="neo-card">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Palette className="mr-2 h-5 w-5" />
            Theme Color
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Select a primary color theme for the application
          </p>
          <div className="grid grid-cols-4 gap-3">
            {themeColors.map((color) => (
              <button
                key={color.id}
                onClick={() => setThemeColor(color.id as any)}
                className={`h-12 rounded-md flex items-center justify-center ${color.bg} ${
                  themeColor === color.id
                    ? 'ring-2 ring-offset-2 ring-offset-background ring-neutral-900 dark:ring-white'
                    : ''
                }`}
                aria-label={`Set theme color to ${color.name}`}
              >
                <span className="text-white font-medium text-sm">{color.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
