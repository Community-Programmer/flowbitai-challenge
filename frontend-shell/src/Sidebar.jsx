import React from 'react';

export default function Sidebar({ screens, onSelect }) {
  return (
    <div>
      <h3>Screens</h3>
      {screens.map(screen => (
        <button key={screen} onClick={() => onSelect(screen)}>
          {screen}
        </button>
      ))}
    </div>
  );
}
