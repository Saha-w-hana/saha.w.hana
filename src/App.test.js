import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SAHA W HANA website', () => {
  render(<App />);
  expect(screen.getAllByText(/SAHA W HANA/i).length).toBeGreaterThan(0);
});
