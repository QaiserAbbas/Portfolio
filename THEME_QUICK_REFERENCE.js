/**
 * THEME SYSTEM - QUICK REFERENCE
 * ================================
 * 
 * This file provides a quick reference for using the theme system
 * in your React portfolio.
 */

// ============================================================
// 1. USING THE THEME HOOK
// ============================================================

import useTheme from '../hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  // theme: 'light' | 'dark'
  // toggleTheme: () => void
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

// ============================================================
// 2. USING THEME UTILITIES
// ============================================================

import { 
  getCurrentTheme,
  isDarkMode,
  getThemeColor,
  getCSSVariable 
} from '../utils/themeUtils';

// Check current theme
const theme = getCurrentTheme(); // 'light' or 'dark'

// Check if dark mode
const isDark = isDarkMode(); // boolean

// Get conditional color
const bgColor = getThemeColor('#fff', '#000'); // light, dark

// Get CSS variable value
const primaryColor = getCSSVariable('--clr-primary-5');

// ============================================================
// 3. STYLING WITH CSS VARIABLES (RECOMMENDED)
// ============================================================

// Inline styles
const cardStyle = {
  background: 'var(--clr-white)',
  color: 'var(--clr-grey-1)',
  border: '1px solid var(--clr-grey-8)',
  boxShadow: 'var(--light-shadow)',
  borderRadius: 'var(--radius)',
  padding: '1rem'
};

// ============================================================
// 4. AVAILABLE CSS VARIABLES
// ============================================================

/*
  BACKGROUNDS:
  var(--clr-white)        - Main surface color
  var(--clr-grey-10)      - Secondary background
  var(--clr-footer-bg)    - Footer background
  var(--clr-code-bg)      - Code block background

  TEXT:
  var(--clr-grey-1)       - Headings (dark in light, light in dark)
  var(--clr-grey-3)       - Body text
  var(--clr-grey-5)       - Muted text

  PRIMARY COLORS:
  var(--clr-primary-1)    - Darkest primary
  var(--clr-primary-5)    - Main primary (buttons, links)
  var(--clr-primary-9)    - Lightest primary

  EFFECTS:
  var(--light-shadow)     - Subtle shadow
  var(--dark-shadow)      - Strong shadow
  var(--radius)           - Border radius (0.5rem)
  var(--transition)       - Standard transition
*/

// ============================================================
// 5. CSS EXAMPLE
// ============================================================

/*
.my-component {
  background: var(--clr-white);
  color: var(--clr-grey-1);
  border: 1px solid var(--clr-grey-8);
  box-shadow: var(--light-shadow);
  border-radius: var(--radius);
  transition: var(--transition);
}

.my-component:hover {
  box-shadow: var(--dark-shadow);
  transform: translateY(-2px);
}

.my-button {
  background: var(--clr-primary-5);
  color: var(--clr-white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

.my-button:hover {
  background: var(--clr-primary-7);
}
*/

// ============================================================
// 6. CONDITIONAL RENDERING
// ============================================================

function ThemeAwareComponent() {
  const { theme } = useTheme();
  
  return (
    <div>
      {theme === 'dark' ? (
        <span>🌙 Dark Mode Active</span>
      ) : (
        <span>☀️ Light Mode Active</span>
      )}
    </div>
  );
}

// ============================================================
// 7. CUSTOM THEME TOGGLE BUTTON
// ============================================================

import { FaSun, FaMoon } from 'react-icons/fa';

function CustomThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

// ============================================================
// 8. DO's AND DON'Ts
// ============================================================

// ✅ DO: Use CSS variables
const goodStyle = {
  background: 'var(--clr-white)',
  color: 'var(--clr-grey-1)'
};

// ❌ DON'T: Use hardcoded colors
const badStyle = {
  background: '#fff',
  color: '#000'
};

// ✅ DO: Let CSS handle theme changes
// Your components don't need to know about themes!

// ❌ DON'T: Add complex theme logic to every component
// Use the CSS variables instead

// ============================================================
// 9. TESTING
// ============================================================

/*
  1. Click theme toggle in navbar
  2. Visit all pages (/, /projects, /blogs, /contact, /about)
  3. Reload page - theme should persist
  4. Visit /theme-demo for comprehensive examples
  5. Check DevTools → Application → Local Storage → theme
*/

// ============================================================
// 10. USEFUL FILES
// ============================================================

/*
  Hook:       /src/hooks/useTheme.js
  Component:  /src/components/ThemeToggle.js
  Utils:      /src/utils/themeUtils.js
  Demo:       /src/pages/theme-demo.js
  CSS:        /src/css/main.css
  Guide:      /THEME_TOGGLE_GUIDE.md
  Summary:    /IMPLEMENTATION_SUMMARY.md
*/

export default null; // This is a reference file only
