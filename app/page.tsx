import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="bg-[#f9fdf9] min-h-screen text-gray-800 relative">
      <Header />
      <Hero />
      <ProductSection />
      <Cart />
    </main>
  );
}
