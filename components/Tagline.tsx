import { useEffect, useState } from "react";
import { HiRefresh } from "react-icons/hi";
import taglines from "../data/taglines.json";

const Tagline: React.FC = () => {
  const [tagline, setTagline] = useState(taglines[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTagline(taglines[count]);
  }, [count]);

  return (
    <>
      <h3 className="font-black text-xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 leading-relaxed text-center uppercase my-3">
        {`${tagline.text}! ${tagline.emoji}`}
      </h3>
      <button
        aria-label="Refresh tagline"
        type="button"
        onClick={() => setCount((count + 1) % taglines.length)}
      >
        <HiRefresh className="w-6 h-6 animate-spin" />
      </button>
    </>
  );
};

export default Tagline;
