import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

type ExpertiseProps = {
    expertise: {
        title: string;
        cards: {
            title: string;
            description: string;
            stackTitle: string;
        }[];
        chips: {
            first: string[];
            second: string[];
            third: string[];
        };
    };
};

function Expertise({ expertise }: ExpertiseProps) {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>{expertise.title}</h1>
                <div className="skills-grid">
                    <div className="skill glass-card">
                        <FontAwesomeIcon icon={faVuejs} size="3x" />
                        <h3>{expertise.cards[0].title}</h3>
                        <p>{expertise.cards[0].description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{expertise.cards[0].stackTitle}</span>
                            {expertise.chips.first.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill glass-card">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>{expertise.cards[1].title}</h3>
                        <p>{expertise.cards[1].description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{expertise.cards[1].stackTitle}</span>
                            {expertise.chips.second.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill glass-card">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>{expertise.cards[2].title}</h3>
                        <p>{expertise.cards[2].description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{expertise.cards[2].stackTitle}</span>
                            {expertise.chips.third.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
