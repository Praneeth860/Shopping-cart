import { Product } from "../assets/images";
import "../styles/components/card.css";
import formatPrice from "../utils/formatPrice";
interface CardProps {
  product: Product;
  handleIncrement(item: Product): void;
  handleDecerement(item: Product): void;
}
const Card = ({ product, handleIncrement, handleDecerement }: CardProps) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
      {product.quantity == 0 ? (
        <button
          className="card-button"
          onClick={() => {
            handleIncrement(product);
          }}
        >
          + Add to Cart
        </button>
      ) : (
        <>
          <div className="quantity-controls">
            <button
              className="quantity-button "
              onClick={() => {
                handleDecerement(product);
              }}
            >
              -
            </button>
            <span className="quantity-content">
              <span className="quantity">{product.quantity}</span> in cart
            </span>
            <button
              className="quantity-button"
              onClick={() => {
                handleIncrement(product);
              }}
            >
              +
            </button>
          </div>
          <button className="remove-button">Remove</button>
        </>
      )}
    </div>
  );
};

export default Card;
