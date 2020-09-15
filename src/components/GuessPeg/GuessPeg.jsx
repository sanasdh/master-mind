import React from 'react';

// const GuessPeg = (props) => (
//   <div>
//     {props.color}
//   </div>
// );

function GuessPeg(props) {
  let style = {
    backgroundColor: props.color,
    width: '20px',
    display: 'inline'
  }
  return (
  <div style={style}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  )
}

export default GuessPeg;
