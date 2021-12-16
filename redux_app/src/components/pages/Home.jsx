import React from "react";
import SelList from "../product/SelList";
import Cart from "../cart/Cart";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", marginTop: "3rem" }}>
        <SelList />
        <Cart />
      </div>
    </React.Fragment>
  );
}
