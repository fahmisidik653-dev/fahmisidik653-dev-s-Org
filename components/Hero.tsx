
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-sky-100 to-pink-100 overflow-hidden pt-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <Logo className="h-20 w-20 mr-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              Your Life Matters.
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
            JournAI - Your Digital Confidant for Teens
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0">
            Navigate your feelings, build resilience, and find your spark with a friend that's always there for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#pricing" className="w-full sm:w-auto bg-pink-400 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Sign Up
            </a>
            <a href="#features" className="w-full sm:w-auto bg-white text-sky-500 font-bold py-3 px-8 rounded-full hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg border border-sky-200">
              Start Journaling
            </a>
            <a href="#contact" className="w-full sm:w-auto text-slate-600 font-semibold hover:text-slate-800 transition-colors duration-300">
              Talk to a Psychologist
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 relative h-96 lg:h-auto">
          <img 
            src="https://picsum.photos/id/1011/300/600" 
            alt="App Mockup" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl z-10 border-8 border-white w-48 md:w-64 rotate-3"
          />
          <img 
            src="https://picsum.photos/id/1027/400/300" 
            alt="Teenager illustration" 
            className="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/4 rounded-2xl shadow-xl w-48 md:w-64 -rotate-6"
          />
           <img 
            src="https://picsum.photos/id/10/400/300" 
            alt="Happy friends illustration" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/4 translate-y-1/4 rounded-2xl shadow-xl w-48 md:w-64 rotate-6"
          />
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-200/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
