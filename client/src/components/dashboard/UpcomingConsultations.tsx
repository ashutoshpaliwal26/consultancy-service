import React from 'react';
import { consultations } from '../../data/mockData';
import { Calendar, Clock, User, FileText } from 'lucide-react';

const UpcomingConsultations: React.FC = () => {
  // Filter upcoming consultations and sort by date
  const upcoming = consultations
    .filter(c => c.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Upcoming Consultations</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {upcoming.length === 0 ? (
          <p className="px-6 py-4 text-sm text-gray-500">No upcoming consultations</p>
        ) : (
          upcoming.map((consultation) => (
            <div key={consultation.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar size={16} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">{consultation.type}</h3>
                    <div className="mt-1 flex items-center">
                      <User size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{consultation.clientName}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-sm text-gray-900">
                    <Clock size={14} className="mr-1 text-gray-400" />
                    {consultation.time} ({consultation.duration} min)
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {consultation.date}
                  </div>
                </div>
              </div>
              
              {consultation.notes && (
                <div className="mt-3 ml-14 flex items-start">
                  <FileText size={14} className="text-gray-400 mr-1 mt-0.5" />
                  <span className="text-sm text-gray-600">{consultation.notes}</span>
                </div>
              )}
              
              <div className="mt-3 ml-14">
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded-md transition-colors">
                    View Details
                  </button>
                  <button className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-medium rounded-md transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          View All Consultations
        </a>
      </div>
    </div>
  );
};

export default UpcomingConsultations;