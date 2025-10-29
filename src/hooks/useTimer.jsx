import { useState, useEffect, useCallback } from "react";

export const useTimer = (initialTime, onTimeUp, isActive = true) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const resetTimer = useCallback(
    (newTime = initialTime) => {
      setTimeLeft(newTime);
      setIsRunning(true);
    },
    [initialTime]
  );

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  useEffect(() => {
    if (!isActive || !isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, isRunning, onTimeUp]);

  // إعادة الضبط التلقائي عندما يتغير initialTime
  useEffect(() => {
    resetTimer(initialTime);
  }, [initialTime, resetTimer]);

  return {
    timeLeft,
    resetTimer,
    pauseTimer,
    resumeTimer,
    isRunning,
  };
};
