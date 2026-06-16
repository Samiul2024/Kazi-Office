import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div>
          <h1 className="font-bold text-green-700 text-xl">
            Kazi Office Boyra
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavbar />
      </div>
    </header>
  );
}