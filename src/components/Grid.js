import React from 'react';
import {Link} from "react-router-dom";
import Thumbnail from './Thumbnail';

export default class Grid extends React.Component {

  render() {
    
    let thumbnails = [];
    
    this.props.profiles.forEach(profile => thumbnails.push(<Link to={{pathname: "/profile", state: {profile: profile}}}><Thumbnail profile={profile} /></Link>));

    return (
      <div className="grid">
          {thumbnails}
      </div>
    );
  }
}