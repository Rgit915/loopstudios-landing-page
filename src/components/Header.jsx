import { useState } from "react";
import menuIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";
import Hero from "./Hero";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const links = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <header className="relative flex flex-col justify-between w-full text-white p-4 bg-[url('./assets/images/mobile/image-hero.jpg')] bg-center bg-cover bg-no-repeat h-screen text-center md:bg-[url('./assets/images/desktop/image-hero.jpg')] md:px-12 md:items-start">
      <nav className="w-full flex justify-between items-center py-8 px-2">
        <img src={logo} alt="Loopstudios Logo" />
        <ul className="hidden md:flex md:justify-between md:items-center md:gap-4">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <img
          className="menu md:hidden"
          src={menuIcon}
          alt="Menu Icon"
          onClick={toggleMenu}
        />

        {/* Mobile Navigation */}
        {showMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col p-6">
            {/* Logo & Close Icon in Mobile Menu */}
            <div className="flex justify-between items-center w-full py-8 px-2">
              <img className="h-8" src={logo} alt="Loopstudios Logo" />
              <img
                className="h-6 cursor-pointer"
                src={closeIcon}
                alt="Close Icon"
                onClick={toggleMenu}
              />
            </div>

            {/* Mobile Navigation Links */}
            <ul className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-6 mt-16 text-left">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <Hero />
    </header>
  );
}
