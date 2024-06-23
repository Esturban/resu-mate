import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from '../../components/Hero';

it('Hero can be generated and inserted', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Hero />);
});