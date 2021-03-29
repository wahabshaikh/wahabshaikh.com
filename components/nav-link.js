import { Link } from "react-scroll";

export default function NavLink({ to, children }) {
  return (
    <Link
      className="cursor-pointer"
      activeClass="font-bold"
      to={to}
      spy
      smooth
      duration={500}
    >
      {children}
    </Link>
  );
}
