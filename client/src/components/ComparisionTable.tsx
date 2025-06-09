import React from 'react';
import { Check, X, Phone, Mail, MessageCircle, Star } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  lunarAstro: boolean;
  others: boolean;
  isHighlight?: boolean;
}

const ComparisonTable: React.FC = () => {
  const comparisonData: ComparisonItem[] = [
    { feature: "Provides consultation on video call", lunarAstro: true, others: false },
    { feature: "Astrologers demonstrate your chart via screensharing", lunarAstro: true, others: false },
    { feature: "Video recording of the consultation provided to the client", lunarAstro: true, others: false },
    { feature: "Post-consultation support if something is left", lunarAstro: true, others: false },
    { feature: "Consultants research on the chart before consultation (advance booking system)", lunarAstro: true, others: false },
    { feature: "Free astrology course to help you understand your own", lunarAstro: true, others: false, isHighlight: true },
    { feature: "Astrologers guided regularly by world-famous astrologer Deepanshu Giri Ji", lunarAstro: true, others: false },
    { feature: "Grievance cell to report any dissatisfaction", lunarAstro: true, others: false },
    { feature: "4.9-star rating on Google", lunarAstro: true, others: false, isHighlight: true }
  ];

  return (
    <div className="min-h-fit bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Highlights! How we're different?
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-100">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-red-700 to-red-800 text-white">
            <div className="p-6 md:col-span-1">
              <h2 className="text-xl font-semibold">Consultation Process and Value Added Services</h2>
            </div>
            <div className="p-6 text-center border-l border-red-600 bg-red-600">
              <h2 className="text-xl font-bold">Lunar Astro Consultation</h2>
            </div>
            <div className="p-6 text-center border-l border-red-600">
              <h2 className="text-xl font-semibold">Other Astrology Platforms</h2>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 hover:bg-red-25 transition-colors duration-200 ${
                  item.isHighlight ? 'bg-gradient-to-r from-red-25 to-orange-25' : ''
                }`}
              >
                <div className="p-6 md:col-span-1">
                  <p className={`text-gray-700 leading-relaxed ${
                    item.isHighlight ? 'font-medium text-red-700' : ''
                  }`}>
                    {item.feature}
                  </p>
                </div>
                <div className="p-6 text-center border-l border-gray-100 bg-green-25">
                  <div className="flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600 mr-2" />
                    <span className="text-green-700 font-semibold">Yes</span>
                  </div>
                </div>
                <div className="p-6 text-center border-l border-gray-100 bg-red-25">
                  <div className="flex items-center justify-center">
                    <X className="w-6 h-6 text-red-600 mr-2" />
                    <span className="text-red-700 font-semibold">No</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;