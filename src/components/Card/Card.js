import React, { Component } from "react";

import classes from "./Card.module.css";
import Counter from "../Counter/Counter";

import products from "../../db/products.json";

class Card extends Component {
  render() {
    return (
      <ul className={classes.ul}>
        {products.map((item) => {
          // console.table(item);
          return (
            <li key={item.id} className={classes.main}>
              <img className={classes.cardImage} src={item.img} alt="img" />
              <h3 className={classes.cardTitle}>{item.title}</h3>
              <p className={classes.cardDesc}>{item.desc}</p>
              <p className={classes.cardDesc}>
                price<span>{item.price}</span>
              </p>
              <Counter count={item.count} step={item.step} min={item.min} max={item.max} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Card;
