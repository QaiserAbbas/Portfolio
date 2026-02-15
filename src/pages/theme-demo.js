import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useTheme from '../hooks/useTheme';
import { THEME_COLORS, getCSSVariable } from '../utils/themeUtils';

/**
 * Theme Demo Page
 * Demonstrates theme functionality across all design elements
 */
const ThemeDemo = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      <SEO title="Theme Demo" description="Interactive theme demonstration" />
      
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <h2>Theme System Demo</h2>
            <div className="underline"></div>
          </div>

          {/* Current Theme Display */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3>Current Theme: <span style={{ color: 'var(--clr-primary-5)' }}>{theme}</span></h3>
            <p>Toggle the theme using the button in the navigation bar to see all components adapt.</p>
          </div>

          {/* Typography Demo */}
          <div className="bg-grey" style={{ padding: '2rem', marginBottom: '2rem', borderRadius: 'var(--radius)' }}>
            <h2>Typography</h2>
            <h1>Heading 1 - Adapts to Theme</h1>
            <h2>Heading 2 - Adapts to Theme</h2>
            <h3>Heading 3 - Adapts to Theme</h3>
            <h4>Heading 4 - Adapts to Theme</h4>
            <p>
              This is a paragraph that demonstrates how text color automatically changes 
              with the theme. All text uses CSS custom properties that adapt to light 
              and dark modes seamlessly.
            </p>
          </div>

          {/* Buttons Demo */}
          <div style={{ marginBottom: '3rem' }}>
            <h2>Buttons</h2>
            <div className="underline"></div>
            <button className="btn">Primary Button</button>
            <button className="btn center-btn">Centered Button</button>
          </div>

          {/* Colors Demo */}
          <div style={{ marginBottom: '3rem' }}>
            <h2>Color Palette</h2>
            <div className="underline"></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <ColorBox varName="--clr-primary-5" label="Primary" />
              <ColorBox varName="--clr-grey-1" label="Heading Text" />
              <ColorBox varName="--clr-grey-3" label="Body Text" />
              <ColorBox varName="--clr-grey-10" label="Background" />
              <ColorBox varName="--clr-white" label="Surface" />
              <ColorBox varName="--clr-footer-bg" label="Footer" />
            </div>
          </div>

          {/* Cards Demo */}
          <div style={{ marginBottom: '3rem' }}>
            <h2>Cards & Containers</h2>
            <div className="underline"></div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <ThemeCard title="Card 1" theme={theme} />
              <ThemeCard title="Card 2" theme={theme} />
              <ThemeCard title="Card 3" theme={theme} />
            </div>
          </div>

          {/* Links Demo */}
          <div className="bg-grey" style={{ padding: '2rem', marginBottom: '2rem', borderRadius: 'var(--radius)' }}>
            <h2>Links & Interactive Elements</h2>
            <div className="underline"></div>
            <p>
              <a href="#demo" className="social-link-2" style={{ display: 'inline' }}>
                This is a themed link
              </a> that adapts to the current color scheme.
            </p>
          </div>

          {/* Code Block Demo */}
          <div style={{ marginBottom: '3rem' }}>
            <h2>Code Blocks</h2>
            <div className="underline"></div>
            <pre className="blog-template" style={{ background: 'var(--clr-code-bg)', color: 'var(--clr-code-text)', padding: '1rem', borderRadius: 'var(--radius)' }}>
{`// Theme-aware code block
const theme = useTheme();
console.log('Current theme:', theme);`}
            </pre>
          </div>

          {/* Implementation Info */}
          <div className="bg-grey" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
            <h2>How It Works</h2>
            <div className="underline"></div>
            <ul style={{ lineHeight: '2', paddingLeft: '2rem' }}>
              <li>✅ All components use CSS custom properties (variables)</li>
              <li>✅ Theme changes update all variables automatically</li>
              <li>✅ No component-level changes needed</li>
              <li>✅ Smooth transitions between themes</li>
              <li>✅ Persists across page reloads (localStorage)</li>
              <li>✅ Respects system preference on first visit</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper component to display color boxes
const ColorBox = ({ varName, label }) => {
  const color = getCSSVariable(varName);
  
  return (
    <div style={{
      padding: '1rem',
      background: `var(${varName})`,
      borderRadius: 'var(--radius)',
      border: '2px solid var(--clr-grey-8)',
      minHeight: '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }}>
      <p style={{ 
        fontSize: '0.875rem', 
        margin: 0,
        padding: '0.5rem',
        background: 'var(--clr-white)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--clr-grey-8)'
      }}>
        <strong>{label}</strong><br />
        {varName}<br />
        <code>{color}</code>
      </p>
    </div>
  );
};

// Helper component for themed cards
const ThemeCard = ({ title, theme }) => {
  return (
    <div style={{
      background: 'var(--clr-white)',
      padding: '1.5rem',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--light-shadow)',
      border: '1px solid var(--clr-grey-8)'
    }}>
      <h3>{title}</h3>
      <p style={{ color: 'var(--clr-grey-3)' }}>
        This card automatically adapts to the <strong>{theme}</strong> theme using CSS variables.
      </p>
      <button className="btn" style={{ width: '100%', marginTop: '1rem' }}>
        Action Button
      </button>
    </div>
  );
};

export default ThemeDemo;
