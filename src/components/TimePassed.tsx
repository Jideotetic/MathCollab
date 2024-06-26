import React, { useState, useEffect } from "react";

interface TimePassedProps {
  eventDate: string;
}

const TimePassed: React.FC<TimePassedProps> = ({ eventDate }) => {
  const [timePassed, setTimePassed] = useState<string>("");

  useEffect(() => {
    const calculateTimePassed = () => {
      const now = new Date();
      const currentDate = new Date(eventDate);
      const diff = currentDate.getTime() - now.getTime();
      const secondsPassed = Math.abs(Math.floor(diff / 1000));

      let displayTimePassed;
      if (diff > 0) {
        const daysToStart = Math.ceil(secondsPassed / 86400);
        displayTimePassed = `${daysToStart} day${
          daysToStart !== 1 ? "s" : ""
        } to start`;
      } else {
        if (secondsPassed < 60) {
          displayTimePassed = `${secondsPassed} seconds ago`;
        } else if (secondsPassed! < 3600) {
          const minutesPassed = Math.floor(secondsPassed! / 60);
          displayTimePassed = `${minutesPassed} minute${
            minutesPassed !== 1 ? "s" : ""
          } ago`;
        } else if (secondsPassed! < 86400) {
          const hoursPassed = Math.floor(secondsPassed / 3600);
          displayTimePassed = `${hoursPassed} hour${
            hoursPassed !== 1 ? "s" : ""
          } ago`;
        } else {
          const daysPassed = Math.floor(secondsPassed / 86400);
          displayTimePassed = `${daysPassed} day${
            daysPassed !== 1 ? "s" : ""
          } ago`;
        }
      }

      setTimePassed(displayTimePassed);
    };

    calculateTimePassed();

    const interval = setInterval(calculateTimePassed, 60000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return <span>{timePassed}</span>;
};

export default TimePassed;
