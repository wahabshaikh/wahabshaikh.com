import { Link as ReactScrollLink } from "react-scroll";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { section: "home", title: "Home" },
  { section: "about", title: "About" },
  { section: "work", title: "Work" },
  { section: "contact", title: "Contact" },
];

const Nav: React.FC = () => {
  return (
    <nav className="flex-1">
      <ul className="flex justify-center sm:justify-end space-x-5">
        {links.map((link) => (
          <li key={link.title}>
            <ReactScrollLink
              className="cursor-pointer"
              activeClass="font-medium"
              to={link.section}
              spy
              smooth
              duration={500}
            >
              {link.title}
            </ReactScrollLink>
          </li>
        ))}
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Nav;
