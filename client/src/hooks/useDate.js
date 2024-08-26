import { useEffect, useState } from "react";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format time only, excluding date
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    time,
  };
};
