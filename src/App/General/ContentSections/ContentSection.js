import React, { Component } from "react";
import './ContentSection.scss';

function verifyColor(color) {
    switch (color) {
        case 'blue':
            return 'primary';
        case 'orange':
            return 'secondary';
        case 'gray':
            return 'tertiary';
        default:
            return '';
    }
}

export class ContentSection extends Component {
    render() {
        return (
            <div className="contentSection">
                <h2 className={verifyColor(this.props.headingColor)}>{this.props.heading}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export class ListedContentSection extends Component {
    render() {
        function createItem(item) {
            return (<li key={'listItem' + item.id} className={item.callout ? 'listCallout' : ''} value={item.id}>{item.name}</li>);
        }

        return (
            <div className="contentSection">
                <h2 className={verifyColor(this.props.headingColor)}>{this.props.heading}</h2>
                <ul>
                    {this.props.items.map(createItem.bind(this))}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export class ImageContentSection extends Component {
    render() {
        function createItem(item) {
            return (<div key={'imageItem' + item.id}>
                <h3 className={verifyColor(item.headingColor)}>{item.subHeading}</h3>
                <div className="row">
                    <div className="column column-2">
                        <img className={item.iOSIcon ? 'iOSIcon' : ''} src={item.imgRef} alt={item.imgAlt} />
                    </div>
                    <div className='column column-10'>
                        {item.primaryBody ? <p>{item.primaryBody}</p> : ''}
                        {item.secondaryBody ? <p>{item.secondaryBody}</p> : ''}
                        {item.tertiaryBody ? <p>{item.tertiaryBody}</p> : ''}
                    </div>
                </div>
            </div>);
        }

        return (
            <div className="contentSection">
                <h2 className={verifyColor(this.props.headingColor)}>{this.props.heading}</h2>
                {this.props.items.map(createItem.bind(this))}
                {this.props.children}
            </div>
        );
    }
}