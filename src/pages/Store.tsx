import Card from "../components/Card";
import products, { Product } from "../assets/images";
import { useState } from "react";
import "../styles/components/store.css";
import { useCart } from "../context/cartContext";

const Store = () => {
  const { addToCart, removeItemFromCart } = useCart();
  const [productList, setProductList] = useState<Product[]>(products);
  function handleIncrement(item: Product) {
    setProductList((prev): Product[] => {
      return prev.map(
        (i): Product =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    });
    addToCart(item, item.quantity);
  }
  function handleDecerement(item: Product): void {
    setProductList((prev): Product[] => {
      return prev.map((i): Product => {
        if (i.id === item.id && i.quantity > 0) {
          return { ...i, quantity: i.quantity - 1 }; // Decrement quantity
        } else {
          return i; // Return the unchanged product
        }
      });
    });
  }
  function handleRemove(item: Product) {
    setProductList((prev): Product[] => {
      return prev.map(
        (i): Product => (i.id === item.id ? { ...i, quantity: 0 } : i)
      );
    });
    removeItemFromCart(item.id);
  }
  return (
    <div className="store-container">
      <h1 className="store-title">Store</h1>
      <div className="store-grid">
        {productList.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleIncrement={handleIncrement}
            handleDecerement={handleDecerement}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
