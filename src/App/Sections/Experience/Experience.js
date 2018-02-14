import React, { Component } from "react";
import Divider from '../../General/DividerLine/DividerLine';
import { ListedContentSection } from '../../General/ContentSections/ContentSection';

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column column-4">
                        <ListedContentSection headingColor='blue' heading='Experience' 
                        items={[{ id: 1, name: 'Mobile Practice Lead', callout: true },
                            { id: 2, name: 'Formerly: Senior iOS Developer, IT Consultant' },
                            { id: 3, name: 'Information Control Company' },
                            { id: 4, name: 'June, 2013 - Present'},
                            { id: 5, name: 'Additional Responsibility: Tech SIG Coordinator' }
                            ]}
                        />
                    </div>
                    <div className="column column-4">
                        <ListedContentSection headingColor='orange' heading='Community'
                            items={[{ id: 1, name: 'Mobile App Development Curriculum Advisor', callout: true },
                            { id: 2, name: 'Columbus State Community College'},
                            { id: 3, name: 'December, 2017 - Present' }
                            ]}
                        />
                    </div>
                    <div className="column column-4">
                        <ListedContentSection headingColor='gray' heading='Education'
                            items={[{ id: 1, name: 'Capital University' },
                            { id: 2, name: 'Bachelor of Arts: Computer Science Major, Studio Art Minor', callout: true },
                            { id: 3, name: '2009 - 2013' }
                            ]}
                        />
                    </div>
                </div>
                <Divider />
            </div>
        );
    }
}