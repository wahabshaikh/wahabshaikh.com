import { useEffect, useState } from "react";
import greetings from "../data/greetings.json";

export default function Greet() {
  const [randomGreeting, setRandomGreeting] = useState(greetings[0]);

  // Automatically choose a random greeting every 7 seconds
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
    <h3 className="font-black text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 font-heading leading-relaxed text-center uppercase">
      <span>{randomGreeting.hello}, </span>
      <span>I am</span>
    </h3>
  );
}
