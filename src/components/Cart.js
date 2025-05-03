import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Shop :</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity} - Rp {item.price * item.quantity}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <hr />
      <h4>Total : Rp {total}</h4>
    </div>
  );
};

export default Cart;
