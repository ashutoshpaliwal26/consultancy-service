import React from "react";

const caseStudies = [
  {
    title: "5 Deep Emotional Struggles of the Moon in the Soul: A Story of Cosmic Challenges and Inner Turmoil",
    date: "June 9, 2025",
    comments: 3,
    tag: "CASE STUDY",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    excerpt:
      "\"Chandramah Manso Jatah\" — from the ancient Purusha Sukta, this profound verse tells us that",
  },
  {
    title: "India’s Medical Milestones & Future of India’s Health",
    date: "June 7, 2025",
    comments: 2,
    tag: "CASE STUDY",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    excerpt:
      "The Lagna is the place where the consciousness takes the physical form and manifests in",
  },
  {
    title: "Pending Karma – Cancer Rashi and Pisces Navamsa",
    date: "June 7, 2025",
    comments: 1,
    tag: "CASE STUDY",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    excerpt:
      "Yesterday I was reading \"Predict using Nakshatra\"...",
  },
];

const AstrologyCaseStudies: React.FC = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-4">
        Astrology Consultation Case Studies
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-l-md w-72"
        />
        <button className="px-4 py-2 bg-gray-300 border border-l-0 rounded-r-md">
          🔍
        </button>
      </div>
      <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
        Welcome to the Lunar Astro Blog section, where we share transformative
        case studies and real-life examples from our clients’ astrological
        journeys. This section aims to provide you with a deeper understanding
        of how personalized astrological consultations can bring clarity and
        solutions to various life challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                {study.tag}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-md font-semibold text-red-600 mb-2">
                {study.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{study.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                READ MORE »
              </a>
              <div className="text-xs text-gray-500 mt-2">
                {study.date} • {study.comments} Comment
                {study.comments > 1 ? "s" : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstrologyCaseStudies;
