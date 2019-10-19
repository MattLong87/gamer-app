import React from 'react';
import {Link} from "react-router-dom";
import '../css/profilePage.css';

export default class ProfilePage extends React.Component {
    render() {
        let profile = this.props.location.state.profile;

        return (
            <div className="profilePage" style={{backgroundImage: 'url(' + profile.photo + ')'}}>
                <Link to="/">
                    <button className="back">Back</button>
                </Link>
                <span className="name">{profile.name}</span>
                <span className="distance">{profile.distance}</span>
                <span className="lastOnline">{profile.lastOnline}</span>
                <span className="aboutMe">{profile.aboutMe}</span>
                <span className="favoriteGames">{profile.favoriteGames}</span>
                <span className="wantToPlay">{profile.wantToPlay}</span>
                <Link to="/chat">
                    <button className="chat-button">Chat</button>
                </Link>
            </div>
        );
    }
}