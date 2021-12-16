import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";
import { shopAction } from "../../store";

import { motion } from "framer-motion";
import { useEffect } from "react";

const itemVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CartItem(props) {
  // const items = useSelector((state) => state.shop.items);
  const isRouteTouch = useSelector((s) => s.shop.isRouteTouch);
  const isTouch = useSelector((state) => state.shop.isTouch);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(shopAction.increaseAmount(props.id));
  };
  const decreaseHandler = () => {
    dispatch(shopAction.removeFromCart(props.id));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariant}
      transition={{
        delay: !isTouch ? props.variantAmount : 0,
        duration: !isTouch ? props.durationAnimationItem : 0.3,
      }}
      className="cart-item"
    >
      <div className="cart-left">
        <h5>{props.name}</h5>
        <div className="product-info">
          <h6>{props.price}$</h6>
          <p>{props.amount}X</p>
        </div>
      </div>
      <div className="cart-right">
        <div className="addbtn">
          <button onClick={increaseHandler}>+</button>
        </div>
        <div className="removeBtn">
          <button onClick={decreaseHandler}>-</button>
        </div>
      </div>
    </motion.div>
  );
}
