import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

let style = {
  border:'1px solid',
  backgroundColor:'red'
}

function GameBoard(props) {
  return(
    <div>
    {props.guesses.map((guess, idx) =>
      <GuessRow
        guess={guess}
        colors={props.colors}
        key={idx}
        rowIdx={idx}
        currentGuess={idx === (props.guesses.length - 1)}
      />
    )}
  </div>
  )
}

// const GameBoard = (props) => (
//   <div style={style}>
//     <GuessRow />
//     <GuessRow />
//   </div>
// );

export default GameBoard;
