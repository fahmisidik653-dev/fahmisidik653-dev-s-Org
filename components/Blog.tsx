
import React from 'react';

const articles = [
  {
    title: '5 Simple Ways to Practice Mindfulness Every Day',
    excerpt: 'Mindfulness doesn’t have to be complicated. Here are five easy techniques you can integrate into your daily routine...',
    image: 'https://picsum.photos/seed/mindful/600/400',
    category: 'Well-being'
  },
  {
    title: 'Navigating Exam Stress: Tips for Teens',
    excerpt: 'Exam season can be tough. Learn how to manage stress and stay focused with these proven strategies...',
    image: 'https://picsum.photos/seed/stress/600/400',
    category: 'School'
  },
  {
    title: 'How to Support a Friend Who is Struggling',
    excerpt: 'Being a good friend means being there in tough times. Here’s how you can offer support without burning out...',
    image: 'https://picsum.photos/seed/friend/600/400',
    category: 'Relationships'
  },
];

const BlogCard: React.FC<{ title: string; excerpt: string; image: string; category: string }> = ({ title, excerpt, image, category }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <span className="text-sm font-semibold text-pink-500 bg-pink-100 py-1 px-3 rounded-full">{category}</span>
            <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2 group-hover:text-sky-600 transition-colors">{title}</h3>
            <p className="text-slate-500 mb-4">{excerpt}</p>
            <a href="#" className="font-bold text-sky-500 hover:text-sky-700 transition-colors">Read More &rarr;</a>
        </div>
    </div>
);


const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Articles & Insights</h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">Education and stories to help you on your journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
