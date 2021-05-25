import React from 'react';
import { render, screen } from '@testing-library/react';

import { Okno } from './Okno';

describe('Okno', () => {
  test('renders', () => {
    render(<Okno />);
    const element = screen.getByText('Okno');
    expect(element).toBeInTheDocument();
  });
});
