import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Tests in App Component', () => {
  render(<App />);
  it('Check for Calculator in header', () => {
    const elements = screen.queryAllByText('Calculator');
    expect(elements.length).toBe(1);
    expect(elements[0]).toBeInTheDocument();
    expect(elements[0]).toHaveTextContent('Calculator');
  });
  it('Check for App', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
