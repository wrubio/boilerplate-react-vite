import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Yai! Wolrd', () => {
    render(<App />);
    const textElement = screen.getByText(/Yai! Wolrd/i);
    expect(textElement).toBeInTheDocument();
  });
});
