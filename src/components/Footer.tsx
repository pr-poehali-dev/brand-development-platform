import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dali-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-white font-playfair text-2xl font-bold">DA\LI</span>
            </div>
            <p className="mt-4 text-base text-gray-300">
              Архитектурно-дизайнерское бюро, где создаются уникальные бренды через сотрудничество клиентов и специалистов.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Услуги</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/services" className="text-base text-gray-300 hover:text-white">
                  Разработка бренда
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-gray-300 hover:text-white">
                  Для клиентов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-gray-300 hover:text-white">
                  Для специалистов
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Компания</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} DA\LI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
