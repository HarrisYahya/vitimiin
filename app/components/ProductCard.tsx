import Image from "next/image";
import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
}: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition">
      <div className="w-full h-40 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <h3 className="font-semibold mt-4 text-center sm:text-left">{name}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-3">
        <p className="text-green-600 font-bold">
          ${price} <span className="text-sm">per kg</span>
        </p>

        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
