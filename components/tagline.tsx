import { useEffect, useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import taglines from "../data/taglines.json";

export default function Tagline() {
  const [tagline, setTagline] = useState(taglines[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTagline(taglines[count]);
  }, [count]);

  return (
    <>
      <h3 className="font-black text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 font-heading leading-relaxed text-center uppercase my-3">
        {`and I ${tagline.text}! ${tagline.emoji}`}
      </h3>
      <button
        aria-label="Change the tagline"
        type="button"
        onClick={() => setCount((count + 1) % taglines.length)}
      >
        <RefreshIcon className="w-6 h-6 animate-spin" />
      </button>
    </>
  );
}
