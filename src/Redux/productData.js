import { PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST: {
      console.log("PRODUCT_Data conditions", action);
      return [action.data, ...data];
    }

    default: {
      return data;
    }
  }
};
