// src/components/CartIcon.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const CartIcon = memo(() => {
  return <FontAwesomeIcon icon={faCartShopping} />;
});

export default CartIcon;
