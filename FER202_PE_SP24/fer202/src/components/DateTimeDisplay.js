import React, { useState, useEffect } from 'react';


const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Current Date and Time: {currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default DateTimeDisplay;