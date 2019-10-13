import React from 'react';
import { Link } from "react-router-dom";
import '../css/editProfile.css';

export default class EditProfile extends React.Component {
    render() {

        return (
            <div className="edit-profile">
                <Link to="/">
                    <button className="back">Back</button>
                </Link>
                <div className="container">
                    <span>Edit Profile</span>
                    <input placeholder="Name" />
                </div>
            </div>
        );
    }
}