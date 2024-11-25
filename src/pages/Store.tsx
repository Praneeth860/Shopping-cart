import Card from "../components/Card";
import products from "../assets/images";

import "../styles/components/store.css";

const Store = () => {
  return (
    <div className="store-container">
      <h1 className="store-title">Store</h1>
      <div className="store-grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
