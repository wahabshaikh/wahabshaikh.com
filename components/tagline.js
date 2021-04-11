import { useEffect, useState } from "react";

const taglines = [
  { emoji: "❤️", text: "love to build things for the web" },
  { emoji: "🧭", text: "am exploring the JAMstack" },
  { emoji: "😍", text: "admire Shah Rukh Khan" },
  { emoji: "💜", text: "support the Kolkata Knight Riders" },
  { emoji: "🗣️", text: "can talk about cricket all-day" },
];

export default function Tagline() {
  const [tagline, setTagline] = useState(taglines[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTagline(taglines[count]);
  }, [count]);

  return (
    <>
      <h3 className="font-black text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200  font-heading leading-relaxed text-center uppercase my-3">
        <span>and I </span> <span>{tagline.text}! </span>
        <span>{tagline.emoji}</span>
      </h3>
      <button
        aria-label="Refresh tagline"
        type="button"
        onClick={() => setCount((count + 1) % taglines.length)}
      >
        <svg
          className="w-6 h-6 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </button>
    </>
  );
}
