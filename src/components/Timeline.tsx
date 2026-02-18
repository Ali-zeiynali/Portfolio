import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

type TimelineProps = {
    timeline: {
        title: string;
        items: {
            date: string;
            role: string;
            location: string;
            description: string;
        }[];
    };
};

function Timeline({ timeline }: TimelineProps) {
    return (
        <div id="history">
            <div className="items-container">
                <h1>{timeline.title}</h1>
                <VerticalTimeline layout="2-columns">
                    {timeline.items.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date=""
                            iconStyle={{ background: '#7c68ff', color: '#ffffff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.role}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>{item.description}</p>
                            <div className="timeline-card-date">{item.date}</div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;
