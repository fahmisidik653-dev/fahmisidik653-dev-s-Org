
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    React.useEffect(() => {
        // Fix: Cast window to any to access feather icons property
        if ((window as any).feather) {
          (window as any).feather.replace();
        }
    }, []);

    const footerLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy Policy', href: '#' }
    ];

    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center text-center">
                    <Logo className="h-20 w-20 mb-4" />
                    <h3 className="text-3xl font-bold">JournAI</h3>
                    <p className="max-w-md mt-2 text-slate-400">Your digital confidant for a brighter, healthier you.</p>
                </div>
                <nav className="flex flex-wrap justify-center my-8">
                    {footerLinks.map(link => (
                        <a key={link.name} href={link.href} className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-300">{link.name}</a>
                    ))}
                </nav>
                <div className="flex justify-center space-x-6 my-8">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <i data-feather="twitter" className="w-6 h-6"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <i data-feather="instagram" className="w-6 h-6"></i>
                    </a>
                     <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                        <i data-feather="facebook" className="w-6 h-6"></i>
                    </a>
                </div>
                <div className="text-center text-slate-500 border-t border-slate-700 pt-8">
                    <p>&copy; {new Date().getFullYear()} JournAI. All Rights Reserved. Built with care for teens everywhere.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;