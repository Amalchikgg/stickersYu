import { vetren } from "@/pages";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(120); // Начинаем с 120 секунд (2 минуты)

  useEffect(() => {
    if (timeLeft === 0) return; // Останавливаем таймер, когда время истекает

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Уменьшаем на 1 каждую секунду
    }, 1000);

    return () => clearInterval(timerId); // Очищаем таймер при размонтировании компонента
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      secs < 10 ? `0${secs}` : secs
    }`;
  };

  return (
    <p
      className={`${vetren.className} text-[200px] leading-[80px] tablet:text-[128px] tablet:tracking-[-6.4px] tracking-[-10px] text-[#1A1921] mobile:text-[96px] mobile:tracking-[-4.8px]`}
    >
      {formatTime(timeLeft)} {/* Форматируем время */}
    </p>
  );
};

export default CountdownTimer;
