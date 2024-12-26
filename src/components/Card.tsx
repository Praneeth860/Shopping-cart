import { Product } from "../assets/images";
import "../styles/components/card.css";
import formatPrice from "../utils/formatPrice";
interface CardProps {
  product: Product;
  addOneToCart(item: Product): void;
  removeOneFromCart(item: Product): void;
  removeFromCart(id: number): void;
}
const Card = ({
  product,
  addOneToCart,
  removeOneFromCart,
  removeFromCart,
}: CardProps) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        loading="lazy"
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
      {product.quantity == 0 ? (
        <button
          className="card-button"
          onClick={() => {
            addOneToCart(product);
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
                removeOneFromCart(product);
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
                addOneToCart(product);
              }}
            >
              +
            </button>
          </div>
          <button
            className="remove-button"
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
