import { Link } from "react-router-dom";
import { BiCodeAlt } from "react-icons/BI";

import Logo from "./Logo";

const DEMP_LINKS = [
  "About us",
  "Download apps",
  "Become a guide",
  "Careers",
  "Contact",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <p className="footer__copyright">
        <BiCodeAlt className="w-4 h-4 " />
        <span>{new Date().getFullYear()}</span> by
        <a
          target="_blank"
          rel="noreferrer"
          className="author"
          href="https://www.linkedin.com/in/ahmed-ayman-723605229/"
        >
          Ahmed Ayman
        </a>
      </p>

      <ul className="footer__nav">
        {DEMP_LINKS.map((link, ind) => (
          <li key={ind}>
            <Link>{link}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
