// cartContext.tsx
import { useState, useEffect, createContext, useContext } from "react";
import { Product } from "../assets/images";

export interface cartContextType {
  cartItems: Product[];
  addOneToCart: (item: Product) => void;
  removeOneFromCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  getCartQuantity: (id: number) => number;
  calculateTotal: () => number;
  calculateCartCount: () => number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<cartContextType | undefined>(undefined);
export const CART_STORAGE_KEY = "shopping-cart";
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const getCartQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addOneToCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (!existingItem) {
        return [...prevItems, { ...item, quantity: 1 }];
      }
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    });
  };

  const removeOneFromCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (!existingItem) return prevItems;

      if (existingItem.quantity === 1) {
        return prevItems.filter((i) => i.id !== item.id);
      }

      return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const calculateCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addOneToCart,
        removeOneFromCart,
        removeFromCart,
        getCartQuantity,
        calculateTotal,
        calculateCartCount,
      }}
    >
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
