'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Bell, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Guard, processLicenseReminders } from '@/services/licenseReminder';

export default function LicenseMonitoringPage() {
  const [guards, setGuards] = useState<Guard[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'expiring-soon', 'expired'
  const [remindersSent, setRemindersSent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);

  // Simulate fetching guard data
  useEffect(() => {
    // In a real app, this would fetch from an API
    const mockGuards: Guard[] = [
      {
        id: 'g1',
        fullName: 'John Smith',
        email: 'john.smith@example.com',
        phone: '(416) 555-1234',
        licenseExpiryDate: new Date(Date.now() + 85 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 85 days from now
      },
      {
        id: 'g2',
        fullName: 'Maria Garcia',
        email: 'maria.garcia@example.com',
        phone: '(647) 555-5678',
        licenseExpiryDate: new Date(Date.now() + 62 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 62 days from now
      },
      {
        id: 'g3',
        fullName: 'Amir Patel',
        email: 'amir.patel@example.com',
        phone: '(905) 555-9012',
        licenseExpiryDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 32 days from now
      },
      {
        id: 'g4',
        fullName: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        phone: '(289) 555-3456',
        licenseExpiryDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 days from now
      },
      {
        id: 'g5',
        fullName: 'Michael Wong',
        email: 'michael.wong@example.com',
        phone: '(416) 555-7890',
        licenseExpiryDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days ago (expired)
      },
    ];

    setGuards(mockGuards);
    setLoading(false);
  }, []);

  const handleSendReminders = async () => {
    setIsProcessing(true);
    setProcessingComplete(false);
    
    // In a real app, this would process actual reminders
    try {
      const sentCount = await processLicenseReminders(guards);
      setRemindersSent(sentCount);
      setProcessingComplete(true);
    } catch (error) {
      console.error('Failed to process reminders:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getDaysDifference = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (daysDiff: number) => {
    if (daysDiff < 0) {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Expired</span>;
    } else if (daysDiff <= 30) {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Critical</span>;
    } else if (daysDiff <= 60) {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Warning</span>;
    } else if (daysDiff <= 90) {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Upcoming</span>;
    } else {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Valid</span>;
    }
  };

  const filteredGuards = guards.filter(guard => {
    const daysDiff = getDaysDifference(guard.licenseExpiryDate);
    
    if (filter === 'all') return true;
    if (filter === 'expiring-soon') return daysDiff > 0 && daysDiff <= 90;
    if (filter === 'expired') return daysDiff <= 0;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Security License Monitoring</h1>
              <p className="text-gray-600">
                Track and manage security guard license expirations and automated reminders
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">License Expiration Reminder System</h2>
                  <p className="text-gray-600">
                    Guards receive automated reminders at 90, 60, and 30 days before their license expires
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button 
                    onClick={handleSendReminders}
                    disabled={isProcessing}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                  >
                    <Bell className="h-4 w-4" />
                    <span>{isProcessing ? 'Processing...' : 'Process Reminders'}</span>
                  </Button>
                </div>
              </div>
              
              {processingComplete && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-800">
                        Successfully sent reminders to {remindersSent} guards with upcoming license expirations.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Automated Reminder Schedule
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>First reminder: 90 days before expiration</li>
                        <li>Second reminder: 60 days before expiration</li>
                        <li>Final reminder: 30 days before expiration</li>
                        <li>Additional alerts for licenses expiring within 14 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Security Guard Licenses</h2>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Licenses</option>
                    <option value="expiring-soon">Expiring Soon (90 Days)</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>
              
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Loading license data...</p>
                </div>
              ) : (
                <>
                  {filteredGuards.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No licenses match your filter criteria.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Guard
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Contact
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              License Expiry
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Days Remaining
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredGuards.map((guard) => {
                            const daysDiff = getDaysDifference(guard.licenseExpiryDate);
                            
                            return (
                              <tr key={guard.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                      <Shield className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {guard.fullName}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        ID: {guard.id}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{guard.email}</div>
                                  <div className="text-sm text-gray-500">{guard.phone}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{guard.licenseExpiryDate}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {getStatusBadge(daysDiff)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className={`text-sm font-medium ${
                                    daysDiff < 0 ? 'text-red-600' : 
                                    daysDiff <= 30 ? 'text-yellow-600' : 
                                    daysDiff <= 60 ? 'text-orange-600' : 
                                    daysDiff <= 90 ? 'text-blue-600' : 
                                    'text-green-600'
                                  }`}>
                                    {daysDiff < 0 ? `${Math.abs(daysDiff)} days overdue` : `${daysDiff} days`}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <button className="text-blue-600 hover:text-blue-800">
                                    Send Reminder
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
