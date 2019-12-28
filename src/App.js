import React, { Component } from 'react';
import Validation from './Validation';
import Char from './Char';
import './App.css';

class App extends Component {
  state = {
    text: ''
  };

  charComponents = null;

  textChangeHndl = event => {
    this.setState({
      text: event.target.value
    });
    this.renderChars(event.target.value);
  };
  
  renderChars = (text) => {
    const arr = text.split('');
    this.charComponents = (
      <div className='chars'>
        {arr.map((element, index) => {
          return <Char key={index} id={index} char={element} />
        })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>React practice</h1>
        <label>Enter text below</label><br />
        <input type='text' onChange={this.textChangeHndl} />
        <p>The length of the entered text is: {this.state.text.length}</p>
        <Validation value={this.state.text} />
        {this.charComponents}
      </div>
    );
  }
}

export default App;
