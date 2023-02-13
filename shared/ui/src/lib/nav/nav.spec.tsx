import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './nav';

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
