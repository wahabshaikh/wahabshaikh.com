import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="wrapper fixed w-full opacity-80 border-b-2 border-black dark:border-white">
      <div className="container sm:flex-row sm:justify-between py-3">
        <h1 className="font-heading text-center">
          <Link href="/">
            <a>Wahab Shaikh</a>
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
