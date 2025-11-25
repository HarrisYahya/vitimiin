"use client";
import { useCartStore } from "../store/cartStore";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const {
    cart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = cart
    .reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(2);

  const handleBuy = () => {
    const message = cart
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const whatsappMsg = `Hello, Waxaan Rabaa inan iibsado adeegan:\n${message}\n\nTotal: $${total}`;
    const encoded = encodeURIComponent(whatsappMsg);

    const iosLink = `whatsapp://send?phone=252617733690&text=${encoded}`;
    const webLink = `https://wa.me/252617733690?text=${encoded}`;

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = iosLink;
      setTimeout(() => {
        window.location.href = webLink;
      }, 700);
    } else {
      window.open(webLink, "_blank");
    }
  };

  // ⭐ Payment button (decimal handled, omit *00)
  const handlePayment = () => {
    const parts = total.split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "00";

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const hash = isIOS ? "%23" : "#";

    // Include decimal only if not "00"
    const paymentLink =
      decimalPart === "00"
        ? `tel:*712*617733690*${integerPart}${hash}`
        : `tel:*712*617733690*${integerPart}*${decimalPart}${hash}`;

    window.location.href = paymentLink;
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl p-5 rounded-2xl border max-h-[70vh] overflow-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>

      {cart.length === 0 && (
        <p className="text-gray-500 text-center py-10">Your cart is empty</p>
      )}

      {cart.length > 0 && (
        <>
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    -
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Total:</span>
              <span className="font-bold">${total}</span>
            </div>

            {/* WhatsApp button */}
            <button
              onClick={handleBuy}
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
            >
              Proceed to Buy (WhatsApp)
            </button>

            {/* Payment button (Mobile Money USSD, decimal handled) */}
            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 mt-2"
            >
              Pay Now (Mobile Money)
            </button>

            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 mt-2"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
