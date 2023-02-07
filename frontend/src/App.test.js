import { render, screen } from '@testing-library/react';
import App from './App';

xtest('Renders Chitter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chitter/i);
  expect(linkElement).toBeInTheDocument();
});
