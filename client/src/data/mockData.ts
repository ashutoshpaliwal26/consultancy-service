import type { Client, Consultation, RevenueData, Notification, DashboardStats } from '../types';
import { addDays, format, subDays } from 'date-fns';

// Generate dates for the past week
const generatePastDates = (days: number) => {
  return Array.from({ length: days }).map((_, i) => {
    return format(subDays(new Date(), days - 1 - i), 'yyyy-MM-dd');
  });
};

// Generate dates for the upcoming week
const generateUpcomingDates = (days: number) => {
  return Array.from({ length: days }).map((_, i) => {
    return format(addDays(new Date(), i), 'yyyy-MM-dd');
  });
};

const pastDates = generatePastDates(7);
const upcomingDates = generateUpcomingDates(7);

export const clients: Client[] = [
  {
    id: '1',
    name: 'Ashutosh Paliwal',
    email: 'ashutoshpaliwal26@gmail.com',
    phone: '6367180418',
    company: '',
    status: 'active',
    totalSpent: 0,
    consultations: 0
  },
  // {
  //   id: '2',
  //   name: 'Alex Morgan',
  //   email: 'alex.morgan@example.com',
  //   phone: '(555) 234-5678',
  //   company: 'Global Tech',
  //   status: 'active',
  //   totalSpent: 8750,
  //   consultations: 5
  // },
  // {
  //   id: '3',
  //   name: 'Robert Chen',
  //   email: 'robert.chen@example.com',
  //   phone: '(555) 345-6789',
  //   company: 'Innovate Solutions',
  //   status: 'pending',
  //   totalSpent: 1500,
  //   consultations: 1
  // },
  // {
  //   id: '4',
  //   name: 'Sophia Martinez',
  //   email: 'sophia.m@example.com',
  //   phone: '(555) 456-7890',
  //   company: 'Creative Agency',
  //   status: 'active',
  //   totalSpent: 9800,
  //   consultations: 6
  // },
  // {
  //   id: '5',
  //   name: 'Michael Johnson',
  //   email: 'michael.j@example.com',
  //   phone: '(555) 567-8901',
  //   company: 'Johnson & Co',
  //   status: 'inactive',
  //   totalSpent: 4500,
  //   consultations: 3
  // }
];

export const consultations: Consultation[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'Jane Cooper',
    date: upcomingDates[0],
    time: '10:00 AM',
    duration: 60,
    status: 'upcoming',
    type: 'Business Strategy',
    notes: 'Discuss Q3 marketing strategy',
    amount: 100
  },
  // {
  //   id: '2',
  //   clientId: '2',
  //   clientName: 'Alex Morgan',
  //   date: upcomingDates[1],
  //   time: '2:30 PM',
  //   duration: 90,
  //   status: 'upcoming',
  //   type: 'Financial Planning',
  //   notes: 'Review investment portfolio',
  //   amount: 2250
  // },
  // {
  //   id: '3',
  //   clientId: '4',
  //   clientName: 'Sophia Martinez',
  //   date: upcomingDates[2],
  //   time: '11:00 AM',
  //   duration: 60,
  //   status: 'upcoming',
  //   type: 'Brand Strategy',
  //   notes: 'Brand refresh discussion',
  //   amount: 1800
  // },
  // {
  //   id: '4',
  //   clientId: '3',
  //   clientName: 'Robert Chen',
  //   date: upcomingDates[4],
  //   time: '3:00 PM',
  //   duration: 45,
  //   status: 'upcoming',
  //   type: 'Technical Consultation',
  //   notes: 'Initial project scope',
  //   amount: 1500
  // },
  // {
  //   id: '5',
  //   clientId: '1',
  //   clientName: 'Jane Cooper',
  //   date: pastDates[5],
  //   time: '9:00 AM',
  //   duration: 60,
  //   status: 'completed',
  //   type: 'Business Strategy',
  //   notes: 'Reviewed business plan',
  //   amount: 1500
  // },
  // {
  //   id: '6',
  //   clientId: '4',
  //   clientName: 'Sophia Martinez',
  //   date: pastDates[2],
  //   time: '1:00 PM',
  //   duration: 60,
  //   status: 'completed',
  //   type: 'Brand Strategy',
  //   notes: 'Competitor analysis',
  //   amount: 1800
  // },
  // {
  //   id: '7',
  //   clientId: '2',
  //   clientName: 'Alex Morgan',
  //   date: pastDates[1],
  //   time: '10:30 AM',
  //   duration: 45,
  //   status: 'cancelled',
  //   type: 'Financial Planning',
  //   notes: 'Cancelled by client',
  //   amount: 0
  // }
];

export const revenueData: RevenueData[] = [
  { date: pastDates[0], amount: 1200 },
  { date: pastDates[1], amount: 1800 },
  { date: pastDates[2], amount: 2400 },
  { date: pastDates[3], amount: 1900 },
  { date: pastDates[4], amount: 2700 },
  { date: pastDates[5], amount: 1500 },
  { date: pastDates[6], amount: 2000 }
];

export const notifications: Notification[] = [
  {
    id: '1',
    message: 'Login Successfully',
    date: upcomingDates[0],
    read: false,
    type: 'consultation'
  },
  // {
  //   id: '2',
  //   message: 'New client registration: Robert Chen',
  //   date: pastDates[1],
  //   read: true,
  //   type: 'client'
  // },
  // {
  //   id: '3',
  //   message: 'Payment received from Sophia Martinez: $1,800',
  //   date: pastDates[2],
  //   read: true,
  //   type: 'payment'
  // },
  // {
  //   id: '4',
  //   message: 'System update scheduled for tomorrow at 2:00 AM',
  //   date: upcomingDates[1],
  //   read: false,
  //   type: 'system'
  // },
  // {
  //   id: '5',
  //   message: 'Alex Morgan cancelled their appointment',
  //   date: pastDates[1],
  //   read: true,
  //   type: 'consultation'
  // }
];

export const dashboardStats: DashboardStats = {
  totalClients: 0,
  activeClients: 0,
  upcomingConsultations: 0,
  monthlyRevenue: 0,
  yearlyRevenue: 0,
  growthRate: 0
};