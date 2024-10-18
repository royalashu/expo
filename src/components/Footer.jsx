import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-secondary py-10">
      <div className="container flex mx-auto px-5">
        <div className='border-r-2 border-border f-logo w-80 h-full flex align-center justify-center m-auto mx-5 px-5'>
          <img src={logo} alt="" />
        </div>
        <div className="flex w-[80%] m-auto flex-col md:flex-row justify-between align-top">
          {/* Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="text-text flex flex-col">
              <li className="mb-2 md:mb-0">
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link to="/refunds-cancellations" className="hover:underline">
                  Refunds & Cancellations
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-primary mb-2">Contact Us</h3>
            <p className="text-text mb-2">
              <a href="tel:+917017538193" className="text-primary hover:underline">
                +91 (701) 753-8193
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-primary mb-2">Connect with Us</h3>
            <div className="flex flex-col">
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
              <div className="mt-8 border-t p-5 text-center">
          <p className="text-text">
            &copy; {new Date().getFullYear()} Exponential World. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
