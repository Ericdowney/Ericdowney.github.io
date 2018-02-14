import React, { Component } from "react";
import './Introduction.scss';
import Divider from '../../General/DividerLine/DividerLine';
import Navigation from '../Navigation/Navigation';
import GithubIcon from '../../Graphics/navigation/navIcon_github.svg';
import LinkedInIcon from '../../Graphics/navigation/navIcon_linkedIn.png';

export default class Introduction extends Component {
    render() {
        return (
            <div className='introduction'>
                <div className='headingWrapper'>
                    <h2 className='tertiary'>Eric Downey</h2>
                    <Navigation
                        links={[{ id: 1, url: 'https://github.com/ericdowney', imageRef: GithubIcon, alt: "Eric Downey's Github Page" },
                        { id: 2, url: 'http://linkedin.com/in/ericdowney271/', imageRef: LinkedInIcon, alt: "Eric Downey's LinkedIn Page" },
                        ]}
                    />
                </div>
                <h1>iOS Evangelist</h1>
                <Divider />
                <p>I am an experienced iOS developer for the past 7 years, specializing in Swift. Additionally, I am skilled in Javascript, Java, Ruby, and Python for 9 years.
                As the coordinator for ICC’s Tech Sig and as ICC’s Mobile Practice Lead, I constantly apprise myself on the latest in the information technology field. When
                clients are stalled in a project, I provide innovative solutions using Swift. As a senior iOS developer and as a certified Scrum Master, I apply Agile
                methodologies to keep projects running smoothly. I am looking to broaden my professional network with LinkedIn.
                </p>
                <Divider />
            </div>
        );
    }
}