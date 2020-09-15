import React from "react"
import GuessPegs from "../GuessPegs/GuessPegs"
import GuessScore from "../GuessScore/GuessScore"
function GuessRow(props) {
  return (
    <div className='component GuessRow'> GuessRow #
      <GuessPegs></GuessPegs>
      <GuessScore></GuessScore>
    </div>
  )
}
export default GuessRow;