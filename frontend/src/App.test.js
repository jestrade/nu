import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nuimagemedical text', () => {
  render(<App />);
  const text = screen.getByText(/nuimagemedical/i);
  expect(text).toBeInTheDocument();
});
