import { useEffect, useState } from "react";
import Section from "./section";
import RefreshIcon from "../icons/refresh";

const taglines = [
  { emoji: "❤️", label: "love", text: "to build things for the web" },
  { emoji: "💜", label: "love", text: "the Kolkata Knight Riders" },
  { emoji: "🗣️", label: "talk", text: "about cricket all-day" },
  { emoji: "🗣️", label: "talk", text: "about cricket all-day" },
];

export default function Hero() {
  const [randomTagline, setRandomTagline] = useState(taglines[0]);

  // Automatically choose a random tagline every 7 seconds
  useEffect(() => {
    const timer = setInterval(getRandomTagline, 7 * 1000);
    return () => clearInterval(timer);
  }, []);

  function getRandomTagline() {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    setRandomTagline(randomTagline);
  }

  return (
    <Section id="hero">
      <h2 className="font-black font-heading text-7xl sm:text-8xl md:text-9xl text-center uppercase tracking-wide">
        <span>Wahab</span>
        <span className="block bg-black dark:bg-white text-gray-100 dark:text-gray-900">
          Shaikh
        </span>
      </h2>
      <h3 className="font-black text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 font-heading leading-relaxed text-center uppercase mt-3">
        <span role="img" aria-label={randomTagline.label}>
          {randomTagline.emoji}s
        </span>{" "}
        <span>{randomTagline.text}!</span>
      </h3>
      <button aria-label="Choose a random tagline" onClick={getRandomTagline}>
        <RefreshIcon />
      </button>
    </Section>
  );
}
