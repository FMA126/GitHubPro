import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  // const projectName = screen.getByText(/resultstack/i);
  // expect(projectName).toBeInTheDocument();
});
