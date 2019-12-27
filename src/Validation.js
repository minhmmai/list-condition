import React, { Component } from 'react';

class Validation extends Component {
    render() {
        return (
            <div>
                <p>Youe entered the following text:</p>
                <p>{this.props.enteredText}</p>
            </div>
        )
    }
}

export default Validation;