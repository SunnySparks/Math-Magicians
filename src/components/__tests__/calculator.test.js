import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('displays the numbers and results when clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('14')).toBeInTheDocument();
});
