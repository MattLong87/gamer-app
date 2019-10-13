import React from 'react';
import {Link} from "react-router-dom";
import '../css/chat.css';

export default class Chat extends React.Component {
    render() {

        return (
            <div className="chat">
                <Link to="/">
                    <button className="back">Back</button>
                </Link>
                <span>Chat</span>
            </div>
        );
    }
}