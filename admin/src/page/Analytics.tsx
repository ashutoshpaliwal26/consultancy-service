import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUp, ArrowDown, DollarSign, Users, Calendar } from 'lucide-react';

const Analytics: React.FC = () => {
  // Mock data for analytics
  const monthlyData = [
    { month: 'Jan', revenue: 0, clients: 0},
    // { month: 'Feb', revenue: 0, clients: 38 },
    // { month: 'Mar', revenue: 0, clients: 42 },
    // { month: 'Apr', revenue: 0, clients: 45 },
    // { month: 'May', revenue: 0, clients: 48 },
    // { month: 'Jun', revenue: 0, clients: 52 }
  ];

  const metrics = [
    {
      title: 'Total Revenue',
      value: '0',
      change: 0,
      icon: <DollarSign size={20} className="text-blue-600" />
    },
    {
      title: 'Active Clients',
      value: '0',
      change: 0,
      icon: <Users size={20} className="text-green-600" />
    },
    {
      title: 'Consultations',
      value: '0',
      change: 0,
      icon: <Calendar size={20} className="text-purple-600" />
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-600 mt-1">Track your business performance</p>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{metric.value}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
                {metric.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {metric.change >= 0 ? (
                <ArrowUp size={16} className="text-green-500" />
              ) : (
                <ArrowDown size={16} className="text-red-500" />
              )}
              <span className={`ml-1 text-sm font-medium ${
                metric.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {Math.abs(metric.change)}%
              </span>
              <span className="ml-1 text-sm text-gray-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Client Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Client Growth</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="clients" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;