'use client'
import LiquidGlass from 'liquid-glass-react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Demo() {
  return (
    <LiquidGlass>
      <div className="p-6">
        <h2>Your content here</h2>
        <p>This will have the liquid glass effect</p>
      </div>
    </LiquidGlass>
  );
}
