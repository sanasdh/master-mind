import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';
// styling was added

const GuessPegs = (props) => (
  <div className='GuessPegs'>
    <GuessPeg currentGuess={props.currentGuess} color={props.colors[props.code[0]]} />
    <GuessPeg currentGuess={props.currentGuess} color={props.colors[props.code[1]]} />
    <GuessPeg currentGuess={props.currentGuess} color={props.colors[props.code[2]]} />
    <GuessPeg currentGuess={props.currentGuess} color={props.colors[props.code[3]]} />
  </div>
);

export default GuessPegs;
