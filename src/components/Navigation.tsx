
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight hover:text-primary transition-colors duration-200"
        >
          M.A. Niemiro
        </Link>
        <nav className="ml-auto flex gap-1">
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/work"
            className={`nav-link ${isActive('/work') ? 'active' : ''}`}
          >
            Work
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
