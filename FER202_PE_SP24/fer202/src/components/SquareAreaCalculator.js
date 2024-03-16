import React, { useState } from 'react';


const SquareAreaCalculator = () => {
  const [sideLength, setSideLength] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const parsedLength = parseFloat(sideLength);
    if (!isNaN(parsedLength)) {
      setArea(parsedLength * parsedLength);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={sideLength}
        onChange={e => setSideLength(e.target.value)}
        placeholder="Enter the side length (n)"
      />
      <button onClick={calculateArea}>Calculate Area</button>
      {area !== null && <p>Area: {area}</p>}
    </div>
  );
};

export default SquareAreaCalculator;
