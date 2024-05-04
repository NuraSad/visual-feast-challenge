import React from "react";
import styles from "./Footer.module.css";

import GithubLogo from "./logo/github-mark.png";
import LinkedInLogo from "./logo/linkedin.png";
import MailLogo from "./logo/mail.png";

const Footer = () => {
  return (
    <footer>
      <p>Ainur Saduova &#169;</p>
      <a href="mailto:ainur.saduova10@gmail.com">
        <img src={MailLogo} alt="Mail Logo" className={styles.mailLogo} />
      </a>
      <a
        href="https://github.com/NuraSad/sorting-visualizer"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GithubLogo} alt="GitHub Logo" className={styles.githubLogo} />
      </a>
      <a
        href="https://www.linkedin.com/in/ainursaduova"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
      </a>
    </footer>
  );
};

export default Footer;
