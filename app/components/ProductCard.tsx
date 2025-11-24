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
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col justify-between h-full">
      
      {/* Image Box - fixed size */}
      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 mt-4">
        <h3 className="font-semibold text-center sm:text-left">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-green-600 font-bold">${price}</p>

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