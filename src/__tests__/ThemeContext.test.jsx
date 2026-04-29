import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeProvider, ThemeContext } from '../Context/ThemeContext.jsx';

// Helper component to test context
const TestConsumer = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle">Toggle</button>
    </div>
  );
};

// Mock localStorage for jsdom
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => { store[key] = value; }),
    clear: vi.fn(() => { store = {}; }),
    removeItem: vi.fn((key) => { delete store[key]; }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default theme as dark', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('toggles theme when toggleTheme is called', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    
    fireEvent.click(screen.getByTestId('toggle'));
    
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByTestId('toggle'));
    
    expect(localStorage.setItem).toHaveBeenCalledWith('portfolio-theme', '"light"');
  });

  it('loads theme from localStorage on mount', () => {
    localStorage.setItem('portfolio-theme', '"light"');
    
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('applies theme to document element', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    
    fireEvent.click(screen.getByTestId('toggle'));
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});