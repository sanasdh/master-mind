import React from "react";
import GuessRow from "../GuessRow/GuessRow"

const GameBoard = (props) => (
  <div className='component Borad'>
    Game Borad
    <GuessRow> Guess Row number</GuessRow>
    <GuessRow> Guess Row number</GuessRow>
  </div>
)


export default GameBoard;