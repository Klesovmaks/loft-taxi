import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./Home', () => ({ Home: () => <div>Home Component</div> }));
jest.mock('./About', () => ({ About: () => <div>About Component</div> }));
jest.mock('./Profile', () => ({ Profile: () => <div>Profile Component</div> }));

describe('App', () => {
  it('renders corretly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('Home Component');
  });

  describe('when clicked on nav button', () => {
    it('open the correctly page', () => {
      const { container, getByText } = render(<App />);
      fireEvent.click(getByText('About'));
      expect(container.innerHTML).toMatch('About Component');
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch('Profile Component');
    });
  });
});
