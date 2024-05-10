import React from "react";
import styles from "./Footer.module.css";

import GithubLogo from "./logo/github-mark.png";
import LinkedInLogo from "./logo/linkedin.png";
import WebsiteLogo from "./logo/global-network.png";

const Footer = () => {
  return (
    <footer>
      <span>Ainur Saduova &#169;</span>
      <a
        href="https://www.ainursaduova.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Ainur's portfolio website"
      >
        <img
          src={WebsiteLogo}
          alt="Website Logo"
          className={styles.githubLogo}
        />
      </a>
      <a
        href="https://github.com/NuraSad"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Ainur's github profile"
      >
        <img src={GithubLogo} alt="GitHub Logo" className={styles.githubLogo} />
      </a>
      <a
        href="https://www.linkedin.com/in/ainursaduova"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Ainur's linkedin profile"
      >
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
      </a>
    </footer>
  );
};

export default Footer;
