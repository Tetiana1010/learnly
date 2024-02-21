import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
}
