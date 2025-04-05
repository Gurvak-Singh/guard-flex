import React, { useState } from 'react';
import { format } from 'date-fns';

export interface TimeEntry {
  id: string;
  shiftId: string;
  employer: string;
  date: string;
  clockInTime: string;
  clockOutTime: string | null;
  status: 'active' | 'completed';
  location: string;
  position: string;
}

interface TimeTrackingProps {
  timeEntries: TimeEntry[];
  activeShift: TimeEntry | null;
  onClockIn: (shiftId: string) => void;
  onClockOut: () => void;
}

export default function TimeTracking({ timeEntries, activeShift, onClockIn, onClockOut }: TimeTrackingProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update the current time every minute
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Calculate total hours worked this week
  const calculateTotalHours = () => {
    return timeEntries.reduce((total, entry) => {
      if (entry.status === 'completed' && entry.clockOutTime) {
        const startTime = new Date(`${entry.date}T${entry.clockInTime}`);
        const endTime = new Date(`${entry.date}T${entry.clockOutTime}`);
        const hours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
        return total + hours;
      }
      return total;
    }, 0).toFixed(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Time Tracking</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-1">Current Status</h3>
          <p className="text-2xl font-bold text-blue-900">
            {activeShift ? 'On Shift' : 'Off Duty'}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-medium text-green-800 mb-1">Hours This Week</h3>
          <p className="text-2xl font-bold text-green-900">{calculateTotalHours()} hrs</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h3 className="font-medium text-purple-800 mb-1">Current Time</h3>
          <p className="text-2xl font-bold text-purple-900">{format(currentTime, 'h:mm a')}</p>
        </div>
      </div>
      
      {activeShift ? (
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Currently Working</h3>
              <p className="text-gray-700 font-medium">{activeShift.employer}</p>
              <p className="text-gray-600">{activeShift.position} at {activeShift.location}</p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Clocked in:</span> {format(new Date(`${activeShift.date}T${activeShift.clockInTime}`), 'h:mm a')}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Current duration:</span> {calculateDuration(activeShift.clockInTime)}
              </p>
            </div>
            
            <button
              onClick={onClockOut}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Clock Out
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-center">
          <p className="text-gray-600 mb-2">You are not currently clocked in to any shift.</p>
          <p className="text-gray-500 text-sm">When it's time for your next shift, you can clock in from the schedule section.</p>
        </div>
      )}
      
      <h3 className="font-semibold text-gray-900 mb-3">Recent Time Entries</h3>
      {timeEntries.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Employer</th>
                <th className="py-2 px-4 border-b text-left">Position</th>
                <th className="py-2 px-4 border-b text-left">Clock In</th>
                <th className="py-2 px-4 border-b text-left">Clock Out</th>
                <th className="py-2 px-4 border-b text-left">Hours</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry) => {
                const clockInDate = new Date(`${entry.date}T${entry.clockInTime}`);
                const clockOutDate = entry.clockOutTime 
                  ? new Date(`${entry.date}T${entry.clockOutTime}`) 
                  : null;
                
                const hours = clockOutDate 
                  ? ((clockOutDate.getTime() - clockInDate.getTime()) / (1000 * 60 * 60)).toFixed(1) 
                  : '-';
                
                return (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{format(new Date(entry.date), 'MMM d, yyyy')}</td>
                    <td className="py-2 px-4 border-b">{entry.employer}</td>
                    <td className="py-2 px-4 border-b">{entry.position}</td>
                    <td className="py-2 px-4 border-b">{format(clockInDate, 'h:mm a')}</td>
                    <td className="py-2 px-4 border-b">
                      {entry.clockOutTime ? format(clockOutDate!, 'h:mm a') : '-'}
                    </td>
                    <td className="py-2 px-4 border-b">{hours}</td>
                    <td className="py-2 px-4 border-b">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        entry.status === 'active' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {entry.status === 'active' ? 'Active' : 'Completed'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No recent time entries.</p>
      )}
    </div>
  );

  // Helper function to calculate duration from clock in time to now
  function calculateDuration(clockInTime: string): string {
    const startTime = new Date(`${new Date().toISOString().split('T')[0]}T${clockInTime}`);
    const now = new Date();
    
    const diffMs = now.getTime() - startTime.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${diffHrs}h ${diffMins}m`;
  }
}
