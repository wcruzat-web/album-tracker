import { useState, useEffect } from "react";
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch (error) {
      console.warn(`Could not read local storage key "${key}".`, error);
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Could not save local storage key "${key}".`, error);
    }
  }, [key, value]);
  return [value, setValue];
}
