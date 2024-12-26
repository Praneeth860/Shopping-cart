import { X } from "lucide-react";
import { Product } from "../assets/images";
import formatPrice from "../utils/formatPrice";

interface CartItemProps {
  item: Product;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => (
  <div className="cart-item" key={item.id}>
    <img
      src={item.image}
      alt={item.name}
      loading="lazy"
      className="cart-item-image"
    />
    <div className="cart-item-details">
      <h3 className="cart-item-name">
        {item.name} <span className="cart-quantity">x{item.quantity}</span>
      </h3>
      <p className="cart-item-price">{formatPrice(item.price)}</p>
    </div>
    <div className="cart-item-actions">
      <p className="cart-item-total">
        {formatPrice(item.price * item.quantity)}
      </p>
      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
        aria-label="Remove item"
      >
        <X size={10} strokeWidth={2} />
      </button>
    </div>
  </div>
);

export default CartItem;
