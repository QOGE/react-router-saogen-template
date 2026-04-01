// welcome.tsx
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div>
      <svg width="100" height="100">
        <path d="M10 10 h 80 v 80 h -80 Z" fill="red"/>
        <path d="M20 20 h 60 v 60 h -60 Z" fill="blue"/>
      </svg>
    </div>
  );
};

export default Welcome;
