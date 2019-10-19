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
                <span className="last-online">{profile.lastOnline}</span>
                <span className="about-me">{profile.aboutMe}</span>
                <label className="favorite-games-label">Favorite Games</label>
                <span className="favorite-games">{profile.favoriteGames}</span>
                <label className="want-to-play-label">Want To Play</label>
                <span className="want-to-play">{profile.wantToPlay}</span>
                <Link to="/chat">
                    <button className="chat-button">Chat</button>
                </Link>
            </div>
        );
    }
}