//this file combines all the reducers
import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productData";
export default combineReducers({
  // cartData: cartData,
  cartData,
  productData,
});
