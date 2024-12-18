import { useState, createContext } from "react";
import { Product } from "../assets/images";

export interface cartContextType {
  cartItems: Product[];
  addToCart(item: Product): void;
}
interface CartProviderProps {
  children: React.ReactNode;
}
type ExistingItem = Product | undefined;
const CartContext = createContext<cartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  function addToCart(item: Product): void {
    setCartItems((prevItems: Product[]): Product[] => {
      const existingItem: ExistingItem = prevItems.find(
        (i: Product) => i.id === item.id
      );
      if (existingItem) {
        // If item exists, increase the quantity
        return prevItems.map(
          (i): Product =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Otherwise, add the item to the cart
        return [...prevItems, item];
      }
    });
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
