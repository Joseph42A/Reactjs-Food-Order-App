import Topbar from "./components/topbar/Topbar";

import Home from "./components/pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import AddMeals from "./components/addMeals/AddMeals";
import Meal from "./components/addMeals/Meal";
import Orders from "./components/orders/Orders";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/notifications/Notification";

import { fetchCartData, sendCartData } from "./store/cart-action";

import { motion } from "framer-motion";

let isInitial = true;

function App() {
  // Side effect on redux
  const cart = useSelector((s) => s.shop);

  const notification = useSelector((s) => s.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.isTouch) {
      // thunk
      dispatch(sendCartData(cart));
    }

    // sendCartData();
  }, [cart, dispatch]);

  return (
    <div style={{ width: "98%", margin: "auto", maxWidth: "80rem" }}>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Topbar />
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addmeals/*" element={<AddMeals />}>
          <Route path="meal" element={<Meal />} />
        </Route>
        <Route path="/orders" element={<Orders />} />
      </Routes>

      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        style={{
          position: "absolute",
          bottom: "120px",
          right: "50%",
        }}
      >
        Designed & Developed by{" "}
        <span
          style={{
            textTransform: "uppercase",
            color: "blue",
            fontWeight: "bolder",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://joseph4lu2cy.netlify.app/"
            target="_blank"
          >
            {" "}
            Joseph
          </a>
        </span>
      </motion.footer>
    </div>
  );
}

export default App;
