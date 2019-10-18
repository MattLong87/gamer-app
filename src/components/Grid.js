import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Thumbnail from './Thumbnail';
import '../css/grid.css';

import {fetchData} from '../actions';

export class Grid extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {

    let thumbnails = [];

    this.props.profiles.forEach(profile => thumbnails.push(<Link to={{ pathname: "/profile", state: { profile: profile } }}><Thumbnail profile={profile} /></Link>));

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
const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Grid);