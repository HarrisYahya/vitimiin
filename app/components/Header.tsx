export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-10">
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />
        <h1 className="text-lg md:text-xl font-semibold text-green-700">
          Vitimiin Online
        </h1>
      </div>

      <div className="flex gap-4 md:gap-6 text-gray-700 text-sm md:text-base">
        <button>Shop</button>
        <button>Sign In</button>
      </div>
    </header>
  );
}
