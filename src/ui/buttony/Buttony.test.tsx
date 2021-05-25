import React from 'react';
import { render, screen } from '@testing-library/react';

import { Buttony } from './Buttony';

describe('Buttony', () => {
  test('renders', () => {
    render(<Buttony />);
    const element = screen.getByText('Buttony');
    expect(element).toBeInTheDocument();
  });
});
