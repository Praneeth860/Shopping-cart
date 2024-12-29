// cartContext.tsx
import { createContext, useContext } from "react";
import { Product } from "../assets/images";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCallback } from "react";
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
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<Product[]>(
    "shopping-cart",
    []
  );

  const getCartQuantity = useCallback(
    (id: number) => cartItems.find((item) => item.id === id)?.quantity || 0,
    [cartItems]
  );

  const addOneToCart = useCallback(
    (item: Product) => {
      setCartItems((prev) => {
        const existingItem = prev.find((i) => i.id === item.id);
        if (!existingItem) {
          return [...prev, { ...item, quantity: 1 }];
        }
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      });
    },
    [setCartItems]
  );

  const removeOneFromCart = useCallback(
    (item: Product) => {
      setCartItems((prev) => {
        const existingItem = prev.find((i) => i.id === item.id);
        if (!existingItem) return prev;
        if (existingItem.quantity === 1) {
          return prev.filter((i) => i.id !== item.id);
        }
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    },
    [setCartItems]
  );

  const calculateTotal = useCallback(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const calculateCartCount = useCallback(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

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
