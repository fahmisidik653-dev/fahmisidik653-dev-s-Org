
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };
    
    React.useEffect(() => {
        // Fix: Cast window to any to access feather icons property
        if ((window as any).feather) {
          (window as any).feather.replace();
        }
    }, []);

    return (
        <section id="contact" className="relative py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-slate-800">Get in Touch</h2>
                        <p className="text-lg text-slate-500 mt-4">Have a question, a suggestion, or need support? We're here to help. Reach out to us anytime.</p>
                        <div className="mt-8 flex space-x-6 text-slate-500">
                             <a href="#" className="hover:text-sky-500"><i data-feather="mail" className="w-8 h-8"></i></a>
                             <a href="#" className="hover:text-sky-500"><i data-feather="instagram" className="w-8 h-8"></i></a>
                             <a href="#" className="hover:text-sky-500"><i data-feather="twitter" className="w-8 h-8"></i></a>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl shadow-lg">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="font-medium text-slate-700">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:ring-sky-500 focus:border-sky-500"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="font-medium text-slate-700">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:ring-sky-500 focus:border-sky-500"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="font-medium text-slate-700">Message</label>
                                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full mt-2 px-4 py-2 border border-slate-200 rounded-lg focus:ring-sky-500 focus:border-sky-500"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="w-full mt-6 bg-sky-500 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
             {/* Live Chat Button */}
            <button className="fixed bottom-6 right-6 bg-pink-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <i data-feather="message-circle" className="w-8 h-8"></i>
            </button>
        </section>
    );
};

export default Contact;