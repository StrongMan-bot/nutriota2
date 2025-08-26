import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoError, setLogoError] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English', flag: '🇬🇧' });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const dropdownRef = useRef(null);
  const languageRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're in the hero section (first ~100px)
      if (currentScrollY <= 100) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past hero section
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        if (currentScrollY <= 100) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-500 ease-in-out ${
      isScrolled ? 'h-14' : 'h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Left Side: Logo + Navigation */}
          <div className="flex items-center space-x-8">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {!logoError ? (
                <img 
                  src="./All the images/nutriota.png" 
                  alt="Nutriota" 
                  className={`w-auto transition-all duration-500 ease-in-out ${
                    isScrolled ? 'h-10' : 'h-16'
                  }`}
                  onError={handleLogoError}
                />
              ) : (
                <div className={`flex items-center justify-center bg-emerald-100 rounded-full transition-all duration-500 ease-in-out ${
                  isScrolled ? 'h-10 w-10' : 'h-16 w-16'
                }`}>
                  <span className={`text-emerald-800 font-bold transition-all duration-500 ${
                    isScrolled ? 'text-lg' : 'text-2xl'
                  }`}>N</span>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              
              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`flex items-center text-gray-700 hover:text-emerald-700 transition-all duration-300 font-semibold ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown size={isScrolled ? 14 : 16} className={`ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-3 z-50">
                    <button className="w-full text-left px-5 py-3 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-200 font-medium">
                      Supplements
                    </button>
                    <button className="w-full text-left px-5 py-3 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-200 font-medium">
                      Vitamins
                    </button>
                    <button className="w-full text-left px-5 py-3 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-200 font-medium">
                      Herbal Supplements
                    </button>
                    <button className="w-full text-left px-5 py-3 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-200 font-medium">
                      All Products
                    </button>
                  </div>
                )}
              </div>
              
              <a href="#about" className={`text-gray-700 hover:text-emerald-700 transition-all duration-300 font-semibold ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}>
                About Us
              </a>
              <a href="#contact" className={`text-gray-700 hover:text-emerald-700 transition-all duration-300 font-semibold ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}>
                Contact Us
              </a>
            </nav>
          </div>

          {/* Right Side: Search Bar + Language Selector */}
          <div className="flex items-center space-x-4">
            
            {/* Search Bar */}
            <div className="hidden lg:flex relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`pl-4 pr-10 border border-gray-200 rounded-full text-sm bg-gray-50 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-500 outline-none ${
                    isScrolled ? 'py-1.5 w-48' : 'py-2.5 w-64'
                  }`}
                />
                <button
                  onClick={handleSearch}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-all duration-300 ${
                    isScrolled ? 'scale-90' : 'scale-100'
                  }`}
                >
                  <Search size={isScrolled ? 16 : 18} />
                </button>
              </div>
            </div>

            {/* Language Selector */}
            <div className="hidden lg:flex relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-2 px-3 border border-gray-200 rounded-full bg-gray-50 hover:bg-white hover:border-emerald-400 transition-all duration-500 min-w-[100px] ${
                  isScrolled ? 'py-1.5' : 'py-2.5'
                }`}
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
              >
                <span className={`transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  {selectedLanguage.flag}
                </span>
                <span className={`font-medium text-gray-700 transition-all duration-300 ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}>
                  {selectedLanguage.name}
                </span>
                <ChevronDown size={isScrolled ? 12 : 14} className={`text-gray-500 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <button 
                    onClick={() => {
                      setSelectedLanguage({ code: 'en', name: 'English', flag: '🇬🇧' });
                      setIsLanguageOpen(false);
                    }}
                    className="w-full text-left flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="font-medium">English</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-700 transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={isScrolled ? 22 : 24} /> : <Menu size={isScrolled ? 22 : 24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              
              {/* Mobile Search */}
              <div className="px-2 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-5 pr-12 py-3 border border-gray-200 rounded-full text-base bg-gray-50 focus:bg-white focus:border-emerald-400 outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Language Selector */}
              <div className="px-2 mb-4">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-3 w-full px-4 py-3 border border-gray-200 rounded-full bg-gray-50"
                >
                  <span className="text-lg">{selectedLanguage.flag}</span>
                  <span className="text-base font-medium text-gray-700">{selectedLanguage.name}</span>
                  <ChevronDown size={16} className={`ml-auto text-gray-500 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-700 transition-colors duration-200 font-semibold text-lg px-2 py-2"
                >
                  Products
                  <ChevronDown size={18} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <button className="block w-full text-left text-gray-600 hover:text-emerald-700 transition-colors duration-200 px-2 py-2 font-medium">
                      Supplements
                    </button>
                    <button className="block w-full text-left text-gray-600 hover:text-emerald-700 transition-colors duration-200 px-2 py-2 font-medium">
                      Vitamins
                    </button>
                    <button className="block w-full text-left text-gray-600 hover:text-emerald-700 transition-colors duration-200 px-2 py-2 font-medium">
                      Herbal Supplements
                    </button>
                    <button className="block w-full text-left text-gray-600 hover:text-emerald-700 transition-colors duration-200 font-medium">
                      All Products
                    </button>
                  </div>
                )}
              </div>
              
              <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors duration-200 font-semibold text-lg px-2 py-2">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors duration-200 font-semibold text-lg px-2 py-2">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;