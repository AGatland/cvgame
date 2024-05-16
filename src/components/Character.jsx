import { useState, useEffect } from 'react';

function Character() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyPress = (event) => {
    const { key } = event;
    if (key === 'ArrowUp') setPosition(pos => ({ ...pos, y: pos.y - 10 }));
    if (key === 'ArrowDown') setPosition(pos => ({ ...pos, y: pos.y + 10 }));
    if (key === 'ArrowLeft') setPosition(pos => ({ ...pos, x: pos.x - 10 }));
    if (key === 'ArrowRight') setPosition(pos => ({ ...pos, x: pos.x + 10 }));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
      }}
    />
  );
}

export default Character;