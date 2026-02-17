import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders updated portfolio hero title', () => {
    render(<App />);
    const heroElement = screen.getByText(/Python Backend & Vue Frontend Developer/i);
    expect(heroElement).toBeInTheDocument();
});
