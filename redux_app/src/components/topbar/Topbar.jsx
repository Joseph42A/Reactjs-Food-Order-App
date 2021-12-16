import "./Topbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { shopAction } from "../../store";

const list = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 1,
      delay: 1,
    },
  },
};
const listItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,

    opacity: 1,
  },
};

export default function Topbar() {
  const dispatch = useDispatch();
  const onClickRouteHandler = () => {
    dispatch(shopAction.routeTouchHandler());
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="topbar"
    >
      <motion.ul>
        <motion.li
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            duration: 0.3,
          }}
          variants={listItemVariant}
        >
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#0CCDE8" : "" })}
            to="/home"
            onClick={onClickRouteHandler}
          >
            STORE
          </NavLink>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.3,
            duration: 0.3,
          }}
          variants={listItemVariant}
        >
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#0CCDE8" : "" })}
            to="/addmeals"
          >
            ADDFOOD
          </NavLink>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={listItemVariant}
          transition={{
            delay: 1.6,
            duration: 0.3,
          }}
        >
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#0CCDE8" : "" })}
            to="/orders"
          >
            ORDERS
          </NavLink>
        </motion.li>
      </motion.ul>
      <NavLink to="/">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 620 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.8,
          }}
          className="logo"
        >
          <img src={logo} alt="" />
        </motion.div>
      </NavLink>
    </motion.div>
  );
}
