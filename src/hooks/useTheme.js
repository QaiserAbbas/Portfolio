import { useState, useEffect } from 'react';

/**
 * Custom hook for managing light/dark theme
 * Features:
 * - Detects system preference on first load
 * - Persists theme in localStorage
 * - Automatically applies theme to document
 * - Returns current theme and toggle function
 */
const useTheme = () => {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Set data attribute for CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
