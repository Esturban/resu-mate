import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

it('Complete application renders and elements can be inserted', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<App />);
});