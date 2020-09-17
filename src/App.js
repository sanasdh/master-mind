import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor(props) {
    // super must be called before accessing 'this'
    super(props);
    // state is an object that holds information
    // in its properties
    this.state = this.initializing();
    this.handleColorSelection = this.handleColorSelection.bind(this)
    this.handleInitializing = this.handleInitializing.bind(this)
  }
  initializing() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode()
    }
  }

  handleInitializing = () => {
    this.setState(this.initializing())
  }
  getNewGuess() {
    return {
      code: [null, null, null, null],
      // code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  // handleColorSelection(colorIdx) {
  //   alert('color selected!');
  // }
  // handleColorSelection(colorIdx) {
  //   alert(`color index ${colorIdx} selected!`);
  // }
  handleColorSelection(colorIdx) {
    // alert(`color index ${colorIdx} selected!`);
    this.setState({ selColorIdx: colorIdx });
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <div className="flex-h align-flex-end">
          <GameBoard
            colors={colors}
            guesses={this.state.guesses}
          />
          <div className='App-controls'>
            <ColorPicker
              colors={colors}
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
            />
            <GameTimer />
            <NewGameButton initializing={this.handleInitializing} />
          </div>
        </div>
        <footer className='App-header-footer'>
          {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
  }
}

export default App;
