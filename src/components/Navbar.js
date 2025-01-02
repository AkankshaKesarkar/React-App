import React, { useState } from "react"; // For React and state management
import styled from "styled-components"; // For styling
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const NavbarContainer = styled.nav`
  padding: 32px;

  .header {
    display: flex;
    width: Fixed (1, 280px) px;
    height: 40px;
    padding: 0px 32px 0px 32px;
    gap: 0px;
    justify-content: space-between;
    opacity: 0px;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
  /* Logo styles */
  .logo {
    display: flex;
    height:40px;
    width: 200px;
    margin-top: 1.5rem;
  }

  .logo p {
    margin: 0;
    padding: 5px;
  }

  .avatar img {
    width: 40 px;
    height: 40px;
    gap: 0px;
    border-radius: 200px;
    opacity: 0px;
  }

  /* Desktop navigation links */
  .nav-links {
    display: flex;
    list-style: none;
    gap: 20px;

    li {
      cursor: pointer;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Hamburger icon */
  .hamburger {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  /* Mobile menu (hidden by default) */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateX(0);
    }

    li {
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track mobile menu

  return (
    <NavbarContainer>
      {/* Logo */}
      <div className="header">
        <div className="container content">
          <div className="logo">
            <img src="/images/logo.png" alt="Untilted UI"></img>
          </div>

          {/* Desktop Navigation Links */}
          <div>
          <ul className="nav-links font-black">
            <li>Home</li>
            <li>Products</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          </div>
          <div
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Mobile Menu */}
          <ul className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
            <li onClick={() => setMobileMenuOpen(false)}>Home</li>
            <li onClick={() => setMobileMenuOpen(false)}>Products</li>
            <li onClick={() => setMobileMenuOpen(false)}>Resources</li>
            <li onClick={() => setMobileMenuOpen(false)}>Pricing</li>
          </ul>
        </div>
        <div class="avatar">
          <img src="avatar.png" alt="avatar"></img>
        </div>
      </div>

      {/* Hamburger Icon (Mobile View) */}
    </NavbarContainer>
  );
};

export default Navbar;
