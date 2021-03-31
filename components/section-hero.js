import Greet from "./greet";
import Section from "./section";
import Tagline from "./tagline";

export default function Hero() {
  return (
    <Section id="hero">
      <Greet />
      <h2 className="font-black font-heading text-7xl sm:text-8xl md:text-9xl text-center uppercase tracking-wide">
        <span>Wahab</span>
        <span className="block bg-black dark:bg-white text-gray-100 dark:text-gray-900">
          Shaikh
        </span>
      </h2>
      <Tagline />
    </Section>
  );
}
