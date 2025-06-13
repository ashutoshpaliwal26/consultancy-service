import { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="mr-8">
                <img
                  src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg"
                  alt="Lunar Astro"
                  className="h-16 w-16 rounded-full object-cover border-2 border-maroon"
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/lunar-astro-blog" className="text-maroon hover:text-maroon-dark font-medium">
              Case Studies
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-maroon hover:text-maroon-dark font-medium"
                onClick={() => setIsTermsOpen(!isTermsOpen)}
              >
                Terms <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isTermsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md py-2 w-40 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Term 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Term 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Term 3</a>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-maroon hover:text-maroon-dark font-medium">
              Contact Us
            </Link>
            <Link to="/review" className="text-maroon hover:text-maroon-dark font-medium">
              Reviews
            </Link>
            <Link to="/auth/login" className="text-maroon hover:text-maroon-dark font-medium">
              Login
            </Link>
            <Link to="/my-bookings" className="text-maroon hover:text-maroon-dark font-medium">
              My Bookings
            </Link>
          </nav>

          <div className="relative">
            <ShoppingBag className="h-6 w-6 text-black" />
            <span className="absolute -top-2 -right-2 bg-maroon text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;