import React from 'react';
import '../css/thumbnail.css';

export default class Thumbnail extends React.Component {
    render() {
        return (
            <div className="thumbnail" style={{backgroundImage: 'url(/img/' + this.props.profile.photo + ')'}}>
                <h1>{this.props.profile.name}</h1>
                <span>{this.props.profile.distance}</span>
                <span>{this.props.profile.lastOnline}</span>
            </div>
        );
    }
}