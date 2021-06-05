import Head from "next/head";
import About from "../components/section-about";
import Contact from "../components/section-contact";
import Home from "../components/section-home";
import Work from "../components/section-work";

export default function Index() {
  return (
    <>
      <Head>
        <title>Wahab Shaikh</title>
      </Head>
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}
