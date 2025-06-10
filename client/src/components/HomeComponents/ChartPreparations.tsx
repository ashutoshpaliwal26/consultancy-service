import React from 'react';
import { ArrowRight } from 'lucide-react';

const ChartPreparations: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-red-800 mb-6 leading-tight">
                Your chart, Our preparations
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-2">
                <p>
                  The depth of insight possible through astrology consultation online 
                  requires proper preparation. Unlike services offering instant 
                  readings, we honor the complexity of your jyotish by requesting 
                  birth details at least 24 hours before your session. This essential 
                  preparation period allows your dedicated astrologer to commune 
                  deeply with your chart exploring planetary positions, house 
                  placements, and karmic patterns with the reverence they deserve.
                </p>
                
                <p>
                  So when you{' '}
                  <span className="font-semibold text-gray-900">talk to astrologer</span>, 
                  this thorough preparation ensures every moment of your session 
                  delivers maximum illumination.
                </p>
              </div>
            </div>

            <div>
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8927728/pexels-photo-8927728.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Astrologer studying charts and celestial patterns"
                className="w-full h-full object-cover"
              />
              {/* Mystical overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-amber-400/20 rounded-2xl"></div>
              
              {/* Floating celestial elements */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-amber-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/3 left-6 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPreparations;