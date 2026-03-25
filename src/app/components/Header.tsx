import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/img_5e4ce615.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleAnchorClick = (to: string) => {
    if (to.includes("#")) {
      const id = to.split("#")[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Seek Digital Solutions – Innovate Fearlessly"
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleAnchorClick(link.to)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#E85D26] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-[#E85D26] text-white text-sm font-semibold hover:bg-[#d04e1b] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleAnchorClick(link.to)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-[#E85D26] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 px-5 py-2.5 rounded-lg bg-[#E85D26] text-white text-sm font-semibold text-center hover:bg-[#d04e1b] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}