// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders evmAether title', () => {
    render(<App />);
    const titleElement = screen.getByText(/evmAether/i);
    expect(titleElement).toBeInTheDocument();
});
