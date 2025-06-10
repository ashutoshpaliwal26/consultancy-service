import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "How to Book a Consultation with Lunar Astro?",
      answer: (
        <div className="space-y-4">
          <p>To talk to our astrologers, follow these steps:</p>
          
          <div className="space-y-3 ml-4">
            <div>
              <span className="font-medium">1. Select the </span>
              <span className="text-red-600 font-medium">Astrology Service</span>
              <span>: Choose the purpose of your consultation.</span>
            </div>
            
            <div>
              <span className="font-medium">2. Choose the Astrologer:</span>
            </div>
            
            <div className="ml-4 space-y-2">
              <div>
                <span>– If this is a </span>
                <span className="text-red-600">re-consultation</span>
                <span>, select the </span>
                <span className="text-blue-600">astrologer code</span>
                <span>.</span>
              </div>
              
              <div>
                <span>– If this is your first consultation, select "Provide me the best astrologer."</span>
              </div>
            </div>
            
            <div>
              <span className="font-medium">3. Select Date and Time:</span>
              <span> Choose a convenient date and time to book your slot.</span>
            </div>
            
            <div>
              <span className="font-medium">4. Fill in Your Details:</span>
              <span> Provide your personal information.</span>
            </div>
            
            <div>
              <span className="font-medium">5. Confirm Your Appointment:</span>
              <span> Verify all details in the final step.</span>
            </div>
            
            <div>
              <span className="font-medium">6. Make the Payment:</span>
              <span> Complete the payment process to confirm your booking.</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-700">
            Once these steps are completed, your consultation with Lunar Astro will be confirmed. 
            Please note that you must be present at your chosen appointment time. No re-consultation 
            will be provided if you miss the consultation window.
          </p>
        </div>
      )
    },
    {
      question: "How to Talk To an Astrologer For Free?",
      answer: (
        <div>
          <p>Information about free consultations and how to access them would be provided here.</p>
        </div>
      )
    },
    {
      question: "Do you provide urgent consultations with a timeline of less than 2 days?",
      answer: (
        <div>
          <p>Details about urgent consultation availability and scheduling would be provided here.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            Frequently Asked Astrology Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {openItems.includes(index) ? '−' : '+'} {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {/* Answer Content */}
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;