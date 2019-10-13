import React from 'react';
import '../css/thumbnail.css';

export default class Thumbnail extends React.Component {
    render() {
        return (
            <div className="thumbnail">
                <h1>{this.props.name}</h1>
                <span>{this.props.distance}</span>
                <span>{this.props.lastOnline}</span>
            </div>
        );
    }
}