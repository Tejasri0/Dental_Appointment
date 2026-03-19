import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <nav className="bg-card shadow-[0_1px_3px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-lg tracking-tight">
          🦷 DentalBook
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
              !isAdmin
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Dentists
          </Link>
          <Link
            to="/admin"
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
              isAdmin
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
