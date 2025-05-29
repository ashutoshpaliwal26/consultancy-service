import React from 'react';
import SignupForm from '../../components/auth/SignupForm';
import { Briefcase } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
            <Briefcase size={24} className="text-white" />
          </div>
        </div>
        <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-900">
          ConsultPro
        </h2>
        <p className="mt-1 text-center text-sm text-gray-600">
          Admin Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;