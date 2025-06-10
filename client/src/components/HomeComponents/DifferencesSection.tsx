import React from 'react';

const DifferencesSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-800 mb-6 leading-tight">
            How Is Lunar Astro Different from Other Astrology Platforms?
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Lunar Astro stands apart from other astrology platforms in several ways.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* We care for our clients */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  We care for our clients
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Lunar Astro, we ensure that no client leaves empty-handed. Our expert astrologers take the time to 
                  deeply analyze your birth chart for 2-3 days before your online astrology consultation. This approach prevents rushed predictions 
                  and guarantees accurate, high-quality insights that truly address your concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Personalized process */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Instead of simply using a messaging platform where astrology consultations feel incomplete, Lunar Astro 
                  provides a Zoom video call session where your chart is displayed, and an astrologer helps you understand the placements that are 
                  causing issues and gives suitable remedies.
                </p>
              </div>
            </div>
          </div>

          {/* Post-consultation support */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Post-consultation support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most astrology platforms conclude their service once the consultation ends—but not Lunar Astro. 
                  We you{' '}
                  <span className="text-red-600 font-semibold">consult with astrologers</span>{' '}
                  at Lunar Astro, you get post-consultation email support, so if you have follow-up questions or 
                  need further clarity, you can reach out to us for continued guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Handpicked astrologer */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Handpicked astrologer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Several astrology platforms assign random astrologers for birth chart analysis without judging their 
                background. However, at Lunar Astro, we handpick our astrologer based on their quality of predictions, years of experience, and their 
                lifestyle. This means when you{' '}
                <span className="font-semibold text-gray-900">talk to an astrologer</span>{' '}
                you can rest assured that you are getting a properly trained astrologer only during 
                the consultation and not some random person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferencesSection;