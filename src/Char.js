import React, { Component } from 'react';
import './Char.css';

class Char extends Component {
    render() {
        return (
            <div className="char">
                {this.props.char}
            </div>
        )
    }
}

export default Char;