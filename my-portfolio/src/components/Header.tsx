import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];
  const currentPath = location.pathname;
  return (
    <header>
      <nav className="absolute top-0 left-0 right-0 flex justify-center gap-4 p-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-all ${
              currentPath === link.path
                ? "text-white hover:cursor-default"
                : "text-gray-600 hover:text-gray-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
