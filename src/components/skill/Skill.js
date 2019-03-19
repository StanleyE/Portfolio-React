import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div className = "superPower">
                <h4>Skill: {this.props.skill}</h4>
                <h5>Exp: {this.props.time}</h5>
            </div>
        );
    }
}

export default Skill;