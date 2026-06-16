import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Kazi Office Boyra
        </h1>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
