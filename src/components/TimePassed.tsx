import { useState, useEffect } from "react";

export default function TimePassed({ eventDate }) {
  const [timePassed, setTimePassed] = useState("");

  useEffect(() => {
    const calculateTimePassed = () => {
      const now = new Date();
      const diff = now - new Date(eventDate);
      const secondsPassed = Math.floor(diff / 1000);

      let displayTimePassed;
      if (secondsPassed < 60) {
        displayTimePassed = `${secondsPassed}secs ago`;
      } else if (secondsPassed < 3600) {
        const minutesPassed = Math.floor(secondsPassed / 60);
        displayTimePassed = `${minutesPassed}min${
          minutesPassed !== 1 ? "s" : ""
        } ago`;
      } else if (secondsPassed < 86400) {
        const hoursPassed = Math.floor(secondsPassed / 3600);
        displayTimePassed = `${hoursPassed}hr${
          hoursPassed !== 1 ? "s" : ""
        } ago`;
      } else {
        const daysPassed = Math.floor(secondsPassed / 86400);
        displayTimePassed = `${daysPassed}day${
          daysPassed !== 1 ? "s" : ""
        } ago`;
      }

      setTimePassed(displayTimePassed);
    };

    calculateTimePassed();

    const interval = setInterval(calculateTimePassed, 60000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return <span>{timePassed}</span>;
}
