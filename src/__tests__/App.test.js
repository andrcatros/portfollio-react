import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App.js';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const placeholderElement = getByText(/this is the App component/i);
  expect(placeholderElement).toBeInTheDocument();
});
