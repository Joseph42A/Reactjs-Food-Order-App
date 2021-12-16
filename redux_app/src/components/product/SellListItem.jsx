import { useState } from "react";
import "./SellListItem.css";

import { motion } from "framer-motion";

export default function SellListItem(props) {
  let [amount, setAmount] = useState(0);

  const addCartHandler = () => {
    // console.log(props.product);
    if (+amount > 0) {
      amount = amount * 1;
      const itemToAdd = { ...props.product, amount };
      props.onAddToCart(itemToAdd);
    } else {
      console.log("Please enter an amount > 0");
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        delay: props.animationAmount,
        duration: 0.5,
      }}
      variants={props.itemVariant}
      className="sellList-item"
    >
      <div className="left-item">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h5>{props.price}$</h5>
      </div>
      <div className="right-item">
        <div className="lbl">
          <label htmlFor="quantity">Amount</label>
        </div>
        <div className="input-control">
          <input
            type="number"
            min="0"
            max="10"
            step="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={addCartHandler}>ADD</button>
        </div>
      </div>
    </motion.div>
  );
}
