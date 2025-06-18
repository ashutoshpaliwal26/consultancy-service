import React, { useState, type ChangeEvent } from 'react';
import { User, LogIn, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '../../config/api';
import { AxiosError } from 'axios';
import type { AuthFormType } from '../../types';
import Cookies from 'js-cookie';

type ErrorResponse = {
    message : string,
    [key : string] : any
}

const SignupForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [formData, setFormData] = useState<AuthFormType>({
        name : "",
        email : "",
        password : "",
        confirmPassword : ""
    });
    const navigation = useNavigate();

    const handelChange = (e : ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setFormError("Password Not Match with Confirm Password");
            return;
            
        }
        setIsSubmitting(true);
        const data = {...formData, role : "admin"};
        try {
            const response = await apiClient.post("/signup", data);
            if (response.status === 200) {
                Cookies.set("uuid", response.data.token.access_token)
                window.localStorage.setItem("user_data" , JSON.stringify(response.data.user));
            }
            setFormData({
                name : "",
                email : "",
                password : "",
                confirmPassword : ""
            })
            navigation("/");
            setIsSubmitting(false);
        } catch (err) {
            const error = err as AxiosError<ErrorResponse, any>;
            if(error.response){
                setFormError(error.response.data.message);
            }
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                <p className="text-gray-600">Sign up for admin access</p>
            </div>

            {(formError) && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {formError}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-400" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handelChange}
                            className="pl-10 block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                            id="email"
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handelChange}
                            className="pl-10 block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LogIn size={18} className="text-gray-400" />
                        </div>
                        <input
                            id="password"
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handelChange}
                            className="pl-10 block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LogIn size={18} className="text-gray-400" />
                        </div>
                        <input
                            id="confirm-password"
                            type="password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handelChange}
                            className="pl-10 block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default SignupForm;