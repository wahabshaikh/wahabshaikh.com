import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="fixed w-full opacity-80 bg-white dark:bg-black dark:text-white border-b-2 border-black dark:border-white">
      <div className="max-w-5xl mx-auto p-3 flex flex-col sm:flex-row justify-between">
        <h1 className="font-bold text-center">
          <Link href="/">
            <a>Wahab Shaikh</a>
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
