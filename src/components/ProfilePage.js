import React from 'react';
import {Link} from "react-router-dom";
import '../css/profilePage.css';

export default class ProfilePage extends React.Component {
    render() {
        let profile = this.props.location.state.profile;

        return (
            // gradient below looks crazy because it's an eased gradient. details: https://larsenwork.com/easing-gradients/
            <div className="profilePage" style={{backgroundImage: 'linear-gradient(to top,hsla(0, 0%, 0%, 0.75) 0%,hsla(0, 0%, 0%, 0.61) 7.2%,hsla(0, 0%, 0%, 0.488) 12.6%,hsla(0, 0%, 0%, 0.384) 16.5%,hsla(0, 0%, 0%, 0.296) 19.5%,hsla(0, 0%, 0%, 0.222) 21.9%,hsla(0, 0%, 0%, 0.162) 24.1%,hsla(0, 0%, 0%, 0.114) 26.5%,hsla(0, 0%, 0%, 0.076) 29.5%,hsla(0, 0%, 0%, 0.048) 33.4%,hsla(0, 0%, 0%, 0.028) 38.7%,hsla(0, 0%, 0%, 0.014) 45.9%,hsla(0, 0%, 0%, 0.006) 55.1%,hsla(0, 0%, 0%, 0.002) 67%,hsla(0, 0%, 0%, 0) 81.8%,hsla(0, 0%, 0%, 0) 100%), url(' + profile.photo + ')'}}>
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
                <Link className="chat-link" to="/chat">
                    <button className="chat-button">Chat</button>
                </Link>
            </div>
        );
    }
}