import "../styles/components/cart.css";
import products from "../assets/images";
import { X } from "lucide-react";
import CartItem from "./CartItem";
import formatPrice from "../utils/formatPrice";

type CartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: CartProps) => {
  const calculateTotal = () =>
    products.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveItem = (id: number) => {
    console.log(`Remove item with id: ${id}`);
    // Implement remove logic here
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <button className="close-btn" aria-label="Close cart">
        <X color="hsl(0, 0%, 33%)" strokeWidth={1.75} />
      </button>
      <div className="cart-items">
        {products.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
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
