import { useState, createContext, useContext } from "react";
import { Product } from "../assets/images";
export interface cartContextType {
  cartItems: Product[];
  addToCart(item: Product, quantity: number): void;
  removeItemFromCart: (id: number) => void;
}
interface CartProviderProps {
  children: React.ReactNode;
}
type ExistingItem = Product | undefined;
export const CartContext = createContext<cartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  function addToCart(item: Product, quantity: number): void {
    setCartItems((prevItems: Product[]): Product[] => {
      const existingItem: ExistingItem = prevItems.find(
        (i: Product) => i.id === item.id
      );
      if (existingItem) {
        // If item exists, updating the quantity
        return prevItems.map(
          (i): Product => (i.id === item.id ? { ...i, quantity: quantity } : i)
        );
      } else {
        // Otherwise, add the item to the cart
        return [...prevItems, item];
      }
    });
  }
  const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = (): cartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
