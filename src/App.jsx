import { useState } from "react";

import menuIcon from "./assets/images/icon-hamburger.svg";
import logo from "./assets/images/logo.svg";
import interactiveVR from "./assets/images/mobile/image-interactive.jpg";
import deepEarth from "./assets/images/mobile/image-deep-earth.jpg";
import nightArcade from "./assets/images/mobile/image-night-arcade.jpg";
import soccerTeam from "./assets/images/mobile/image-soccer-team.jpg";
import grid from "./assets/images/mobile/image-grid.jpg";
import fromAbove from "./assets/images/mobile/image-from-above.jpg";
import pocketBorealis from "./assets/images/mobile/image-pocket-borealis.jpg";
import curiosity from "./assets/images/mobile/image-curiosity.jpg";
import fisheye from "./assets/images/mobile/image-fisheye.jpg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import closeIcon from "./assets/images/icon-close.svg";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="relative flex flex-col justify-between w-full text-white p-4  md:px-12 bg-[url('./assets/images/mobile/image-hero.jpg')] md:bg-[url('./assets/images/desktop/image-hero.jpg')] bg-center bg-cover h-screen text-center">
        <nav className="flex justify-between items-center py-8 px-2">
          <img className="h-8" src={logo} alt="Loopstudios Logo" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:justify-between md:items-center md:gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
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
                <li className="">
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    Carrers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-josefin-sans font-light text-white text-2xl leading-6 uppercase "
                  >
                    support
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        {/* Hero Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-[90%] border-2 p-4 md:w-[80%] md:p-12 md:left-0 md:translate-x-0 lg:w-[60%] mx-12">
          <h1 className="font-josefin uppercase text-5xl leading-10 p-4 text-left md:text-7xl xl:text-8xl md:leading-[1.2] md:p-0">
            Immersive experiences that deliver
          </h1>
        </div>
      </header>
      <main className="container flex flex-col justify-center items-center p-6 gap-8 mt-12">
        <section className="interactive-vr relative">
          <img src={interactiveVR} alt="man wearing VR" />
          <article>
            <h2>The leader in interactive VR</h2>
            <p className="text-[15px] leading-6  text-center font-alata font-normal text-black opacity-50 px-8">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </article>
        </section>
        <section className="image-grid-container">
          <h2>Our creations</h2>
          <button className="btn order-last m-auto "> See all </button>
          <div className="cards-container">
            <div className="card">
              <img className="" src={deepEarth} alt="half globe image" />
              <h3> Deep earth </h3>
            </div>
            <div className="card">
              <img className="" src={nightArcade} alt="light image" />
              <h3>Night arcade </h3>
            </div>
            <div className="card">
              <img className="" src={soccerTeam} alt="soccer player image" />
              <h3>Soccer team VR </h3>
            </div>
            <div className="card">
              <img className="" src={grid} alt="car wheel image" />
              <h3>The grid </h3>
            </div>
            <div className="card">
              <img className="" src={fromAbove} alt="from above VR image" />
              <h3>From up above VR </h3>
            </div>
            <div className="card">
              <img className="" src={pocketBorealis} alt="" />
              <h3>Pocket borealis </h3>
            </div>
            <div className="card">
              <img className="" src={curiosity} alt="" />
              <h3>The curiosity </h3>
            </div>
            <div className="card">
              <img className="" src={fisheye} alt="" />
              <h3>Make it fisheye</h3>
            </div>
          </div>
        </section>
      </main>
      <footer className="">
        <div>
          <img className="" src={logo} alt="Logo" />
          <ul className="">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="social-icons mt-6 mb-4">
            <a href="#" aria-label="Facebook">
              <img className="" src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img className="" src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img className="" src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className="" src={instagramIcon} alt="Instagram" />
            </a>
          </div>
          <p> © 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
