import React, { useState, useEffect } from 'react';

const Show = () => {
  const [position, setPosition] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isStopped, setIsStopped] = useState(false);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];

  useEffect(() => {
    // Start the animation
    const id = setInterval(() => {
      setPosition(prev => prev + 1);
    }, 10);
    setIntervalId(id);

    // Clean up the interval on component unmount
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Randomly stop the animation
    const stopTime = Math.random() * 5000 + 1000; // Stop between 1s to 6s
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setIsStopped(true);
    }, stopTime);

    return () => clearTimeout(timeoutId);
  }, [intervalId]);

  return (
    <div className="container">
      <div className="letter" style={{ left: `${position}px` }}>
        {randomLetter}
      </div>
    </div>
  );
};

export default Show;
