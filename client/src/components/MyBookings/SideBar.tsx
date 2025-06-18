import { Calendar, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sidebar Component
interface SidebarProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  userProfile: UserProfile;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
}

type ActivePage = 'bookings' | 'edit-account' | 'change-password';

const SideBar: React.FC<SidebarProps> = ({ activePage, onPageChange, userProfile }) => {
  const menuItems = [
    { key: 'bookings' as ActivePage, icon: Calendar, label: 'My Appointments' },
    { key: 'edit-account' as ActivePage, icon: User, label: 'Edit Account' },
    { key: 'change-password' as ActivePage, icon: Lock, label: 'Change Password' },
  ];
  const handleLogout = () => {
    localStorage.clear();
    location.href = "/";
  };

  return (
    <div className="w-1/4 bg-white shadow-sm min-h-screen">
      <div className="p-6">
        {/* User Profile */}
        <div className="flex items-center mb-6 gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{userProfile.name}</div>
            <div className="text-sm text-gray-500">{userProfile.email}</div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activePage === item.key
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {/* <Icon className="w-5 h-5 mr-3" /> */}
                {item.label}
              </button>
            );
          })}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;