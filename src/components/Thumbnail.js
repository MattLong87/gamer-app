import React from 'react';
import '../css/thumbnail.css';

export default class Thumbnail extends React.Component {
    render() {
        return (
            // gradient below looks crazy because it's an eased gradient. details: https://larsenwork.com/easing-gradients/
            <div className="thumbnail" style={{backgroundImage: 'linear-gradient(to top,hsla(0, 0%, 0%, 0.75) 0%,hsla(0, 0%, 0%, 0.61) 7.2%,hsla(0, 0%, 0%, 0.488) 12.6%,hsla(0, 0%, 0%, 0.384) 16.5%,hsla(0, 0%, 0%, 0.296) 19.5%,hsla(0, 0%, 0%, 0.222) 21.9%,hsla(0, 0%, 0%, 0.162) 24.1%,hsla(0, 0%, 0%, 0.114) 26.5%,hsla(0, 0%, 0%, 0.076) 29.5%,hsla(0, 0%, 0%, 0.048) 33.4%,hsla(0, 0%, 0%, 0.028) 38.7%,hsla(0, 0%, 0%, 0.014) 45.9%,hsla(0, 0%, 0%, 0.006) 55.1%,hsla(0, 0%, 0%, 0.002) 67%,hsla(0, 0%, 0%, 0) 81.8%,hsla(0, 0%, 0%, 0) 100%), url(' + this.props.profile.photo + ')'}}>
                <h1 className="name">{this.props.profile.name}</h1>
                <span className="distance">{this.props.profile.distance}</span>
                {/*<span>{this.props.profile.lastOnline}</span> */}
            </div>
        );
    }
}