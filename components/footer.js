import Container from "./container";

export default function Footer() {
  return (
    <footer className=" dark:bg-black dark:text-white border-t-2 border-black dark:border-white">
      <Container>
        <a
          className="hover:underline"
          href="https://github.com/wahabshaikh/portfolio"
        >
          Source Code
        </a>
      </Container>
    </footer>
  );
}
