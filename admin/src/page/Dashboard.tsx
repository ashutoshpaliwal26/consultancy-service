import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import ClientsOverview from '../components/dashboard/ClientsOverview';
import UpcomingConsultations from '../components/dashboard/UpcomingConsultations';
import RevenueAnalytics from '../components/dashboard/RevenueAnalytics';
import { dashboardStats } from '../data/mockData';
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome back! Here's an overview of your consultancy business.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Clients"
          value={dashboardStats.totalClients}
          icon={<Users size={18} />}
          change={0}
          color="blue"
        />
        
        <StatCard
          title="Active Clients"
          value={dashboardStats.activeClients}
          icon={<Users size={18} />}
          change={0}
          color="teal"
        />
        
        <StatCard
          title="Upcoming Consultations"
          value={dashboardStats.upcomingConsultations}
          icon={<Calendar size={18} />}
          change={0}
          color="purple"
        />
        
        <StatCard
          title="Monthly Revenue"
          value={`$${dashboardStats.monthlyRevenue.toLocaleString()}`}
          icon={<DollarSign size={18} />}
          change={0}
          color="amber"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueAnalytics />
          <div className="mt-6">
            <ClientsOverview />
          </div>
        </div>
        
        <div>
          <UpcomingConsultations />
          
          {/* Growth Summary */}
          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-50 text-green-700">
                <TrendingUp size={18} />
              </div>
              <h2 className="ml-3 text-lg font-medium text-gray-800">Growth Summary</h2>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Overall Growth</span>
                <span className="text-sm font-medium text-gray-900">{dashboardStats.growthRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${dashboardStats.growthRate}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-xs text-gray-500">Yearly Revenue</p>
                <p className="text-lg font-semibold text-gray-900">${dashboardStats.yearlyRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-xs text-gray-500">Client Retention</p>
                <p className="text-lg font-semibold text-gray-900">0</p>
              </div>
            </div>
            
            <div className="mt-4">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                View detailed report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;