import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

export default function Footer() {
  const links = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <footer>
      <div>
        <img src={logo} alt="Loopstudios Logo" className="mx-auto md:mx-0" />
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
        </nav>
      </div>

      <div>
      <nav aria-label="Social media">
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
        </nav>
      </div>{" "}
    </footer>
  );
}
