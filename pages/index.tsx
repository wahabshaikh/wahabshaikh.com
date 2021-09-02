import Head from "next/head";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
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
          <p className="section-subtitle">
            I have helped build these (awesome) products!
          </p>
          <div className="grid sm:grid-flow-col gap-4 place-items-center">
            <ProjectCard
              title="Noggin"
              logo="/noggin.png"
              websiteUrl="https://noggin.so"
              description="Noggin is the fastest and easiest Notion course builder. Quickly turn
              your expertise into bite-sized, dynamic courses that grow with your
              learners’ needs. Collect payments, use your domain and more— without a
              single-line of code."
            />
            <ProjectCard
              title="Social Snippet"
              logo="/social-snippet.png"
              websiteUrl="https://social-snippet.vercel.app"
              description="Social Snippet turns your audio podcasts into socially sharable video clips with the transcription."
            />
          </div>
        </Container>
      </section>

      <section id="contact" className="section section-alternate">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Interested? Send me a message.</p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
