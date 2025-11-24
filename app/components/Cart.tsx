"use client";

import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartPopup from "./CartPopup";

export default function Cart() {
  const { cart } = useCartStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed 
          bottom-10    /* <-- moved up so it's always visible */
          right-6 
          bg-black 
          text-white 
          p-4 
          rounded-full 
          shadow-xl 
          hover:bg-gray-800 
          transition 
          z-50 
        "
      >
        <ShoppingCart size={22} />

        {cart.length > 0 && (
          <span
            className="
              absolute 
              -top-1 
              -right-1 
              bg-red-500 
              text-white 
              text-xs 
              w-5 
              h-5 
              flex 
              items-center 
              justify-center 
              rounded-full
            "
          >
            {cart.length}
          </span>
        )}
      </button>

      {open && <CartPopup onClose={() => setOpen(false)} />}
    </>
  );
}
