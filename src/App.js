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
    const enteredText = event.target.value;
    this.renderChars(enteredText);
    this.setState({
      text: enteredText
    });
  };

  renderChars = (text) => {
    const arr = text.split('');
    this.charComponents = (
      <div className='chars'>
        <hr/>
        <h3>Click on the squares to delete characters</h3>(also delete characters from the input field) <br/>
        {arr.map((element, index) => {
          return <Char  id={index} key={index} char={element} clicked={this.removeChar} />
        })
        }
      </div>
    )
  }

  removeChar = event => {
    const charIndex = event.target.id;
    const charArr = this.state.text.split('');
    charArr.splice(charIndex, 1);
    const newText = charArr.join('');

    this.setState({
      text: newText
    });

    this.renderChars(newText);
  }

  render() {
    return (
      <div className="App">
        <h1>Render user input and handle events</h1>
        <label>Enter text below</label><br />
        <input type='text' onChange={this.textChangeHndl} value={this.state.text} />
        <p>Length of the entered text is: {this.state.text.length}</p>
        <Validation value={this.state.text} />
        {this.charComponents}
      </div>
    );
  }
}

export default App;
