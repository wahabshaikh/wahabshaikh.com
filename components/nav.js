import NavLink from "./nav-link";
import ToggleTheme from "./toggle-theme";

const links = [
  { section: "hero", title: "Home" },
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
            <NavLink to={link.section}>{link.title}</NavLink>
          </li>
        ))}
        <ToggleTheme />
      </ul>
    </nav>
  );
}
