import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSrc from '../../../public/logo.avif';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* About Us Section */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center">
                  <img src={logoSrc} alt="" className='object-contain rounded-full' />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">ABOUT US</h3>
              <p className="text-gray-700 leading-relaxed">
                At Nakshatra Kripaa, we believe that life is not random it’s a sacred, cosmic journey guided by powerful celestial energies that shape our destiny.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">QUICK LINKS</h3>
              <div className="flex justify-center space-x-8">
                <div className="space-y-3">
                  <a href="#" className="block text-gray-700 hover:text-red-800 transition-colors">
                    • Privacy Policy
                  </a>
                </div>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-700 hover:text-red-800 transition-colors">
                    • About Us
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">SOCIAL CHANNELS</h4>
                <div className="flex justify-center space-x-3">
                  <Link target='_blank' to="https://www.instagram.com/nakshatrakripaa?igsh=aWVyOW16ZjU0MjZq" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </Link>
                  <Link target='_blank' to="https://www.facebook.com/share/1AsynSUeAu/" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </Link>
                  {/* <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a> */}
                  <Link to="https://youtube.com/@nakshatrakripaa?si=n6VuuKHYMZupqrLc" target='_blank' className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Youtube className="w-5 h-5 text-white" />
                  </Link>
                  {/* <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Play className="w-5 h-5 text-white" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Telegram Section */}
            <div className="text-center lg:text-right">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Join Whatsapp Group for daily astrology insights. Enhance your 
                  success with expert predictions.
                </p>
                <Link 
                  to="whatsapp:+916375656356" 
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Join On WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-red-800 text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:text-center mb-2 md:mb-0">
              <p className="text-sm">
                2025 ©Nakshatra Kripaa OPC Pvt. Ltd. All Rights Reserved
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;