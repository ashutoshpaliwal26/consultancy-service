import React from 'react';
import { revenueData } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const RevenueAnalytics: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Revenue Analytics</h2>
        <p className="text-sm text-gray-500 mt-1">Last 7 days</p>
      </div>
      
      <div className="p-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                tickFormatter={(value) => `$${value}`}
              />
              {/* <Tooltip 
                formatter={(value) => [`$${value}`, 'Revenue']}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              /> */}
              {/* <Bar 
                dataKey="amount" 
                fill="#3B82F6" 
                radius={[4, 4, 0, 0]}
                barSize={40}
              >
                <LabelList 
                  dataKey="amount" 
                  position="top" 
                  formatter={(value: any) => `$${value}`}
                  style={{ fontSize: '10px', fill: '#6B7280' }}
                />
              </Bar> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          Detailed Analytics
        </a>
        <div>
          <select className="text-sm border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;