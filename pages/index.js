import Head from "next/head";
import About from "../components/section-about";
import Contact from "../components/section-contact";
import Hero from "../components/section-hero";
import Work from "../components/section-work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wahab Shaikh</title>
      </Head>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
