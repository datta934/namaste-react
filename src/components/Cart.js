import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      Cart
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}
      <ItemList items={cartItems}></ItemList>
    </div>
  );
};

export default Cart;
