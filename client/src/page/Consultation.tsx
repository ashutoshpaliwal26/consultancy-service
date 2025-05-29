import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, Search, Filter, Plus } from 'lucide-react';
import { consultations } from '../data/mockData';
import { format } from 'date-fns';

const Consultations: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

    const filteredConsultations = consultations.filter(consultation => {
        const matchesSearch = consultation.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            consultation.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || consultation.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Consultations</h1>
                    <p className="text-sm text-gray-600 mt-1">Manage your consultation schedule</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors">
                    <Plus size={20} className="mr-2" />
                    Schedule Consultation
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search consultations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="sm:w-48">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value as any)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option value="all">All Status</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="divide-y divide-gray-200">
                    {filteredConsultations.map((consultation) => (
                        <div key={consultation.id} className="p-6 hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Calendar size={20} className="text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{consultation.type}</h3>
                                        <div className="mt-1 flex items-center text-sm text-gray-500">
                                            <User size={16} className="mr-1" />
                                            {consultation.clientName}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="flex items-center text-sm text-gray-900">
                                        <Clock size={16} className="mr-1" />
                                        {consultation.time} ({consultation.duration} min)
                                    </div>
                                    <div className="mt-1 text-sm text-gray-500">
                                        {consultation.date}
                                    </div>
                                </div>
                            </div>

                            {consultation.notes && (
                                <div className="mt-4 flex items-start text-sm text-gray-600">
                                    <FileText size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                                    {consultation.notes}
                                </div>
                            )}

                            <div className="mt-4 flex items-center justify-between">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                  ${consultation.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                                        consultation.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'}`}>
                                    {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                                </span>

                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium rounded-md transition-colors">
                                        View Details
                                    </button>
                                    {consultation.status === 'upcoming' && (
                                        <button className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-md transition-colors">
                                            Reschedule
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Consultations;