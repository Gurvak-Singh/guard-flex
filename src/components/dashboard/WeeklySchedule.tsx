import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';

export interface Shift {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  employer: string;
  location: string;
  position: string;
  status: 'scheduled' | 'completed' | 'missed' | 'canceled';
}

interface WeeklyScheduleProps {
  shifts: Shift[];
  onClockIn: (shiftId: string) => void;
  onClockOut: (shiftId: string) => void;
}

export default function WeeklySchedule({ shifts, onClockIn, onClockOut }: WeeklyScheduleProps) {
  // Get the start of the current week (Sunday)
  const currentDate = new Date();
  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
  
  // Generate an array of the days of the week
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  // Group shifts by day
  const shiftsByDay = weekDays.map(day => {
    const dayStr = format(day, 'yyyy-MM-dd');
    return {
      date: day,
      shifts: shifts.filter(shift => shift.date === dayStr)
    };
  });

  // Check if a shift can be clocked in/out
  const canClockIn = (shift: Shift) => {
    return shift.status === 'scheduled' && new Date().toISOString().split('T')[0] === shift.date;
  };

  const canClockOut = (shift: Shift) => {
    return shift.status === 'scheduled' && new Date().toISOString().split('T')[0] === shift.date;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center">
            <div className={`mb-1 font-medium ${format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') ? 'text-blue-600' : 'text-gray-600'}`}>
              {format(day, 'EEE')}
            </div>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${
              format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        {shiftsByDay.map((day, dayIndex) => (
          <div key={dayIndex} className={`border rounded-lg ${day.shifts.length > 0 ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
            <div className="p-3 border-b border-gray-200 bg-gray-50 font-medium">
              {format(day.date, 'EEEE, MMMM d, yyyy')}
              {format(day.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') && (
                <span className="ml-2 text-sm text-blue-600 font-medium">(Today)</span>
              )}
            </div>
            
            {day.shifts.length === 0 ? (
              <div className="p-4 text-gray-500 text-center">No shifts scheduled</div>
            ) : (
              <div className="divide-y divide-gray-200">
                {day.shifts.map((shift) => (
                  <div key={shift.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-gray-900">{shift.employer}</div>
                        <div className="text-sm text-gray-500">{shift.position}</div>
                        <div className="text-sm text-gray-700 mt-1">{shift.location}</div>
                        <div className="text-sm font-medium text-gray-900 mt-2">
                          {shift.startTime} - {shift.endTime}
                        </div>
                      </div>
                      
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          shift.status === 'completed' ? 'bg-green-100 text-green-800' :
                          shift.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          shift.status === 'missed' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {shift.status.charAt(0).toUpperCase() + shift.status.slice(1)}
                        </span>
                        
                        {canClockIn(shift) && (
                          <button 
                            onClick={() => onClockIn(shift.id)}
                            className="ml-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Clock In
                          </button>
                        )}
                        
                        {canClockOut(shift) && (
                          <button 
                            onClick={() => onClockOut(shift.id)}
                            className="ml-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                          >
                            Clock Out
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
