import React from 'react';
import {Link} from "react-router-dom";
import '../css/profilePage.css';

export default class ProfilePage extends React.Component {
    render() {
        let profile = this.props.location.state.profile;

        return (
            <div className="profilePage" style={{backgroundImage: 'url(/img/' + profile.photo + ')'}}>
                <Link to="/">
                    <button className="back">Back</button>
                </Link>
                <span className="name">{profile.name}</span>
                <span className="distance">{profile.distance}</span>
                <span className="lastOnline">{profile.lastOnline}</span>
            </div>
        );
    }
}