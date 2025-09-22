
import React from 'react';
import Logo from './Logo';

const features = [
  { icon: 'edit-3', title: 'AI Journaling', description: 'Express yourself freely. Our AI understands and helps you reflect on your thoughts.' },
  { icon: 'smile', title: 'Mood Tracker', description: 'Log your moods easily and see patterns over time to understand your emotional health.' },
  { icon: 'sunrise', title: 'Motivational Quotes', description: 'Get a daily dose of positivity and wisdom to start your day right.' },
  { icon: 'moon', title: 'Spiritual Content', description: 'Explore guided meditations and mindfulness exercises for inner peace.' },
  { icon: 'users', title: 'Premium Psychologist Consultation', description: 'Connect with certified professionals for one-on-one guidance securely.' },
  { icon: 'shield', title: 'Safe Community', description: 'Join moderated groups to share experiences and support peers in a safe space.' },
  { icon: 'gift', title: 'Self-Care Bundles', description: 'Discover curated product bundles to enhance your well-being journey.' }
];

const FeatureCard: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-slate-100">
    <div className="bg-sky-100 text-sky-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
      <i data-feather={icon} className="w-7 h-7"></i>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500">{description}</p>
  </div>
);

const Features: React.FC = () => {
  React.useEffect(() => {
    // Fix: Cast window to any to access feather icons property
    if ((window as any).feather) {
      (window as any).feather.replace();
    }
  }, []);

  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Logo className="w-1/2 h-1/2 text-slate-200/30 opacity-20" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Everything You Need to Thrive</h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">JournAI is packed with features designed to support your mental and emotional well-being.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
          <div className="bg-gradient-to-br from-sky-400 to-pink-400 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center text-center text-white">
             <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <i data-feather="plus" className="w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">And Much More...</h3>
            <p>We're constantly adding new features based on feedback from our community!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;