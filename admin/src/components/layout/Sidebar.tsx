import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart, 
  Settings, 
  HelpCircle, 
  Briefcase, 
  X,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const links = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Clients', icon: Users, path: '/clients' },
    { name: 'Consultations', icon: Calendar, path: '/consultations' },
    { name: 'Analytics', icon: BarChart, path: '/analytics' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help', icon: HelpCircle, path: '/help' }
  ];

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-20 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo and close button */}
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                <Briefcase size={18} className="text-white" />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">ConsultPro</span>
            </Link>
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={closeSidebar}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  flex items-center px-3 py-2.5 text-sm font-medium rounded-md group transition-colors
                  ${isActive(link.path) 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-50'}
                `}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    closeSidebar();
                  }
                }}
              >
                <link.icon 
                  size={18} 
                  className={`mr-3 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'}`} 
                />
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <a 
              href="#" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <HelpCircle size={16} className="mr-2" />
              Need Help?
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;