import {
  addToCart,
  clearCart,
  productList,
  removeFromCart,
} from "../Redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "Iphone",
    type: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div className="Main">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove from Cart
      </button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <button onClick={() => dispatch(productList(product))}>productList</button>
    </div>
  );
}

export default Main;
