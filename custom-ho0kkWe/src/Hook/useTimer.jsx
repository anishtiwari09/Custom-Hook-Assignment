import { useEffect, useRef, useState } from "react";

export default function useTimer({ initialState }) {
  const [value, setValue] = useState(initialState);
  const timerRef = useRef(null);
  const startTime = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setValue((prev) => {
          if (prev - 1 === 0) clearInterval(timerRef.current);
          return prev - 1;
        });
      }, 1000);
    }
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setValue(initialState);
  };
  useEffect(() => {
    console.log(Date.now(), "cleaning");
    return pauseTimer;
  }, []);
  return [value, startTime, pauseTimer, resetTimer];
}
