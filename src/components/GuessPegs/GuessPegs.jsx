import React from "react";
import GuessPeg from "../GuessPeg/GuessPeg"

function GuessPegs(props) {
  return (
    <div className='component GuessPegs'>Guess Pegs
      <GuessPeg></GuessPeg>
      <GuessPeg></GuessPeg>
      <GuessPeg></GuessPeg>
      <GuessPeg></GuessPeg>

    </div>
  )
}

export default GuessPegs;