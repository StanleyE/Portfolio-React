import React, { Component } from 'react';

class VideoHeader extends Component {
    render() {
        return (
            <div className= "videoheader">
                <video muted autoplay>
                    <source src="./demo/Skiing.mp4" type = 'video/mp4'></source>
                </video>
                <h1>Can I get a connection?</h1>
            </div>
        );
    }
}

export default VideoHeader;