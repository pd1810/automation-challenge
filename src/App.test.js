import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the automation challenge/i);
  expect(linkElement).toBeInTheDocument();
});

//test('failure placeholder', () => {
  // This test will fail. It's purpose is to see a failed CI build in the log. Just delete this test once that has been accomplished.
//  expect(undefined).toBeInTheDocument();
//});
