import ShoppingIcon from "../../assets/shopping-cart-simple.svg";
import "./cart-icon.scss";

export function CartIcon() {
  return (
    <>
      <img className="cart-icon" src={ShoppingIcon} alt="" />
    </>
  );
}
