import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';
// styling was added

const GuessPegs = (props) => (
  <div className='GuessPegs'>
    <GuessPeg currentGuess={props.currentGuess}
      color={props.colors[props.code[0]]}
      handlePegColor={() => props.handlePegColor(0)}
    />
    <GuessPeg currentGuess={props.currentGuess}
      color={props.colors[props.code[1]]}
      handlePegColor={() => props.handlePegColor(1)}
    />
    <GuessPeg currentGuess={props.currentGuess}
      color={props.colors[props.code[2]]}
      handlePegColor={() => props.handlePegColor(2)}
    />
    <GuessPeg currentGuess={props.currentGuess}
      color={props.colors[props.code[3]]}
      handlePegColor={() => props.handlePegColor(3)}
    />
  </div>
);

export default GuessPegs;
