'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format, addDays } from 'date-fns';
import { Shield, Clock, Calendar, CreditCard, FileText, LogOut, Bell } from 'lucide-react';

// Import dashboard components
import WeeklySchedule, { Shift } from '@/components/dashboard/WeeklySchedule';
import OpenShifts, { OpenShift } from '@/components/dashboard/OpenShifts';
import TimeTracking, { TimeEntry } from '@/components/dashboard/TimeTracking';
import PaymentInfo, { Paystub, BankAccount } from '@/components/dashboard/PaymentInfo';
import TaxDocuments, { TaxDocument } from '@/components/dashboard/TaxDocuments';

export default function GuardDashboard() {
  // Current date for simulation
  const currentDate = new Date();
  const formattedCurrentDate = format(currentDate, 'yyyy-MM-dd');
  
  // Mock data for weekly schedule
  const [scheduledShifts, setScheduledShifts] = useState<Shift[]>([
    {
      id: 's1',
      date: formattedCurrentDate,
      startTime: '09:00',
      endTime: '17:00',
      employer: 'City Convention Center',
      location: '123 Main St, Downtown',
      position: 'Event Security',
      status: 'scheduled'
    },
    {
      id: 's2',
      date: format(addDays(currentDate, 2), 'yyyy-MM-dd'),
      startTime: '08:00',
      endTime: '16:00',
      employer: 'Corporate Tower',
      location: '456 Business Ave',
      position: 'Corporate Security',
      status: 'scheduled'
    },
    {
      id: 's3',
      date: format(addDays(currentDate, 4), 'yyyy-MM-dd'),
      startTime: '18:00',
      endTime: '02:00',
      employer: 'Nightclub Ultra',
      location: '789 Party Blvd',
      position: 'Doorman',
      status: 'scheduled'
    }
  ]);

  // Mock data for open shifts
  const [currentWeekOpenShifts, setCurrentWeekOpenShifts] = useState<OpenShift[]>([
    {
      id: 'o1',
      employer: 'Major Shopping Mall',
      location: '100 Retail Drive',
      date: format(addDays(currentDate, 1), 'yyyy-MM-dd'),
      startTime: '10:00',
      endTime: '18:00',
      duration: '8 hrs',
      position: 'Retail Security',
      hourlyRate: 22.50,
      requirements: ['Security License', '1+ years retail experience']
    },
    {
      id: 'o2',
      employer: 'Office Complex',
      location: '200 Business Park',
      date: format(addDays(currentDate, 3), 'yyyy-MM-dd'),
      startTime: '07:00',
      endTime: '15:00',
      duration: '8 hrs',
      position: 'Access Control Officer',
      hourlyRate: 24.00,
      requirements: ['Security License', 'Access Control Experience']
    }
  ]);
  
  const [nextWeekOpenShifts, setNextWeekOpenShifts] = useState<OpenShift[]>([
    {
      id: 'o3',
      employer: 'Tech Conference',
      location: 'Convention Center',
      date: format(addDays(currentDate, 8), 'yyyy-MM-dd'),
      startTime: '08:00',
      endTime: '16:00',
      duration: '8 hrs',
      position: 'Event Security',
      hourlyRate: 25.00,
      requirements: ['Security License', 'Event Security Experience']
    },
    {
      id: 'o4',
      employer: 'Downtown Hotel',
      location: '300 Hospitality Ave',
      date: format(addDays(currentDate, 10), 'yyyy-MM-dd'),
      startTime: '16:00',
      endTime: '00:00',
      duration: '8 hrs',
      position: 'Hotel Security',
      hourlyRate: 23.50,
      requirements: ['Security License', 'Customer Service Skills']
    }
  ]);

  // Mock data for time tracking
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    {
      id: 't1',
      shiftId: 'past1',
      employer: 'Downtown Office Building',
      date: format(addDays(currentDate, -2), 'yyyy-MM-dd'),
      clockInTime: '08:03',
      clockOutTime: '16:05',
      status: 'completed',
      location: '123 Business St',
      position: 'Corporate Security'
    },
    {
      id: 't2',
      shiftId: 'past2',
      employer: 'Weekend Mall',
      date: format(addDays(currentDate, -1), 'yyyy-MM-dd'),
      clockInTime: '10:00',
      clockOutTime: '18:15',
      status: 'completed',
      location: '456 Shopping Ave',
      position: 'Retail Security'
    }
  ]);
  
  const [activeShift, setActiveShift] = useState<TimeEntry | null>(null);

  // Mock data for payment info
  const [paystubs, setPaystubs] = useState<Paystub[]>([
    {
      id: 'p1',
      periodStart: format(addDays(currentDate, -15), 'yyyy-MM-dd'),
      periodEnd: format(addDays(currentDate, -1), 'yyyy-MM-dd'),
      issueDate: formattedCurrentDate,
      employer: 'GuardFlex Inc.',
      hoursWorked: 80,
      regularPay: 1920.00,
      overtimePay: 135.00,
      totalGross: 2055.00,
      totalDeductions: 493.20,
      netPay: 1561.80,
      status: 'processed'
    },
    {
      id: 'p2',
      periodStart: format(addDays(currentDate, -31), 'yyyy-MM-dd'),
      periodEnd: format(addDays(currentDate, -16), 'yyyy-MM-dd'),
      issueDate: format(addDays(currentDate, -14), 'yyyy-MM-dd'),
      employer: 'GuardFlex Inc.',
      hoursWorked: 76,
      regularPay: 1824.00,
      overtimePay: 0,
      totalGross: 1824.00,
      totalDeductions: 437.76,
      netPay: 1386.24,
      status: 'processed'
    }
  ]);
  
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: 'b1',
      accountName: 'John Smith',
      accountNumber: '5678',
      institution: 'Royal Bank of Canada',
      routingNumber: '4321',
      accountType: 'checking',
      isDefault: true
    }
  ]);

  // Mock data for tax documents
  const [taxDocuments, setTaxDocuments] = useState<TaxDocument[]>([
    {
      id: 'tax1',
      type: 'T4',
      year: '2024',
      issueDate: '2025-02-28',
      employer: 'GuardFlex Inc.',
      description: 'T4 Statement of Remuneration Paid',
      fileName: 'T4_2024_12345678.pdf'
    },
    {
      id: 'tax2',
      type: 'ROE',
      year: '2024',
      issueDate: '2024-12-15',
      employer: 'Security Solutions Inc.',
      description: 'Record of Employment',
      fileName: 'ROE_2024_Security_Solutions.pdf'
    }
  ]);

  // Function handlers
  const handleClockIn = (shiftId: string) => {
    const shift = scheduledShifts.find(s => s.id === shiftId);
    if (shift) {
      const newTimeEntry: TimeEntry = {
        id: `time-${Date.now()}`,
        shiftId: shiftId,
        employer: shift.employer,
        date: shift.date,
        clockInTime: format(new Date(), 'HH:mm'),
        clockOutTime: null,
        status: 'active',
        location: shift.location,
        position: shift.position
      };
      
      setActiveShift(newTimeEntry);
      
      // Update shift status
      setScheduledShifts(prev => 
        prev.map(s => s.id === shiftId ? {...s, status: 'scheduled'} : s)
      );
    }
  };
  
  const handleClockOut = () => {
    if (activeShift) {
      const updatedEntry = {
        ...activeShift,
        clockOutTime: format(new Date(), 'HH:mm'),
        status: 'completed' as const
      };
      
      setTimeEntries(prev => [updatedEntry, ...prev]);
      setActiveShift(null);
      
      // Update shift status
      setScheduledShifts(prev => 
        prev.map(s => s.id === updatedEntry.shiftId ? {...s, status: 'completed'} : s)
      );
    }
  };
  
  const handleApplyForShift = (shiftId: string) => {
    // Logic to apply for an open shift
    alert(`Applied for shift ${shiftId}`);
    
    // Update shift listings
    const isCurrentWeek = currentWeekOpenShifts.some(s => s.id === shiftId);
    
    if (isCurrentWeek) {
      setCurrentWeekOpenShifts(prev => prev.filter(s => s.id !== shiftId));
    } else {
      setNextWeekOpenShifts(prev => prev.filter(s => s.id !== shiftId));
    }
  };
  
  const handleDownloadPaystub = (paystubId: string) => {
    // Logic to download paystub
    alert(`Downloading paystub ${paystubId}`);
  };
  
  const handleAddBankAccount = () => {
    // Logic to add bank account
    alert('Bank account added successfully');
  };
  
  const handleSetDefaultAccount = (accountId: string) => {
    // Logic to set default account
    setBankAccounts(prev => 
      prev.map(acc => ({...acc, isDefault: acc.id === accountId}))
    );
  };
  
  const handleDeleteAccount = (accountId: string) => {
    // Logic to delete account
    setBankAccounts(prev => prev.filter(acc => acc.id !== accountId));
  };
  
  const handleDownloadTaxDocument = (documentId: string) => {
    // Logic to download tax document
    alert(`Downloading tax document ${documentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">GuardFlex</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-gray-900 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                  JS
                </div>
                <span className="text-sm font-medium text-gray-700">John Smith</span>
              </div>
              
              <button className="text-gray-600 hover:text-gray-900 flex items-center">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your security assignments</p>
        </div>
        
        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Scheduled Shifts</h3>
                <p className="text-2xl font-bold text-gray-900">{scheduledShifts.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Hours This Week</h3>
                <p className="text-2xl font-bold text-gray-900">24.5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Latest Pay</h3>
                <p className="text-2xl font-bold text-gray-900">${paystubs[0]?.netPay.toFixed(2) || '0.00'}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Available Shifts</h3>
                <p className="text-2xl font-bold text-gray-900">{currentWeekOpenShifts.length + nextWeekOpenShifts.length}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content with Tabs */}
        <Tabs defaultValue="schedule" className="mb-8">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="open-shifts">Open Shifts</TabsTrigger>
            <TabsTrigger value="time-tracking">Time Tracking</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="documents">Tax Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule">
            <WeeklySchedule 
              shifts={scheduledShifts}
              onClockIn={handleClockIn}
              onClockOut={handleClockOut}
            />
          </TabsContent>
          
          <TabsContent value="open-shifts">
            <OpenShifts 
              currentWeekShifts={currentWeekOpenShifts}
              nextWeekShifts={nextWeekOpenShifts}
              onApplyForShift={handleApplyForShift}
            />
          </TabsContent>
          
          <TabsContent value="time-tracking">
            <TimeTracking 
              timeEntries={timeEntries}
              activeShift={activeShift}
              onClockIn={handleClockIn}
              onClockOut={handleClockOut}
            />
          </TabsContent>
          
          <TabsContent value="payments">
            <PaymentInfo 
              paystubs={paystubs}
              bankAccounts={bankAccounts}
              onDownloadPaystub={handleDownloadPaystub}
              onAddBankAccount={handleAddBankAccount}
              onSetDefaultAccount={handleSetDefaultAccount}
              onDeleteAccount={handleDeleteAccount}
            />
          </TabsContent>
          
          <TabsContent value="documents">
            <TaxDocuments 
              documents={taxDocuments}
              onDownload={handleDownloadTaxDocument}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
