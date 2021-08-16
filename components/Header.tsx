import Link from "next/link";
import Container from "./Container";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 w-full bg-gray-100 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 border-b-2 border-black dark:border-white">
      <Container>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between py-3">
          <h1>
            <Link href="/">Wahab Shaikh</Link>
          </h1>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
