import React from 'react';
import styles from "./ScoreButton.module.css";
const ScoreButton = (props) => (
  <button className={`${styles.button} btn btn-default`} disabled={props.disabled}>
    ✔
  </button>
);

export default ScoreButton;
