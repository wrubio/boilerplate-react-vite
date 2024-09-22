import { render } from '@testing-library/react';
import App from '@/App';

describe('Main Entry Point', () => {
  test('renders the App component without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    render(<App />, { container: div });

    expect(div).toBeInTheDocument();
  });
});
