import { Link } from "react-scroll";
import ToggleTheme from "./toggle-theme";

const links = [
  { section: "home", title: "Home" },
  { section: "about", title: "About" },
  { section: "work", title: "Work" },
  { section: "contact", title: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex-1">
      <ul className="flex justify-center sm:justify-end space-x-5">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              className="cursor-pointer"
              activeClass="font-bold"
              to={link.section}
              spy
              smooth
              duration={500}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <ToggleTheme />
      </ul>
    </nav>
  );
}
