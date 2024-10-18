import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <header className="nav shadow-lg fixed z-[1000] top-0 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
          {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Exponential World Logo" className="h-[4.5vw]" />
        </Link>
        
        <nav className="space-x-10 text-[1.3vw]">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/courses" className="hover:text-primary">Courses</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact-us" className="hover:text-primary">Contact</Link>
          <Link to="/login" className="bg-primary px-8 py-3 text-bg rounded-lg hover:bg-text">Login</Link>
        </nav>
      </div>
    </header>
  );
}
