import React from 'react';

const TestimonialsMarquee = () => {
  const testimonials = [
    { id: 1, name: "volker-bln 9", gender: "male", title: "Highly recommended product", quote: "Quality product and not overpriced taken regularly. Does it help to lower diabetes levels somewhat? I was skeptical at first, but was proven wrong after three months." },
    { id: 2, name: "M van den Berg", gender: "male", title: "In my opinion, a good product.", quote: "I am not a specialist but I purchased the product to see how it works for my daughter with epilepsy, I observe her every day and I notice that since she has received 1 capsule a day, she has not had an epileptic seizure for a few days, even though she has had a regular seizure." },
    { id: 3, name: "H.G.", gender: "female", title: "Very effective", quote: "We have already bought these vitamins for the second time. They improve blood circulation, and well-being is also improved. We can absolutely recommend it. The price-performance ratio is right, shipping was immediate. Thank you so much!" },
    { id: 4, name: "roteblume", gender: "female", title: "Vit.B1", quote: "Delivery on time. I take Vit.B1 with 250 mg contents/capsule to cope with sensory disorders on the tips of my fingers. Together with physical therapy exercises, it seems to be working. The capsules are easy to swallow, the container is a dark brown plastic bottle, necessary as Vit B1 is sensitive to light/solar radiation." },
    { id: 5, name: "Amazon Kunde", gender: "male", title: "Home remedy", quote: "Finding is a good product. Nature is better than synthetic products (medicines) 🤓🤓🤓🤓🤓🤓🤓" },
    { id: 6, name: "Gigi", gender: "female", title: "Good value for money", quote: "I can't say much about the long-term effect, but the size and dosage are great." },
    { id: 7, name: "Elke", gender: "female", title: "Absolutely right now in autumn!", quote: "Especially now during the cold season, I swear by it. When I start to scratch my throat quietly or feel like I'm getting sick, I take these pills and everything will be all right again." },
    { id: 8, name: "Amazon Kunde", gender: "male", title: "Top price/performance 👍", quote: "I can't say much yet because I just received these Echinacea capsules last week, but last night I had burning eyes and runny nose. It's the first sign that I've caught something. Taken 1 tablet immediately. Slept well and no further symptoms yet. Unfortunately I have a very poor immune system in general and was really surprised this morning that there was immediate effect..." },
    { id: 9, name: "Alexander", gender: "male", title: "Actually works", quote: "I've been looking for a cheap alternative to liposomal silicon and am very satisfied. The product does indeed work. After taking them sporadically for less than 2 weeks, my nails are strong and elastic again, have grown long and do not split anymore. (Bonus... surprisingly, the lashes also grow)" },
    { id: 10, name: "Hannelore Koppenburg", gender: "female", title: "Quick delivery", quote: "They help me well. Was skeptical at first. One person found this helpful." }
  ];

  const getAvatarUrl = (gender, id) => {
    const seed = gender === 'male' ? `men/${id + 10}` : `women/${id + 10}`;
    return `https://randomuser.me/api/portraits/${seed}.jpg`;
  };

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What People Are Saying</h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {testimonials.concat(testimonials).map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 mx-3 w-80 md:w-96 lg:w-[420px] flex-shrink-0 min-h-[280px] flex flex-col justify-between">
              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-3 text-lg text-gray-900 leading-tight">{t.title}</h3>

              {/* Quote - Main content area with proper line height and spacing */}
              <div className="flex-grow mb-4">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Profile - Always at bottom */}
              <div className="flex items-center pt-3 border-t border-gray-100">
                <img
                  src={getAvatarUrl(t.gender, t.id)}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                />
                <p className="font-medium text-gray-900 text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 80s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsMarquee;