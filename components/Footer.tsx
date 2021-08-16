import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black dark:border-white">
      <Container>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between py-3">
          <a
            className="hover:underline"
            href="https://github.com/wahabshaikh/portfolio"
          >
            Source Code
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
