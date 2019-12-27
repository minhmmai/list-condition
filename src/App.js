import React, { Component } from 'react';
import TextLength from './TextLength';
import Validation from './Validation';
import './App.css';

class App extends Component {
  state = {
    text: ''
  };

  textChangeHndl = event => {
    const enteredText = event.target.value;
    this.setState({
      text: enteredText
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React practice</h1>
        <label>Enter text below</label><br/>
        <input type='text' onChange={this.textChangeHndl} />
        <p>The length of the entered text is: {this.state.text.length}</p>
        {this.state.text ? <Validation enteredText={this.state.text}/> : ''}
      </div>
    );
  }
}

export default App;
