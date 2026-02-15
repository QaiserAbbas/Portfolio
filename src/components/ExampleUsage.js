import React from 'react';
import useTheme from '../hooks/useTheme';

/**
 * Example Component demonstrating how to use the useTheme hook
 * This shows various ways to integrate theme awareness into your components
 */
const ExampleUsage = () => {
  const { theme, toggleTheme } = useTheme();

  // Example 1: Simple theme display and toggle
  const renderBasicExample = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Example 1: Basic Usage</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );

  // Example 2: Conditional rendering based on theme
  const renderConditionalExample = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Example 2: Conditional Rendering</h2>
      {theme === 'dark' ? (
        <p>🌙 Dark mode is active - perfect for night browsing!</p>
      ) : (
        <p>☀️ Light mode is active - bright and clear!</p>
      )}
    </div>
  );

  // Example 3: Theme-aware styling
  const renderStyledExample = () => {
    const cardStyle = {
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#2d2d2d',
      color: theme === 'light' ? '#212529' : '#f8f9fa',
      border: `1px solid ${theme === 'light' ? '#dee2e6' : '#495057'}`,
      transition: 'all 0.3s ease',
      marginBottom: '2rem'
    };

    return (
      <div>
        <h2>Example 3: Theme-Aware Inline Styling</h2>
        <div style={cardStyle}>
          <h3>Adaptive Card</h3>
          <p>This card's colors change based on the current theme.</p>
          <p>Theme: {theme}</p>
        </div>
      </div>
    );
  };

  // Example 4: Using CSS classes with theme
  const renderCSSClassExample = () => (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Example 4: Dynamic CSS Classes</h2>
      <div className={`themed-container ${theme}-theme`}>
        <p>This approach uses CSS classes for styling.</p>
        <p>Apply classes like: .light-theme or .dark-theme</p>
      </div>
    </div>
  );

  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>useTheme Hook - Usage Examples</h1>
      <p>
        These examples show different ways to use the <code>useTheme</code> hook
        in your components.
      </p>
      <hr style={{ margin: '2rem 0' }} />
      
      {renderBasicExample()}
      {renderConditionalExample()}
      {renderStyledExample()}
      {renderCSSClassExample()}

      <div style={{ 
        padding: '1rem',
        backgroundColor: theme === 'light' ? '#e7f3ff' : '#1a3a52',
        borderRadius: '4px',
        marginTop: '2rem'
      }}>
        <h3>Pro Tip:</h3>
        <p>
          For the best results, define CSS custom properties (variables) at the root level
          and toggle them based on the theme class. This keeps your styling centralized
          and maintainable.
        </p>
      </div>
    </div>
  );
};

export default ExampleUsage;
