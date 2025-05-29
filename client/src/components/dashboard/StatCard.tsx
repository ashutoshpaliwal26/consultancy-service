import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeLabel?: string;
  changeTimeframe?: string;
  color: 'blue' | 'teal' | 'purple' | 'amber';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeLabel,
  changeTimeframe = 'from last month',
  color
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700',
    teal: 'bg-teal-50 text-teal-700',
    purple: 'bg-purple-50 text-purple-700',
    amber: 'bg-amber-50 text-amber-700'
  };
  
  const iconClass = colorClasses[color];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className={`p-2 rounded-full ${iconClass}`}>
          {icon}
        </div>
      </div>
      
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        
        {change !== undefined && (
          <div className="mt-2 flex items-center text-sm">
            {change >= 0 ? (
              <ArrowUp size={16} className="text-green-500 mr-1" />
            ) : (
              <ArrowDown size={16} className="text-red-500 mr-1" />
            )}
            
            <span 
              className={`font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {Math.abs(change)}%
            </span>
            
            {changeLabel && (
              <span className="ml-1 text-gray-500">{changeLabel}</span>
            )}
            
            {!changeLabel && (
              <span className="ml-1 text-gray-500">{changeTimeframe}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;