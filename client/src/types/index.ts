export interface UserType {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'super-admin';
  avatar?: string;
  bio : string,
  phone_no : string,
  company : string
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  totalSpent: number;
  consultations: number;
}

export interface Consultation {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  duration: number; // in minutes
  status: 'upcoming' | 'completed' | 'cancelled';
  type: string;
  notes?: string;
  amount: number;
}

export interface RevenueData {
  date: string;
  amount: number;
}

export interface Notification {
  id: string;
  message: string;
  date: string;
  read: boolean;
  type: 'consultation' | 'payment' | 'client' | 'system';
}

export interface DashboardStats {
  totalClients: number;
  activeClients: number;
  upcomingConsultations: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  growthRate: number;
}


export interface AuthFormType{
    name? : string,
    email : string,
    password : string,
    confirmPassword? : string
}

export interface UserSettings {
    name : string,
    email : string,
    phone : string,
    company : string,
    bio : string,
}