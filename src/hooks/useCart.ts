import CartContext, { cartContextType } from "../context/cartContext";
import { useContext } from "react";

function useCart(): cartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider");
  }
  return context;
}

export default useCart;
