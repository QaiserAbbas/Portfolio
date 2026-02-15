/**
 * Theme Utilities
 * Helper functions and constants for working with themes across the application
 */

/**
 * Get current theme from localStorage or system preference
 * @returns {string} 'light' or 'dark'
 */
export const getCurrentTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

/**
 * Check if current theme is dark
 * @returns {boolean}
 */
export const isDarkMode = () => {
  return getCurrentTheme() === 'dark';
};

/**
 * Get theme-aware color
 * @param {string} lightColor - Color for light mode
 * @param {string} darkColor - Color for dark mode
 * @returns {string} Appropriate color for current theme
 */
export const getThemeColor = (lightColor, darkColor) => {
  return isDarkMode() ? darkColor : lightColor;
};

/**
 * Theme-aware style object creator
 * @param {object} lightStyles - Styles for light mode
 * @param {object} darkStyles - Styles for dark mode
 * @returns {object} Merged styles appropriate for current theme
 */
export const getThemeStyles = (lightStyles, darkStyles) => {
  return isDarkMode() ? { ...lightStyles, ...darkStyles } : lightStyles;
};

/**
 * CSS custom property values for common theme colors
 * Use these with CSS var() function
 */
export const THEME_COLORS = {
  // Primary colors
  PRIMARY_1: '--clr-primary-1',
  PRIMARY_5: '--clr-primary-5',
  PRIMARY_9: '--clr-primary-9',
  
  // Grey scale
  GREY_1: '--clr-grey-1',
  GREY_3: '--clr-grey-3',
  GREY_5: '--clr-grey-5',
  GREY_10: '--clr-grey-10',
  
  // Backgrounds
  WHITE: '--clr-white',
  BLACK: '--clr-black',
  
  // Special
  FOOTER_BG: '--clr-footer-bg',
  CODE_BG: '--clr-code-bg',
};

/**
 * Get CSS variable value from document
 * @param {string} variableName - CSS variable name (with or without --)
 * @returns {string} The value of the CSS variable
 */
export const getCSSVariable = (variableName) => {
  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

/**
 * Apply theme class to HTML element
 * @param {string} theme - 'light' or 'dark'
 */
export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const themeUtils = {
  getCurrentTheme,
  isDarkMode,
  getThemeColor,
  getThemeStyles,
  THEME_COLORS,
  getCSSVariable,
  applyTheme,
};

export default themeUtils;
