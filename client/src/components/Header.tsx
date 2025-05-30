import React, { useState } from 'react';
import { Bell, User, LogOut, Search, Menu } from 'lucide-react';
import { notifications } from '../data/mockData';


interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notification, setNotification] = useState([])
  
  const unreadNotifications = notifications.filter(n => !n.read);

  return (
    <header className="bg-white border-b border-gray-200 flex justify-between items-center px-4 py-3 sm:px-6 sticky top-0 z-10">
      <div className="flex items-center">
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 mr-4"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        
        <div className="relative flex-1 max-w-xs sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button 
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full relative"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
          >
            <Bell size={20} />
            {unreadNotifications.length > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
                {unreadNotifications.length}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {true ? (
                  <p className="px-4 py-2 text-sm text-gray-500">No notifications</p>
                ) : (
                  notifications.slice(0, 5).map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                    >
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="px-4 py-2 border-t border-gray-200">
                <a href="#" className="text-xs text-blue-600 hover:text-blue-800">View all notifications</a>
              </div>
            </div>
          )}
        </div>
        
        {/* User Menu */}
        <div className="relative">
          <button 
            className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              {false ? (
                <img src={"/img/good.jpg"} alt={"this is a image"} className="h-8 w-8 rounded-full" />
              ) : (
                <User size={20} className="text-gray-500" />
              )}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:block">{"Ashutosh Paliwal"}</span>
          </button>
          
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Your Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Settings
              </a>
              <button 
                onClick={() => {}}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;