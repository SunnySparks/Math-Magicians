import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

it('Test Quote from Snapshot', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});

it('Test Quote from DOM', () => {
  render(<Quote />);
  expect(screen.getByText('Quote of the day')).toBeInTheDocument();
});
