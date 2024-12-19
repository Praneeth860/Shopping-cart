import "../styles/components/cart.css";
import { X } from "lucide-react";
import CartItem from "./CartItem";
import formatPrice from "../utils/formatPrice";
import { useCart } from "../context/cartContext";
interface CartProps {
  isOpen: boolean;
  handleOffCanvas: () => void;
}
const ShoppingCart = ({ isOpen, handleOffCanvas }: CartProps) => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();

  return (
    <div className={`cart-container ${isOpen && "visible-cart"}`}>
      <h2 className="cart-title">Cart</h2>
      <button
        className="close-btn"
        aria-label="Close cart"
        onClick={handleOffCanvas}
      >
        <X color="hsl(0, 0%, 33%)" strokeWidth={1.75} />
      </button>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
      </div>
      <div className="cart-total">
        <h3>Total:</h3>
        <p className="total-amount">{formatPrice(calculateTotal())}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
