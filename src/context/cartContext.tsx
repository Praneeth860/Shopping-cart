import { useState, createContext, useContext } from "react";
import { Product } from "../assets/images";

interface cartContextType {
  cartItems: Product[];
  addToCart(product: Product): Product[];
}
interface CartProviderProps {
  children: React.ReactNode;
}
const CartContext = createContext<cartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  function addToCart(product: Product): Product[] {}
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
