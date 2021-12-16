import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const initialState = {
  items: [],
  totalAmount: 0,
  isTouch: false,
  isRouteTouch: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      // check if this item is exist in our items

      state.isTouch = true;
      const itemIndexInItems = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingItem = state.items[itemIndexInItems];
      if (existingItem) {
        // update just the amount
        existingItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };

        state.items = [...state.items];
        state.items[itemIndexInItems] = existingItem;
      } else {
        // if item is a new one so just add to the cart
        state.items = [...state.items, action.payload];
      }
    },
    removeFromCart(state, action) {
      const itemIndexInItems = state.items.findIndex(
        (item) => item.id === action.payload
      );

      state.totalAmount = Math.abs(
        state.totalAmount - state.items[itemIndexInItems].price
      );

      if (state.totalAmount <= 0) {
        console.log("Total is : zero :", state.totalAmount);
      }

      state.isTouch = true;

      if (state.items[itemIndexInItems].amount === 1) {
        const filterableItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        state.items = filterableItems;
      } else {
        state.items[itemIndexInItems].amount--;
      }
    },
    increaseAmount(state, action) {
      const itemIndexInItems = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[itemIndexInItems].amount++;

      state.isTouch = true;

      state.totalAmount =
        state.totalAmount + state.items[itemIndexInItems].price;
    },
    routeTouchHandler(state) {
      state.isRouteTouch = true;
      state.isTouch = false;
    },
  },
});

const store = configureStore({
  reducer: { shop: shopSlice.reducer, ui: uiSlice.reducer },
});

export const shopAction = shopSlice.actions;

export default store;
