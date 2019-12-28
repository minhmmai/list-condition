import React, { Component } from 'react';
import './Char.css';

class Char extends Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.char}
            </div>
        )
    }
}

export default Char;