import React from "react";
import { useSelector } from "react-redux";
import { BG, NAV } from "./Navbar.styles";
export const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartValues.length);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div>
      <NAV>
        Navbar
        <BG>
          <button>cart:{cartCount}</button>
          <button>total:{totalPrice}</button>
        </BG>
      </NAV>
    </div>
  );
};
