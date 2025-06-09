import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { Briefcase } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
            <Briefcase size={24} className="text-white" />
          </div>
        </div>
        <p className="mt-1 text-center text-sm text-gray-600">
          Admin Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;