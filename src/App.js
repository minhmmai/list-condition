import React, { Component } from 'react';
import TextLength from './TextLength';
import './App.css';

class App extends Component {
  state = {
    textLength: 0
  };

  textLengthHndl = event => {
    const text = event.target.value;
    this.setState({
      textLength: text.length
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React practice</h1>
        <label>Enter text below</label><br/>
        <input type='text' onChange={this.textLengthHndl} />
        <TextLength value={this.state.textLength}/>
      </div>
    );
  }
}

export default App;
