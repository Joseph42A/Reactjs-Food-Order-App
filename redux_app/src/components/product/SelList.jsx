import "./SelList.css";
import SellListItem from "./SellListItem";
import { useSelector, useDispatch } from "react-redux";
import { shopAction } from "../../store";
import { motion } from "framer-motion";
const PRODUCT_DATA = [
  {
    id: "p4",
    name: "Pizza",
    desc: "Taste and go to the sky",
    price: 23.2,
  },
  {
    id: "p5",
    name: "Burger",
    desc: "Test and go to the sky",
    price: 12.3,
  },
  {
    id: "p6",
    name: "Kntaki",
    desc: "Test and go to the sky",
    price: 32.1,
  },
  {
    id: "p7",
    name: "Sushi",
    desc: "Test and go to the sky",
    price: 10,
  },
];

const containerVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export default function SelList() {
  const isRouteTouch = useSelector((s) => s.shop.isRouteTouch);
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    // add to redux
    dispatch(shopAction.addToCart(item));
  };

  let increaseAmountVariant = isRouteTouch ? 0.3 : 2.7;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        delay: increaseAmountVariant,
        duration: 0.3,
      }}
      variants={containerVariant}
      className="sellList"
    >
      <div className="sellList-container">
        {PRODUCT_DATA.map((product) => {
          increaseAmountVariant = increaseAmountVariant + 0.5;
          return (
            <SellListItem
              name={product.name}
              desc={product.desc}
              price={product.price}
              key={product.id}
              id={product.id}
              product={product}
              onAddToCart={addToCartHandler}
              itemVariant={containerVariant}
              animationAmount={increaseAmountVariant}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
