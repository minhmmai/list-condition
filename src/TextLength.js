import { Component } from "react";
import React from 'react';


class TextLength extends Component {
    render() {
        return(
            <div>
                <p>The length of the entered text is: {this.props.value}</p>
            </div>
        )
    }
}

export default TextLength;