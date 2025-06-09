import React from 'react';
import { Calendar, MessageCircle, Eye, ArrowRight, Phone, Mail } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  date: string;
  comments: number;
  views?: number;
  category: 'medical' | 'karma' | 'prediction' | 'case-study';
  image: string;
  isLarge?: boolean;
}

const CaseStudiesSection: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "India's Medical Milestones & Future of India's Health",
      date: "June 7, 2025",
      comments: 1,
      views: 1245,
      category: 'medical',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      isLarge: true
    },
    {
      id: 4,
      title: "Pending Karma - Key to Liberation - Case Study",
      date: "June 6, 2025",
      comments: 0,
      views: 734,
      category: 'case-study',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: "I Was Just Reading Her Chart... Until Lord Shiva Took Over",
      date: "June 5, 2025",
      comments: 1,
      views: 923,
      category: 'case-study',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'medical': return 'bg-blue-500';
      case 'karma': return 'bg-purple-500';
      case 'prediction': return 'bg-green-500';
      case 'case-study': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'medical': return 'bg-blue-50 text-blue-700';
      case 'case-study': return 'bg-orange-50 text-orange-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="min-h-1/2 bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 leading-tight">
            Case Studies and Research Articles based on our experience by our Expert Astrologers
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Featured Article */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={caseStudies[0].image} 
                  alt={caseStudies[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBg(caseStudies[0].category)}`}>
                    {caseStudies[0].category.charAt(0).toUpperCase() + caseStudies[0].category.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {caseStudies[0].title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {caseStudies[0].date}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {caseStudies[0].comments} Comment{caseStudies[0].comments !== 1 ? 's' : ''}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {caseStudies[0].views} Views
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Articles */}
          {caseStudies.slice(1).map((study) => (
            <div key={study.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryBg(study.category)}`}>
                      {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-3 group-hover:text-red-700 transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {study.date}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {study.comments}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {study.views} views
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
            View More
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;