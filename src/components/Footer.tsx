import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

type FooterProps = {
    footer: {
        text: string;
        copyright: string;
    };
};

function Footer({ footer }: FooterProps) {
    return (
        <footer>
            <div>
                <a href="https://github.com/alizeiynali" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/ali-zeiynali/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
            <p>{footer.text} <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Ali Zeiynali</a> 💜</p>
            <p className="copyright">© {new Date().getFullYear()} {footer.copyright}</p>
        </footer>
    );
}

export default Footer;
