import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  //   const { name ,price} = result;
  console.log("result in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Header;
