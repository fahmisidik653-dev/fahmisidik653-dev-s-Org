
import React, { useState } from 'react';

const CheckIcon = () => <i data-feather="check-circle" className="w-5 h-5 text-sky-500 mr-3"></i>;
const XIcon = () => <i data-feather="x-circle" className="w-5 h-5 text-slate-400 mr-3"></i>;

const PricingCard: React.FC<{
  plan: string;
  price: string;
  period?: string;
  features: { text: string; included: boolean }[];
  isFeatured?: boolean;
}> = ({ plan, price, period, features, isFeatured }) => (
  <div className={`rounded-2xl p-8 border ${isFeatured ? 'bg-sky-500 text-white shadow-2xl scale-105' : 'bg-white text-slate-800 shadow-lg'}`}>
    <h3 className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-slate-800'}`}>{plan}</h3>
    <p className={`mt-4 text-4xl font-extrabold ${isFeatured ? 'text-white' : 'text-slate-900'}`}>{price}</p>
    {period && <p className={`mt-1 ${isFeatured ? 'text-sky-100' : 'text-slate-500'}`}>{period}</p>}
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          {feature.included ? <CheckIcon /> : <XIcon />}
          <span className={isFeatured ? 'text-sky-100' : 'text-slate-600'}>{feature.text}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full mt-10 font-bold py-3 px-6 rounded-full transition-all duration-300 ${isFeatured ? 'bg-white text-sky-500 hover:bg-sky-100' : 'bg-sky-500 text-white hover:bg-sky-600'}`}>
      Get Started
    </button>
  </div>
);


const Pricing = () => {
    React.useEffect(() => {
    // Fix: Cast window to any to access feather icons property
    if ((window as any).feather) {
      (window as any).feather.replace();
    }
  }, []);

  const freeFeatures = [
    { text: 'AI Journaling (3 entries/day)', included: true },
    { text: 'Daily Mood Tracker', included: true },
    { text: 'Motivational Quotes', included: true },
    { text: 'Limited Spiritual Content', included: true },
    { text: 'Community Access (Read Only)', included: true },
    { text: 'Psychologist Consultation', included: false },
    { text: 'Advanced Mood Analytics', included: false },
  ];

  const premiumFeatures = [
    { text: 'Unlimited AI Journaling', included: true },
    { text: 'Advanced Mood Analytics', included: true },
    { text: 'Full Spiritual Content Library', included: true },
    { text: 'Full Community Access', included: true },
    { text: '1 Psychologist Chat/Month', included: true },
    { text: 'Exclusive Self-Care Bundles', included: true },
    { text: 'Priority Support', included: true },
  ];

  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Choose Your Plan</h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">Start for free or unlock your full potential with Premium.</p>
        </div>

        <div className="flex justify-center items-center mb-10 space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-slate-500' : 'text-slate-900'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} className="sr-only peer" />
                <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-sky-500"></div>
            </label>
            <span className={`font-medium ${isAnnual ? 'text-slate-500' : 'text-slate-900'}`}>Annual (Save 15%)</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          <PricingCard plan="Free" price="Rp0" features={freeFeatures} />
          <PricingCard plan={isAnnual ? "Annual" : "Premium"} price={isAnnual ? "Rp499.000" : "Rp49.000"} period={isAnnual ? "/ year" : "/ month"} features={premiumFeatures} isFeatured={true} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;