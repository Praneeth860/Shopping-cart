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
    </div>
  );
};

export default Card;
