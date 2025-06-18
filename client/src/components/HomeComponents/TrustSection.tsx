import React from 'react';
import {  ArrowRight } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8927657/pexels-photo-8927657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Trust and partnership in astrology consultation"
                className="w-full h-full object-cover"
              />
              {/* Overlay circle with zodiac symbols effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-amber-400/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why Trust{' '}
                <span className="text-amber-600">Nakshatra Kripaa</span>?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Nakshatra Kripaa we deeply care about our client's satisfaction. This is 
                the reason we handpick the{' '}
                <span className="font-semibold text-gray-900">best astrologers online</span>{' '}
                to help you with specific issues. In case you aren't satisfied with the 
                consultation, our team provides a re-consultation. Right now, we are 
                the only astrology platform to provide post-consultation support to 
                clients. Your trust is of utmost importance to us.
              </p>
            </div>

            <div>
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                Quick Booking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TrustSection;