import React, { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={30} />
        </a>

        {/* Hamburger (Mobile only) */}
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={() => setNavOpen(!navOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Nav links (Desktop) */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-16">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SignIn (Desktop) */}
        <div className="hidden lg:block font-montserrat">
          <a href="/#subscribe">SignIn/Explore</a>
        </div>
      </nav>

      {/* Nav links (Mobile, expandable) */}
      {navOpen && (
        <ul className="flex flex-col items-start gap-4 mt-4 px-4 lg:hidden animate-fade-in z-50">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full">
              <a
                href={link.href}
                className="block w-full font-montserrat text-base text-slate-gray py-2 border-b border-gray-200"
                onClick={() => setNavOpen(false)} // optional: close on click
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="w-full mt-2">
            <a
              href="/#subscribe"
              className="block font-montserrat text-base text-blue-600 py-2"
              onClick={() => setNavOpen(false)}
            >
              SignIn/Explore
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
