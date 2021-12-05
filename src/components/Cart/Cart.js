import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const el = [props.items];
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {el.map((el) => {
          const item = el.items;
          return item.map((el) => {
            return (
              <CartItem
                item={{
                  title: el.name,
                  quantity: el.quantity,
                  total: el.totalPrice,
                  price: el.price,
                  id: el.id,
                }}
              />
            );
          });
        })}
      </ul>
    </Card>
  );
};

export default Cart;
