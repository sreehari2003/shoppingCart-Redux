import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const size = useSelector((el) => el.cart.totalQuantity);
  const fun = useDispatch();
  // const state = useSelector(state=>state.ui.cartIsVisible)
  const chengeState = () => {
    fun(uiActions.setCartVisible());
  };
  return (
    <button className={classes.button} onClick={chengeState}>
      <span>My Cart</span>
      <span className={classes.badge}>{size}</span>
    </button>
  );
};

export default CartButton;
