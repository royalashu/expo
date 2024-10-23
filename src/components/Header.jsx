import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="nav shadow-lg sticky z-[1000] top-0 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Exponential World Logo" className="h-14" />
        </Link>

        {/* Navigation Menu */}
        <nav
          id="navbar-default"
          className={`${
            isNavOpen
              ? "flex flex-col p-3 gap-4 shadow-lg text-center absolute right-0 -bottom-56 bg-secondary rounded-lg md:hidden"
              : "hidden"
          } md:flex md:flex-row md:items-center md:space-x-10`}
        >
          <Link to="/" className="hover:text-primary cursor-pointer">
            Home
          </Link>
          <a href="/#courses" className="hover:text-primary cursor-pointer">
            Courses
          </a>
          <a href="/#about" className="hover:text-primary cursor-pointer">
            About
          </a>
          <Link to="/contact-us" className="hover:text-primary cursor-pointer">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-primary cursor-pointer px-8 py-3 text-bg rounded-lg hover:bg-text"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          data-collapse-toggle="navbar-default"
          type="button"
          className="relative inline-flex items-center w-10 h-10 justify-center text-text border border-primary text-sm rounded-lg md:hidden hover:bg-primary hover:text-bg"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <svg
            className={`w-5 h-5 ${isNavOpen ? "hidden" : "block"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>

          <i
            className={`ri-close-line text-4xl ${
              isNavOpen ? "block" : "hidden"
            }`}
          ></i>
        </button>
      </div>
    </header>
  );
}
