
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeColor = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeContextType {
  theme: Theme;
  themeColor: ThemeColor;
  setTheme: (theme: Theme) => void;
  setThemeColor: (color: ThemeColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  // Initialize theme color from localStorage or default to 'blue'
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    const savedThemeColor = localStorage.getItem('themeColor');
    return (savedThemeColor as ThemeColor) || 'blue';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Update localStorage and apply theme to document whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Update localStorage when theme color changes
  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    document.documentElement.dataset.themeColor = themeColor;
  }, [themeColor]);

  // Initialize theme on mount
  useEffect(() => {
    document.documentElement.classList.add(theme);
    document.documentElement.dataset.themeColor = themeColor;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeColor, setTheme, setThemeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
