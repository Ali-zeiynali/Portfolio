import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../assets/styles/Contact.scss';

type ContactProps = {
    contact: {
        title: string;
        subtitle: string;
        email: string;
    };
};

function Contact({ contact }: ContactProps) {
    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper modern-contact-card">
                    <h1>{contact.title}</h1>
                    <p>{contact.subtitle}</p>
                    <a className="email-box" href={`mailto:${contact.email}`}>
                        <EmailOutlinedIcon />
                        <span>{contact.email}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
