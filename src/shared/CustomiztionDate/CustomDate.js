import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  }
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0];

  return (
    <div>
      <h1 className='text-white py-1 font-bold'>{formattedDate}</h1>
      <div className='text-white flex justify-start gap-5'>
        {timeLeft && timeLeft.days !== undefined 
        && timeLeft.hours !== undefined 
        && timeLeft.minutes !== undefined 
        && timeLeft.seconds !== undefined
         && (
          <span>
            <span className=''>{timeLeft.days}d</span> - <span className=''>{timeLeft.hours}h</span> - <span className=''>{timeLeft.minutes}m</span> - <span className=''>{timeLeft.seconds}s</span>
          </span>
        )}

      </div>
    </div>
  );
};

// Usage
const CustomDate = () => {
  // Set the target date to 3 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default CustomDate;
