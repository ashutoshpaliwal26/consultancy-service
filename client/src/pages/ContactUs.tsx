import { Mail, Phone, MapPin, Building } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-red-800 text-white py-4 px-6 relative">
        <div className="absolute left-0 top-0 bg-black text-white px-3 py-1 text-sm font-semibold transform -rotate-45 -translate-x-3 translate-y-3">
          HELPDESK
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm">If You have any question or need assistance, Please don't hesitate to contact our helpline</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700 w-1/3">
                  Nakshatra Kripaa Consultation:
                </td>
                <td className="px-6 py-4 text-blue-600">
                  +918650333201, +918650333211, +919258152002, +919258152003
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Nakshatra Kripaa Course Queries:
                </td>
                <td className="px-6 py-4 text-blue-600">
                  +918650333200, +919388847310, +918650333212, +919997247293, +919258152013
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Courier and Tracking:
                </td>
                <td className="px-6 py-4 text-blue-600">
                  +919258152013
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Grievance redressal and Complaint:
                </td>
                <td className="px-6 py-4 text-blue-600">
                  +918650333212
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Contact us Via Mail:
                </td>
                <td className="px-6 py-4">
                  <a href="mailto:info@nakshatrakripaa.com" className="text-blue-600 hover:text-blue-800">
                    info@nakshatrakripaa.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* Company Details Section */}
        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h2 className="text-xl font-bold text-gray-800 text-center">Company Details</h2>
          </div>
          
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700 w-1/4">
                  CIN
                </td>
                <td className="px-6 py-4 text-red-600 font-semibold">
                  U80902UP2010PTC161521
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Company Name
                </td>
                <td className="px-6 py-4 font-semibold">
                  Nakshatra Kripaa VEDIC ACADEMY (OPC) PRIVATE LIMITED
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Registration Number
                </td>
                <td className="px-6 py-4 font-semibold">
                  161521
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Registered address
                </td>
                <td className="px-6 py-4">
                  FIRST FLOOR, SHOP NO. 3, PACIFIC ESTATE, ANURAG NURSARY ROAD, VASANT VIHAR ROAD MAUZA, Dehradun, Uttarakhand, 248006
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700">
                  Branch address
                </td>
                <td className="px-6 py-4">
                  2nd Floor, Nakshatra Kripaa Vedic Academy, Cliff Tower, near{' '}
                  <span className="text-blue-600">Anurag Chowk</span>, Vasant Vihar,{' '}
                  <span className="text-blue-600">Mohit Nagar</span>, Dehradun,{' '}
                  <span className="text-blue-600">Uttarakhand 248006</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  */}

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Location</h3>
          </div>
          <div className="p-6">
            <div className="bg-green-100 rounded-lg p-8 min-h-64 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Nakshatra Kripaa Vedic Academy</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with us for personalized guidance in <br/>
                  Vedic astrology, numerology, and vastu shastra.<br/>
                   We're here to help you find clarity and purpose.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>+91 6375656356</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>info@nakshatrakripaa.com</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements to simulate map */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-sm">
                <Building className="h-5 w-5 text-gray-600" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded shadow-sm text-xs text-gray-600">
                Map View
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Phone className="mx-auto h-8 w-8 text-red-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
            <p className="text-sm text-gray-600 mb-2">For immediate assistance</p>
            <p className="text-blue-600 font-semibold">+91 6375656356</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Mail className="mx-auto h-8 w-8 text-red-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
            <p className="text-sm text-gray-600 mb-2">Send us your queries</p>
            <p className="text-blue-600 font-semibold">info@nakshatrakripaa.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MapPin className="mx-auto h-8 w-8 text-red-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Visit Us</h4>
            <p className="text-sm text-gray-600 mb-2">Come to our office</p>
            <p className="text-blue-600 font-semibold">Bhilwara, Rajasthan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;