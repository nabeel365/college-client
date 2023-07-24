import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/colleges" className="text-white">
            Colleges
          </Link>
          <Link to="/admission" className="text-white">
            Admission
          </Link>
          <Link to="/mycollege" className="text-white">
            My College
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <button onClick={toggleMobileMenu} className="text-white text-xl flex items-center">
              <span className="mr-1">&times;</span> {/* Close (X) button */}
            </button>
          ) : (
            <button onClick={toggleMobileMenu} className="text-white text-xl flex items-center">
              &#9776; {/* Hamburger button */}
            </button>
          )}
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 right-0 left-0 bg-blue-500 p-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-white" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/colleges" className="text-white" onClick={closeMobileMenu}>
                Colleges
              </Link>
              <Link to="/admission" className="text-white" onClick={closeMobileMenu}>
                Admission
              </Link>
              <Link to="/mycollege" className="text-white" onClick={closeMobileMenu}>
                My College
              </Link>
              {/* You can replace the "#" with the actual login page route */}
              <Link to="/login" className="text-white" onClick={closeMobileMenu}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
