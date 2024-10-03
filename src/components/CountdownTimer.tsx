import { vetren } from "@/pages";
import { useEffect, useState, useMemo, useCallback } from "react";

const CountdownTimer = ({ initialTimeLeft }: { initialTimeLeft: string }) => {
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date(initialTimeLeft).getTime();
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [initialTimeLeft]);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formattedTime = useMemo(() => {
    return (
      <p
        className={`${vetren.className} text-[128px] leading-[80px] tracking-[-6.4px] text-[#1A1921] mobile:text-[96px] mobile:tracking-[-4.8px]`}
      >
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </p>
    );
  }, [timeLeft]);

  return formattedTime;
};

export default CountdownTimer;
