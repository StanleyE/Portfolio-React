import React, { Component } from 'react';
import Skill from './Skill';

class Skills extends Component {
    render() {
        let superPowers = [];
        for (let s = 0; s < this.props.skills.length; s++) {
            let power = this.props.skills[s];
            superPowers.push( < Skill skill={power.skill} time={power.time} /> );
            
        }
        return (
            <div className="skillsMain">
                <h3>Skill bar with animated slide that brings each skill to view, when hovered over skill flips and displays months of experience/more details</h3>
                <div className = "powers">
                    {superPowers}
                </div>
            </div>
        );
    }
}

export default Skills;
