import { useState, useEffect } from "react";

const CountDownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-5 w-full flex items-center justify-center gap-4">
      <div className="text-center">
        <h6 className="px-4 py-3 bg-blue mb-2 text-white text-lg font-Poppins font-semibold">
          {timeLeft.days}
        </h6>
        <p className="text-sm font-Poppins font-semibold">Days</p>
      </div>
      <div className="text-center">
        <h6 className="px-4 py-3 bg-blue mb-2 text-white text-lg font-Poppins font-semibold">
          {String(timeLeft.hours).padStart(2, "0")}
        </h6>
        <p className="text-sm font-Poppins font-semibold">Hours</p>
      </div>
      <div className="text-center">
        <h6 className="px-4 py-3 bg-blue mb-2 text-white text-lg font-Poppins font-semibold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </h6>
        <p className="text-sm font-Poppins font-semibold">Minutes</p>
      </div>
      <div className="text-center">
        <h6 className="px-4 py-3 bg-blue mb-2 text-white text-lg font-Poppins font-semibold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </h6>
        <p className="text-sm font-Poppins font-semibold">Seconds</p>
      </div>
    </div>
  );
};



export default CountDownTimer;
