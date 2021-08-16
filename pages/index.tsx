import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Intro from "../components/Intro";
import Tagline from "../components/Tagline";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wahab Shaikh</title>
      </Head>

      <section id="home" className="section">
        <Intro />
        <Tagline />
      </section>

      <section id="about" className="section section-alternate">
        <h2 className="section-title">About Me</h2>
      </section>

      <section id="work" className="section">
        <h2 className="section-title">Work</h2>
      </section>

      <section id="contact" className="section section-alternate">
        <h2 className="section-title">Contact</h2>
        <p className="mb-8 text-center sm:text-lg text-gray-700 dark:text-gray-300">
          Interested? Send me a message.
        </p>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
