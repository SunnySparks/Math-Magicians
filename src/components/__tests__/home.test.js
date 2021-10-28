import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

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

it('Test Home from Snapshot', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
