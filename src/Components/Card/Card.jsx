import React, { useState } from "react";
import styles from "./Card.css";
import data from "../data/teams";

const Card = (props) => {
  return (
    <section className="container">
      <div className="headings">
        <h2>Name{props.cardName}</h2>
        <h2>Role{props.cardRole}</h2>
      </div>
      <div className="box">
        <h4>Counter{props.score}</h4>
        <h5>0</h5>
        <div className="buttons">
          <button onClick={() => props.handleClick(props.score - 1)}>-</button>
          <button onClick={() => props.handleClick(props.score + 1)}>+</button>
        </div>
      </div>
    </section>
  );
};
export default Card;
