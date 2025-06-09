import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactButtons = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
      <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <Phone className="h-6 w-6" />
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <Mail className="h-6 w-6" />
      </button>
      <button className="bg-green-400 hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition-all duration-300">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ContactButtons;