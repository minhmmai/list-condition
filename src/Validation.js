import React, { Component } from 'react';

class Validation extends Component {
    render() {
        const text = this.props.value;
        const textLength = text.length;

        let lengthMsg = '';
        if (textLength >= 5) {
            lengthMsg = 'The text is long enough';
        } else if (textLength < 5 && textLength > 0) {
            lengthMsg = 'The text is too short';
        }
        return (
            <div>
                <p>{lengthMsg}</p>
            </div>
        )
    }
}

export default Validation;