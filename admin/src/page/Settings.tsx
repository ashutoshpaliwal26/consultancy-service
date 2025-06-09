import React, { useEffect, useState, type ChangeEvent } from 'react';
import { User, Mail, Lock, Bell, Shield, CreditCard, Phone, Trophy, Feather, FastForward } from 'lucide-react';
import { apiClient } from '../config/api';
import type { UserSettings } from '../types';

interface PasswordType {
  current_password: string,
  new_password: string,
  confirm_password: string
}

const Settings: React.FC = () => {
  const [user, setUser] = useState<UserSettings>({
    name: "",
    email: "",
    bio: "",
    company: "",
    phone: ""
  });
  const [password, setPassword] = useState<PasswordType>({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard }
  ];

  const get_cookies = async () => {
    const user = JSON.parse(window.localStorage.getItem('user_data') as string);
    await sendApi(user.email);
  }

  const sendApi = async (email: string) => {
    try {
      const responce = await apiClient.post("/get_user", { email });
      if (responce.status !== 200) {
        return;
      }
      const data: UserSettings = {
        name: responce.data.user.name,
        email: responce.data.user.email,
        phone: responce.data.user.phone,
        company: responce.data.user.company,
        bio: responce.data.user.bio,
      }
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  }

  const handelChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const savePassword = async () => {
    setLoading(true);
    try {
      if (password.new_password === password.confirm_password) {
        await apiClient.post('/change_password', {
          email : user.email,
          current_password : password.current_password,
          new_password : password.new_password
        })
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  const saveUser = async () => {
    setLoading(true);
    try {
      const responce = await apiClient.post('/update_user', user);
      const data: UserSettings = {
        name: responce.data.user.name,
        email: responce.data.user.email,
        phone: responce.data.user.phone,
        company: responce.data.user.company,
        bio: responce.data.user.bio,
      }
      setUser(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    get_cookies();
  }, [])

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="sm:flex">
          {/* Tabs */}
          <div className="sm:w-64 border-b sm:border-b-0 sm:border-r border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-6 py-4 text-sm font-medium ${activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <tab.icon size={20} className="mr-3" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl font-medium">
                      AP
                    </div>
                    <div className="ml-6">
                      <button className="bg-white border border-gray-300 text-sm font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                        Change Photo
                      </button>
                      <button className="ml-2 text-sm text-red-600 hover:text-red-700">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        name='name'
                        onChange={handelChange}
                        type="text"
                        value={user.name}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        name='email'
                        onChange={handelChange}
                        type="email"
                        value={user.email}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        name='phone'
                        onChange={handelChange}
                        type="tel"
                        value={user.phone}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        name='company'
                        onChange={handelChange}
                        type="text"
                        value={user.company}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name='bio'
                      rows={4}
                      onChange={handelChange}
                      defaultValue={user.bio}
                      value={user.bio}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button onClick={saveUser} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      {loading ? "Saveing..." : "Save Change"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      {['New consultation requests', 'Appointment reminders', 'Payment updates', 'System updates'].map((item) => (
                        <label key={item} className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Push Notifications</h3>
                    <div className="space-y-4">
                      {['Instant messages', 'Consultation alerts', 'Client updates'].map((item) => (
                        <label key={item} className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2 text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          name='current_password'
                          value={password.current_password}
                          onChange={passwordChange}
                          type="password"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          value={password.new_password}
                          name='new_password'
                          type="password"
                          onChange={passwordChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          name='confirm_password'
                          value={password.confirm_password}
                          type="password"
                          onChange={passwordChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button onClick={savePassword} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                          {loading ? "Saveing..." : "Save Change"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <button className="bg-white border border-gray-300 text-sm font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Billing Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Payment Method</h3>
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CreditCard size={20} className="text-gray-400" />
                          <span className="ml-2 text-sm text-gray-700">•••• •••• •••• 4242</span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Billing History</h3>
                    <div className="border rounded-md divide-y divide-gray-200">
                      {[
                        { date: '2024-02-01', amount: '$199.00', status: 'Paid' },
                        { date: '2024-01-01', amount: '$199.00', status: 'Paid' },
                        { date: '2023-12-01', amount: '$199.00', status: 'Paid' }
                      ].map((invoice, index) => (
                        <div key={index} className="p-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{invoice.date}</p>
                            <p className="text-sm text-gray-500">{invoice.amount}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-green-600 mr-4">{invoice.status}</span>
                            <button className="text-sm text-blue-600 hover:text-blue-700">
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;