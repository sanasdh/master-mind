import React from 'react';

const NewGameButton = (props) => (
  <button className='btn btn-default' onClick={() => props.initializing()}>
    New Game
  </button >
);

export default NewGameButton;
