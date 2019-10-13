import React from 'react';
import {Link} from "react-router-dom";
import Thumbnail from './Thumbnail';
import '../css/grid.css';

export default class Grid extends React.Component {

  render() {
    
    let thumbnails = [];
    
    this.props.profiles.forEach(profile => thumbnails.push(<Link to={{pathname: "/profile", state: {profile: profile}}}><Thumbnail profile={profile} /></Link>));

    return (
      <div className="grid">
          {thumbnails}
          <Link to="/editProfile" className="edit-profile-button">
            Edit Profile
          </Link>
      </div>
    );
  }
}