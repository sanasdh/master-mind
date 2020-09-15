import React, { Component } from 'react';
import './App.css';
import GameBoard from "./components/GameBoard/GameBoard";
import GameTimer from "./components/GameTimer/GameTimer"
import ColorPicker from "./components/ColorPicker/ColorPicker";
import NewGameButton from "./components/NewGameButton/NewGameButton"

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];


class App extends React.Component {
  constructor() {
    // JS requires that super be called before accessing 'this'
    super();
    // this.state is an object that holds "state" in its properties
    this.state = {
      selColorIdx: 0
    };
  }
  render() {
    return (
      <div className="App">
        {/* add this before the header */}
        Selected color: {this.state.selColorIdx}
        <GameBoard></GameBoard>
        <ColorPicker></ColorPicker>
        <GameTimer></GameTimer>
        <NewGameButton></NewGameButton>
        <footer class="component"> footer </footer>
      </div>
    );
  }
}


export default App;