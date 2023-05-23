import * as React from "react";

import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders nuimagemedical text', () => {
  render(<Contact />);
  const text = screen.getByRole("heading", { name: /Contact/i });
  expect(text).toBeInTheDocument();
});
