import React from "react";

import Classes from "../Styles/Footer.module.css";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91 9918332550</p>
          <p>devrel@initializ.ai</p>
          <a href="https://www.facebook.com/profile.php?id=61556962362662">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/initializ">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/initializ">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Info_i_blue.svg/128px-Info_i_blue.svg.png?20141208004823" alt="" />
            <p>
              Initz <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
