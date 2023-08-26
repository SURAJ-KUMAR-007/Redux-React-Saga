import {
  Add_To_Cart,
  Remove_From_Cart,
  Clear_Cart,
  PRODUCT_LIST,
} from "./constants";
export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: Add_To_Cart,
    data,
    // data: "1 item",
    // data: data,
  };
};
export const removeFromCart = (data) => {
  console.log("action called", data);
  return {
    type: Remove_From_Cart,
    data,
  };
};
export const clearCart = () => {
  return {
    type: Clear_Cart,
  };
};
export const productList = (data) => {
  return {
    type: PRODUCT_LIST,
    data,
  };
};
