import React, { Component } from "react";
import { ContentSection } from '../../General/ContentSections/ContentSection';
import Divider from '../../General/DividerLine/DividerLine';


export default class Skillset extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column column-4">
                        <ContentSection headingColor='blue' heading='Languages & Frameworks'
                            body='Swift, Javascript, Objective-C, HTML/CSS, React, Angular 2, @ngrx/store, Redux'
                        />
                    </div>
                    <div className="column column-4">
                        <ContentSection headingColor='orange' heading='Toolsets'
                            body='Xcode, Visual Studio Code, Atom, Git, Bitbucket, Github'
                        />
                    </div>
                    <div className="column column-4">
                        <ContentSection headingColor='gray' heading='Other Skills'
                            body='Scrum Master, Agile, Communication, Leadership'
                        />
                    </div>
                </div>
                <Divider/>
            </div>

        );
    }
}