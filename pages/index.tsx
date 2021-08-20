import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import Intro from "../components/Intro";
import Tagline from "../components/Tagline";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Wahab Shaikh</title>
      </Head>

      <section id="home" className="section grid place-items-center">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <Intro />
            <Tagline />
          </div>
        </Container>
      </section>

      <section id="about" className="section section-alternate">
        <Container>
          <h2 className="section-title">About Me</h2>
        </Container>
      </section>

      <section id="work" className="section">
        <Container>
          <h2 className="section-title">Work</h2>
        </Container>
      </section>

      <section id="contact" className="section section-alternate">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h2 className="section-title">Contact</h2>
            <p className="mb-8 text-center sm:text-lg text-gray-700 dark:text-gray-300">
              Interested? Send me a message.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
