import { useEffect, useState } from "react";
import greetings from "../data/greetings.json";

export default function Greet() {
  const [randomGreeting, setRandomGreeting] = useState(greetings[0]);

  useEffect(() => {
    const timer = setInterval(getRandomGreeting, 7 * 1000);
    return () => clearInterval(timer);
  }, []);

  function getRandomGreeting() {
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    setRandomGreeting(randomGreeting);
  }

  return (
    <h2 className="font-heading font-black uppercase text-center">
      <span className="block text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 leading-relaxed">{`${randomGreeting.hello}, I am`}</span>
      <span className="text-7xl sm:text-8xl md:text-9xl tracking-wide">
        <span>Wahab</span>
        <span className="block bg-black text-gray-100 dark:bg-white dark:text-gray-900">
          Shaikh
        </span>
      </span>
    </h2>
  );
}
