"use client"

import React, { useState } from 'react';
import { format, addWeeks } from 'date-fns';

export interface OpenShift {
  id: string;
  employer: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  position: string;
  hourlyRate: number;
  requirements: string[];
}

interface OpenShiftsProps {
  currentWeekShifts: OpenShift[];
  nextWeekShifts: OpenShift[];
  onApplyForShift: (shiftId: string) => void;
}

export default function OpenShifts({ currentWeekShifts, nextWeekShifts, onApplyForShift }: OpenShiftsProps) {
  const [activeTab, setActiveTab] = useState<'current' | 'next'>('current');
  const [expandedShift, setExpandedShift] = useState<string | null>(null);

  const toggleExpandShift = (shiftId: string) => {
    if (expandedShift === shiftId) {
      setExpandedShift(null);
    } else {
      setExpandedShift(shiftId);
    }
  };

  const formatDateRange = (weekType: 'current' | 'next') => {
    const today = new Date();
    const startOfWeek = weekType === 'current' 
      ? today 
      : addWeeks(today, 1);
    
    const endOfWeek = addWeeks(startOfWeek, 1);
    
    return `${format(startOfWeek, 'MMM d')} - ${format(endOfWeek, 'MMM d, yyyy')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Open Shifts</h2>
      
      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('current')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'current'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Current Week ({formatDateRange('current')})
          </button>
          <button
            onClick={() => setActiveTab('next')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'next'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Next Week ({formatDateRange('next')})
          </button>
        </nav>
      </div>
      
      <div>
        {activeTab === 'current' ? (
          currentWeekShifts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No open shifts available for the current week.
            </div>
          ) : (
            <div className="space-y-4">
              {currentWeekShifts.map((shift) => (
                <div key={shift.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleExpandShift(shift.id)}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{shift.employer}</div>
                      <div className="text-sm text-gray-500">{shift.position}</div>
                      <div className="text-sm text-gray-700 mt-1">
                        {format(new Date(shift.date), 'EEE, MMM d')} • {shift.startTime} - {shift.endTime} ({shift.duration})
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-lg font-semibold text-green-600">${shift.hourlyRate}/hr</div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onApplyForShift(shift.id);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm mt-2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  {expandedShift === shift.id && (
                    <div className="px-4 pb-4 pt-1 bg-gray-50 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Location:</h4>
                          <p className="text-sm text-gray-900">{shift.location}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                          <ul className="text-sm text-gray-900 list-disc pl-5">
                            {shift.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        ) : (
          nextWeekShifts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No open shifts available for next week.
            </div>
          ) : (
            <div className="space-y-4">
              {nextWeekShifts.map((shift) => (
                <div key={shift.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleExpandShift(shift.id)}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{shift.employer}</div>
                      <div className="text-sm text-gray-500">{shift.position}</div>
                      <div className="text-sm text-gray-700 mt-1">
                        {format(new Date(shift.date), 'EEE, MMM d')} • {shift.startTime} - {shift.endTime} ({shift.duration})
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-lg font-semibold text-green-600">${shift.hourlyRate}/hr</div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onApplyForShift(shift.id);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm mt-2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  {expandedShift === shift.id && (
                    <div className="px-4 pb-4 pt-1 bg-gray-50 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Location:</h4>
                          <p className="text-sm text-gray-900">{shift.location}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                          <ul className="text-sm text-gray-900 list-disc pl-5">
                            {shift.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
