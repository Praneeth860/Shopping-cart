import { Product } from "../assets/images";
import "../styles/components/card.css";
interface CardProps {
  product: Product;
}
const Card = ({ product }: CardProps) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
      {/* <button className="card-button">+ Add to Cart</button> */}
      <div className="quantity-controls">
        <button className="quantity-button ">-</button>
        <span className="quantity-content">
          <span className="quantity">3</span> in cart
        </span>
        <button className="quantity-button">+</button>
      </div>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default Card;
