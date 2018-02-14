import React, { Component } from "react";
import './Navigation.scss';

export default class Navigation extends Component {
    render() {
        function createNav(link) {
            return (<a key={link.id} href={link.url} target="_blank">
                <img src={link.imageRef} alt={link.imageAlt} className="buttonImage"/>
            </a>);
        }

        return (
            <div className="navMenu">
                {this.props.links.map(createNav.bind(this))}
                {this.props.children}
            </div>
        );
    }
}