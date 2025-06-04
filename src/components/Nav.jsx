import React from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={30} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" height={25} width={25} />
        </div>
        <div className="max-lg:hidden font-montserrat">
          <a href="/#subscribe">SignIn/Explore</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
