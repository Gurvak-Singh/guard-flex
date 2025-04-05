'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EmployerDashboard() {
  // Mock data for the dashboard
  const [activeRequests] = useState([
    { 
      id: 1, 
      title: 'Corporate Office Security', 
      location: 'Downtown HQ', 
      staffNeeded: 3, 
      startDate: '2025-04-15', 
      status: 'Matching Guards' 
    },
    { 
      id: 2, 
      title: 'Annual Shareholder Meeting', 
      location: 'Convention Center', 
      staffNeeded: 8, 
      startDate: '2025-05-10', 
      status: 'Guards Assigned' 
    },
  ]);

  const [assignedGuards] = useState([
    { id: 1, name: 'John Smith', position: 'Senior Security Officer', rating: 4.8, location: 'Downtown HQ' },
    { id: 2, name: 'Maria Rodriguez', position: 'Security Supervisor', rating: 4.9, location: 'Downtown HQ' },
    { id: 3, name: 'David Chen', position: 'Security Officer', rating: 4.7, location: 'Downtown HQ' },
    { id: 4, name: 'Sarah Johnson', position: 'Event Security Lead', rating: 4.9, location: 'Convention Center' },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employer Dashboard</h1>
          <div>
            <Link 
              href="/employers/hire" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors mr-3"
            >
              Hire Security Staff
            </Link>
            <Link 
              href="/employers/account" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors"
            >
              Account Settings
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-1">Active Requests</h3>
            <p className="text-2xl font-bold">{activeRequests.length}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-1">Assigned Guards</h3>
            <p className="text-2xl font-bold">{assignedGuards.length}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-1">Completed Jobs</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Security Requests</h2>
          {activeRequests.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 border-b text-left">Title</th>
                    <th className="py-2 px-4 border-b text-left">Location</th>
                    <th className="py-2 px-4 border-b text-left">Staff Needed</th>
                    <th className="py-2 px-4 border-b text-left">Start Date</th>
                    <th className="py-2 px-4 border-b text-left">Status</th>
                    <th className="py-2 px-4 border-b text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{request.title}</td>
                      <td className="py-2 px-4 border-b">{request.location}</td>
                      <td className="py-2 px-4 border-b">{request.staffNeeded}</td>
                      <td className="py-2 px-4 border-b">{request.startDate}</td>
                      <td className="py-2 px-4 border-b">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          request.status === 'Matching Guards' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button className="text-blue-600 hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No active security requests.</p>
          )}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Assigned Security Personnel</h2>
          {assignedGuards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assignedGuards.map((guard) => (
                <div key={guard.id} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold">{guard.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{guard.name}</h3>
                    <p className="text-sm text-gray-600">{guard.position}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400 mr-1">
                        {'★'.repeat(Math.floor(guard.rating))}
                        {guard.rating % 1 !== 0 && '☆'}
                        {'☆'.repeat(5 - Math.ceil(guard.rating))}
                      </div>
                      <span className="text-sm text-gray-600">{guard.rating}/5.0</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Location: {guard.location}</p>
                    <div className="mt-2">
                      <button className="text-blue-600 hover:underline text-sm mr-3">View Profile</button>
                      <button className="text-blue-600 hover:underline text-sm">Contact</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No guards assigned yet.</p>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Security Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Monthly Security Report</h3>
            <p className="text-sm text-gray-600 mb-3">View detailed analytics on security incidents, guard performance, and recommendations.</p>
            <button className="text-blue-600 hover:underline">View Report</button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Security Assessment</h3>
            <p className="text-sm text-gray-600 mb-3">Request a comprehensive security assessment for your facilities.</p>
            <button className="text-blue-600 hover:underline">Request Assessment</button>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Need Additional Security?</h3>
          <p className="text-sm text-gray-600 mb-3">We can help you find the right security personnel for any situation.</p>
          <Link 
            href="/employers/hire" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors inline-block"
          >
            Hire Security Staff
          </Link>
        </div>
      </div>
    </div>
  );
}
