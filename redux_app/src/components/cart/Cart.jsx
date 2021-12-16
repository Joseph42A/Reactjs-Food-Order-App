import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Cart() {
  const totalAmount = useSelector((state) => state.shop.totalAmount);
  const isRouteTouch = useSelector((s) => s.shop.isRouteTouch);
  const fixedTotalAmount = totalAmount.toFixed(2);
  const products = useSelector((state) => state.shop.items);
  // console.log(products);

  let increaseVariantAmount = isRouteTouch ? 0.4 : 2.3;
  let durationAnimationItem = 0.5;

  const cartVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: increaseVariantAmount,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cartVariant}
      className="cart"
    >
      <div className="cart-container">
        <div className="cart-item-container">
          {products && products.length > 0
            ? products.map((product) => {
                increaseVariantAmount =
                  increaseVariantAmount + durationAnimationItem;
                return (
                  <CartItem
                    name={product.name}
                    price={product.price}
                    desc={product.desc}
                    amount={product.amount}
                    key={product.id}
                    id={product.id}
                    variantAmount={increaseVariantAmount}
                    durationAnimationItem={durationAnimationItem}
                  />
                );
              })
            : `${"No Items"}`}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cartVariant}
          className="cart"
          className="footer-container"
        >
          <div className="total">
            <h2>Total</h2>
            <h3>{fixedTotalAmount}$</h3>
          </div>

          <div className="actions">
            <button>CLOSE</button>
            <button>ORDER</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
