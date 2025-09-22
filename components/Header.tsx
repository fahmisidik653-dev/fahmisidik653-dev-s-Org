
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => smoothScroll(e, '#home')} className="flex items-center space-x-2">
          <Logo className="h-10 w-10" />
          <span className="font-bold text-2xl text-slate-800">JournAI</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => smoothScroll(e, link.href)} className="text-slate-600 hover:text-sky-500 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#download" className="hidden lg:inline-block bg-sky-500 text-white font-bold py-2 px-6 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
          Download App
        </a>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => smoothScroll(e, link.href)} className="text-slate-600 hover:text-sky-500 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
            <a href="#download" className="bg-sky-500 text-white font-bold py-2 px-6 rounded-full hover:bg-sky-600 transition-all duration-300">
              Download App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
