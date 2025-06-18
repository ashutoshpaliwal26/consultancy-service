import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Banner */}
        <div className="bg-red-800 text-white py-6 px-8 rounded-t-lg relative overflow-hidden">
          {/* Help Desk Badge */}
          {/* <div className="absolute -top-2 -left-2 bg-black text-white px-4 py-2 text-sm font-bold transform -rotate-45 origin-top-left">
            HELP DESK
          </div> */}
          
          <div className="text-center ml-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Contact on these numbers to TALK TO ASTROLOGERS
            </h2>
            <p className="text-lg opacity-90">
              If You have any question or need assistance, Please don't hesitate to contact our helpline
            </p>
          </div>
        </div>

        {/* Contact Information Table */}
        <div className="bg-white border border-gray-200 rounded-b-lg overflow-hidden">
          {/* Consultation Row */}
          {/* <div className="border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 bg-gray-50 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Nakshatra Kripaa Consultation(Office Hour- 9AM-6PM):
                </h3>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                <a href="tel:+918650333201" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  +918650333201
                </a>
                <span className="text-gray-400">,</span>
                <a href="tel:+919258152002" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  +919258152002
                </a>
                <span className="text-gray-400">,</span>
                <a href="tel:+918650333211" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  +918650333211
                </a>
              </div>
            </div>
          </div> */}

          {/* Grievance Row */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 bg-gray-50 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Nakshatra Kripaa Contact :
                </h3>
              </div>
              <div className="p-6">
                <a href="tel:+916375656356" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  +91 6375656356
                </a>
              </div>
            </div>
          </div>

          {/* Email Row */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 bg-gray-50 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  E-mail Us On :
                </h3>
              </div>
              <div className="p-6">
                <a href="mailto:info@nakshatrakripaa.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                  info@nakshatrakripaa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;