import '@testing-library/jest-dom';

/**
 * Test setup file for Vitest
 * Configures jest-dom matchers for React Testing Library
 */
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Cleanup after each test to avoid memory leaks
afterEach(() => {
  cleanup();
});

/**
 * Custom render function that includes all providers
 * Usage: render(<Component />, { wrapper: UIProviders })
 */
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

function render(ui, { route = '/' } = {}) {
  window.history.pushState({}, 'Test', route);

  return rtlRender(ui, {
    wrapper: BrowserRouter,
  });
}

// Re-export everything from Testing Library
export * from '@testing-library/react';

// Export custom render with providers
export { render };