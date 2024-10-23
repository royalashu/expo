import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-bg py-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center md:items-start">
        {/* Logo Section */}
        <div className="m-10 w-full md:w-80 flex justify-center md:justify-start mb-8 md:mb-0 px-5">
          <img src={logo} alt="Logo" className="h-16 md:h-20" />
        </div>

        {/* Links, Contact, and Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between w-full mt-8 md:mt-0">
          {/* Links Section */}
          <div className="mb-8 md:mb-0 md:mr-8 flex flex-col align-center justify-center text-center md:text-left md:align-left">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="text-text flex flex-col gap-2">
              <li>
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refunds-and-cancellation" className="hover:underline">
                  Refunds & Cancellations
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0 md:mr-8 flex flex-col align-center  text-center md:text-left md:align-left">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Contact Us
            </h3>
            <p className="text-text">
              <a
                href="tel:+917017538193"
                className="text-primary hover:underline"
              >
                +91 (701) 753-8193
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 md:mb-0 flex flex-col align-center justify-center text-center md:text-left md:align-left">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Connect with Us
            </h3>
            <div className="flex flex-col gap-2 w-fit mx-auto md:m-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary"
              >
                X (Twitter)
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-border pt-5 text-center">
        <p className="text-text">
          &copy; {new Date().getFullYear()} Exponential World. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
