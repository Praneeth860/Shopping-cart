// Store.tsx

import products from "../data/items.json";
import "../styles/components/store.css";
import { useCart } from "../context/cartContext";
import Card from "../components/Card";
const Store = () => {
  const { addOneToCart, removeOneFromCart, removeFromCart, getCartQuantity } =
    useCart();

  return (
    <div className="store-container">
      <h1 className="store-title">Store</h1>
      <div className="store-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            product={{ ...product, quantity: getCartQuantity(product.id) }}
            addOneToCart={addOneToCart}
            removeOneFromCart={removeOneFromCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
