import { useEffect, useState } from "react";
import greetings from "../data/greetings.json";

const Intro: React.FC = () => {
  const [randomGreeting, setRandomGreeting] = useState(greetings[0]);

  useEffect(() => {
    const timer = setInterval(getRandomGreeting, 7 * 1000);
    return () => clearInterval(timer);
  }, []);

  const getRandomGreeting = () => {
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    setRandomGreeting(randomGreeting);
  };

  return (
    <h2 className="inline-flex flex-col font-black uppercase text-center">
      <span className="text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 leading-relaxed">
        <span lang={randomGreeting.code}>{randomGreeting.text}</span>, I am
      </span>{" "}
      <span className="text-7xl sm:text-8xl md:text-9xl tracking-wide">
        Wahab
      </span>{" "}
      <span className="bg-black dark:bg-white text-gray-100 dark:text-gray-900 text-7xl sm:text-8xl md:text-9xl tracking-wide">
        Shaikh
      </span>
    </h2>
  );
};

export default Intro;
