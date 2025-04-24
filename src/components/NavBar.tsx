import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-playfair text-2xl font-bold text-dali-dark">DA\LI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-dali-primary px-3 py-2 text-sm font-medium">
              Главная
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-dali-primary px-3 py-2 text-sm font-medium">
              Услуги
            </Link>
            <Link to="/specialists" className="text-gray-600 hover:text-dali-primary px-3 py-2 text-sm font-medium">
              Специалисты
            </Link>
            <Link to="/briefs" className="text-gray-600 hover:text-dali-primary px-3 py-2 text-sm font-medium">
              Брифы
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-dali-primary px-3 py-2 text-sm font-medium">
              О нас
            </Link>
            <Button variant="outline" className="border-dali-primary text-dali-primary hover:bg-dali-primary hover:text-white">
              Войти
            </Button>
            <Button className="bg-dali-primary text-white hover:bg-dali-secondary">
              Регистрация
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-dali-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-dali-primary">
              Главная
            </Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-dali-primary">
              Услуги
            </Link>
            <Link to="/specialists" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-dali-primary">
              Специалисты
            </Link>
            <Link to="/briefs" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-dali-primary">
              Брифы
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-dali-primary">
              О нас
            </Link>
            <div className="pt-4 pb-3 space-y-2">
              <Button variant="outline" className="w-full border-dali-primary text-dali-primary hover:bg-dali-primary hover:text-white">
                Войти
              </Button>
              <Button className="w-full bg-dali-primary text-white hover:bg-dali-secondary">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
