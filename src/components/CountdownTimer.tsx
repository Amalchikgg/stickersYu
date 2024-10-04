import { vetren } from "@/pages";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Начинаем с 60 секунд

  useEffect(() => {
    if (timeLeft === 0) return; // Останавливаем таймер, когда время истекает

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Уменьшаем на 1 каждую секунду
    }, 1000);

    return () => clearInterval(timerId); // Очищаем таймер при размонтировании компонента
  }, [timeLeft]);

  return (
    <p
      className={`${vetren.className} text-[200px] leading-[80px] tracking-[-10px] text-[#1A1921] mobile:text-[96px] mobile:tracking-[-4.8px]`}
    >
      00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
    </p>
  );
};

export default CountdownTimer;
