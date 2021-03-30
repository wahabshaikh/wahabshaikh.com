import Link from "next/link";
import Container from "./container";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="fixed w-full opacity-80 bg-white dark:bg-black text-black dark:text-white border-b-2 border-black dark:border-white">
      <Container>
        <h1 className="font-heading text-center">
          <Link href="/">
            <a>Wahab Shaikh</a>
          </Link>
        </h1>
        <Nav />
      </Container>
    </header>
  );
}
