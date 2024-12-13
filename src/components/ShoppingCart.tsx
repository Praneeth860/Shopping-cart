// ShoppingCart.tsx
import "../styles/components/cart.css";
import products from "../assets/images";

const ShoppingCart = () => {
  const calculateTotal = (): string => {
    const total = products.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <button className="close-btn">&times;</button>
      <div className="cart-items">
        {products.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <p className="cart-item-total">${item.price.toFixed(2)}</p>
              <button className="remove-btn">&times;</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total:</h3>
        <p className="total-amount">${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
