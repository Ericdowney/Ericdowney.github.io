import React from "react";
import "./Footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    ®2018 Eric Downey.
                </div>
                <ul className="contact-links">
                    <FooterLink url="https://github.com/ericdowney" title="Github" />
                    <FooterLink url="http://linkedin.com/in/ericdowney271/" title="LinkedIn" />
                </ul>
            </div>
        );
    }
}

function FooterLink(props) {
    return (
        <li className="FooterLink">
            <a target={props.target} href={props.url}>
                {props.title}
            </a>
        </li>
    );
}
