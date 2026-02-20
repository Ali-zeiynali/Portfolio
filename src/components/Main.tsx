import React from "react";
import avater from "../assets/images/me.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

type MainProps = {
  hero: {
    name: string;
    title: string;
    intro: string;
  };
  language: string;
};

function Main({ hero, language }: MainProps) {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avater} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ali-zeiynali" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/azeiynali/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>{hero.name}</h1>
          <p>{hero.title}</p>
          <p className={`hero-intro ${language === "fa" ? "hero-intro-fa" : ""}`}>{hero.intro}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ali-zeiynali" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/azeiynali/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
