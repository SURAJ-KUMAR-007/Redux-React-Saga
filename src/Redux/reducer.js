import { Add_To_Cart, Remove_From_Cart, Clear_Cart } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case Add_To_Cart: {
      console.log("Add to cart conditions", action);
      return [action.data, ...data];
    }
    case Remove_From_Cart: {
      console.log("removed from cart conditions", data);
      //data.pop();
      // data.length = data.length > 0 ? data.length - 1 : data;
      return [...data];
    }
    case Clear_Cart: {
      console.log("clear from cart conditions", action);
      return [];
    }

    default: {
      return data;
    }
  }
};
