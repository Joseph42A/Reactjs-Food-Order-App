import { uiActions } from "./ui-slice";
import { shopAction } from ".";

// action creator thunk get data from the firebase
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch("https://upload-23a44.firebaseio.com/cart.json");

      if (!res.ok) {
        throw new Error("Somthing went Wrong!");
      }
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      if (!cartData.items) {
        cartData.items = [];
        cartData.totalAmount = 0;
      }

      dispatch(
        shopAction.replaceCart({
          items: cartData.items,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to load data!",
        })
      );
    }
  };
};

// action creator thunk
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // do something
    // any async code 'post' 'get' 'put' any

    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://upload-23a44.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
              items: cart.items,
              totalAmount: cart.totalAmount,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        // const data = response.json();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sending Cart Data successfully!...",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Failed to send data!",
          })
        );
      }
    };

    sendRequest();
  };
};
