import { useEffect, useState } from "react";
import SideBar from "../components/MyBookings/SideBar";
import MyBookingsMain from "../components/MyBookings/MyBookingsMain";
import EditAccount from "../components/MyBookings/EditAccount";
import ChangePassword from "../components/MyBookings/ChangePassword";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../context/AuthContext";


interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
  place_of_birth: string;
  time_of_birth?: string;
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
    name: 'Ashutosh Paliwal',
    email: 'ashutoshpaliwal@gmail.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Jaipur, Rajasthan, India',
    date_of_birth: '1995-06-15',
    place_of_birth: "Bhilwara",
    time_of_birth : "00:00"
  });
  const [appointments] = useState<Appointment[]>([]);
  const { isAuthorized } = useAuthenticate();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/auth/login")
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <hr />
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