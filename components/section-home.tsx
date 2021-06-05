import Greet from "./greet";
import Tagline from "./tagline";

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container">
        <Greet />
        <Tagline />
      </div>
    </section>
  );
}
