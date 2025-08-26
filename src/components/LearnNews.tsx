import React from 'react';

const LearnNews = () => {
  const articles = [
    {
      image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "How to Choose a Daily Vitamin",
      snippet: "A quick guide to understanding labels, formats, and serving sizes so you can pick what fits your routine.",
      alt: "Various vitamins and supplements laid out on a clean surface"
    },
    {
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Herbal Basics: Getting Started",
      snippet: "What to look for when exploring herbal blends, plus common forms like capsules and teas.",
      alt: "Natural herbs and herbal supplements in various forms"
    },
    {
      image: "https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Minerals in Your Day",
      snippet: "Practical ways minerals show up in everyday wellness habits—simple and approachable.",
      alt: "Mineral supplements and natural sources on wooden background"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Learn & News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.snippet}
                </p>
                <button className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnNews;