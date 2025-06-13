import { Calendar, Search } from "lucide-react";
import { useState } from "react";
import SideBar from "../components/MyBookings/SideBar";
import MyBookingHeader from "../components/MyBookings/MyBookingHeader";
import MyBookingsMain from "../components/MyBookings/MyBookingsMain";
import EditAccount from "../components/MyBookings/EditAccount";
import ChangePassword from "../components/MyBookings/ChangePassword";


interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
}

// Types
interface Appointment {
  id: string;
  date: string;
  time: string;
  service: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

type ActivePage = 'bookings' | 'edit-account' | 'change-password';

// Main Dashboard Component
const MyBookings: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>('bookings');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'ashutosh.paliwal',
    email: 'ashutoshpaliwal25@gmail.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Jaipur, Rajasthan, India',
    dateOfBirth: '1995-06-15'
  });
  const [appointments] = useState<Appointment[]>([]);

  const renderContent = () => {
    switch (activePage) {
      case 'bookings':
        return <MyBookingsMain appointments={appointments} />;
      case 'edit-account':
        return <EditAccount userProfile={userProfile} onUpdateProfile={setUserProfile} />;
      case 'change-password':
        return <ChangePassword />;
      default:
        return <MyBookingsMain appointments={appointments} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MyBookingHeader />
      <div className="flex">
        <SideBar
          activePage={activePage} 
          onPageChange={setActivePage} 
          userProfile={userProfile}
        />
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;