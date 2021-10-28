import Home from './Home';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Link from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test for Home header', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
});
