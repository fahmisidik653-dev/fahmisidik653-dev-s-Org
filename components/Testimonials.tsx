
import React from 'react';

const testimonials = [
  {
    quote: "JournAI helped me understand my anxiety better. The mood tracker is a game-changer, and I don't feel so alone anymore.",
    name: 'Sarah J.',
    title: '16 Year Old Student',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    type: 'teen'
  },
  {
    quote: "As a school counselor, I recommend JournAI to my students. It’s an accessible and safe tool for them to begin their mental wellness journey.",
    name: 'Dr. Emily Carter',
    title: 'Psychologist & Partner',
    avatar: 'https://picsum.photos/seed/emily/100/100',
    type: 'partner'
  },
  {
    quote: "I love the motivational quotes! It’s like having a cheerleader in my pocket. The community forums are super supportive too.",
    name: 'Mikey T.',
    title: '18 Year Old Student',
    avatar: 'https://picsum.photos/seed/mikey/100/100',
    type: 'teen'
  },
   {
    quote: "The journaling feature is amazing. The AI prompts actually help me think deeper about my day. It's way better than a blank page.",
    name: 'Aisha K.',
    title: '15 Year Old Student',
    avatar: 'https://picsum.photos/seed/aisha/100/100',
    type: 'teen'
  },
];

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; avatar: string; type: string; }> = ({ quote, name, title, avatar, type }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full">
    <p className="text-slate-600 italic mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-sky-200" />
      <div>
        <p className="font-bold text-slate-800">{name}</p>
        <p className={`text-sm ${type === 'teen' ? 'text-pink-500' : 'text-sky-600'}`}>{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-sky-100 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Words from Our Community</h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">See what teens and professionals are saying about JournAI.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
