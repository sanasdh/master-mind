import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    // super must be called before accessing 'this'
    super();
    // state is an object that holds information
    // in its properties
    this.state = this.initializing();
    this.handleColorSelection = this.handleColorSelection.bind(this)
    this.handleInitializing = this.handleInitializing.bind(this)
    // this.handleScore = this.handleScore.bind(this)
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
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }
  handlePegColor = (idx) => {
    let currentIdx = this.state.guesses.length - 1;
    let guessCopy = [...this.state.guesses]
    let currentGuess = { ...guessCopy[currentIdx] }
    let code = [...currentGuess.code]
    // console.log("currentIdx", currentIdx);
    // console.log(("guessCopy", guessCopy));
    // console.log("currentGuess", currentGuess);
    // console.log("code", code);
    code[idx] = this.state.selColorIdx;
    // console.log("code after", code);
    currentGuess.code = code;
    // console.log("currentGuessafter", currentGuess);
    guessCopy[currentIdx] = currentGuess;
    // console.log(("guessCopy after", guessCopy));
    this.setState({
      guesses: guessCopy,
    })
  }
  handleScore = () => {
    console.log("here");
    // e.preventDefault()
    let currentIdx = this.state.guesses.length - 1;
    let guessCopy = [...this.state.guesses];
    let currentGuess = { ...guessCopy[currentIdx] };
    let score = { ...currentGuess.score }
    console.log("currentIdx", currentIdx);
    console.log(("guessCopy", guessCopy));
    console.log("currentGuess", currentGuess);
    let winnerCode = this.state.code
    console.log("winnerCode", winnerCode);

    currentGuess.code.forEach(function (code, idx) {
      console.log("winnerCode[]", winnerCode[idx]);

      if (code == winnerCode[idx]) {
        score.perfect = score.perfect + 1
        console.log("here");
      } else if (code != winnerCode[idx] && winnerCode.includes(code)) {
        // working here
        let index = winnerCode.indexOf(code)
        score.almost++
      }

    })
    currentGuess.score = score
    console.log("score.perfect", score.perfect);
    guessCopy[currentIdx] = currentGuess;
    console.log(("guessCopy after", guessCopy));
    this.setState({
      guesses: guessCopy,
    })
  }
  genCode() {
    let x = new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
    console.log("x", x);
    return x
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
            handlePegColor={this.handlePegColor}
            handleScore={this.handleScore}
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
