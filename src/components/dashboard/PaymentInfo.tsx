"use client"

import React, { useState } from 'react';
import { format } from 'date-fns';

export interface Paystub {
  id: string;
  periodStart: string;
  periodEnd: string;
  issueDate: string;
  employer: string;
  hoursWorked: number;
  regularPay: number;
  overtimePay: number;
  totalGross: number;
  totalDeductions: number;
  netPay: number;
  status: 'processed' | 'pending';
}

export interface BankAccount {
  id: string;
  accountName: string;
  accountNumber: string; // Last 4 digits only for display
  institution: string;
  routingNumber: string; // Last 4 digits only for display
  accountType: 'checking' | 'savings';
  isDefault: boolean;
}

interface PaymentInfoProps {
  paystubs: Paystub[];
  bankAccounts: BankAccount[];
  onDownloadPaystub: (paystubId: string) => void;
  onAddBankAccount: () => void;
  onSetDefaultAccount: (accountId: string) => void;
  onDeleteAccount: (accountId: string) => void;
}

export default function PaymentInfo({ paystubs, bankAccounts, onDownloadPaystub, onAddBankAccount, onSetDefaultAccount, onDeleteAccount }: PaymentInfoProps) {
  const [showBankForm, setShowBankForm] = useState(false);
  const [viewPaystub, setViewPaystub] = useState<Paystub | null>(null);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };
  
  return (
    <div className="space-y-8">
      {/* Direct Deposit Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Direct Deposit Information</h2>
          <button 
            onClick={() => setShowBankForm(!showBankForm)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            {showBankForm ? 'Cancel' : '+ Add New Account'}
          </button>
        </div>
        
        {showBankForm && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-800 mb-3">Add Bank Account</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); onAddBankAccount(); setShowBankForm(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter bank name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter name on account"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter 9-digit routing number"
                  pattern="[0-9]{9}"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter account number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select account type</option>
                  <option value="checking">Checking</option>
                  <option value="savings">Savings</option>
                </select>
              </div>
              <div className="md:col-span-2 flex justify-end space-x-3 mt-2">
                <button 
                  type="button"
                  onClick={() => setShowBankForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Account
                </button>
              </div>
            </form>
          </div>
        )}
        
        {bankAccounts.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-3">No bank accounts have been added for direct deposit.</p>
            <button 
              onClick={() => setShowBankForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Bank Account
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {bankAccounts.map(account => (
              <div 
                key={account.id} 
                className={`border rounded-lg p-4 ${account.isDefault ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900">{account.institution}</h3>
                      {account.isDefault && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Default</span>
                      )}
                    </div>
                    <p className="text-gray-600">{account.accountType.charAt(0).toUpperCase() + account.accountType.slice(1)} Account</p>
                    <p className="text-gray-700 mt-1">Account Name: {account.accountName}</p>
                    <p className="text-gray-700">Account Number: ••••{account.accountNumber}</p>
                    <p className="text-gray-700">Routing Number: ••••{account.routingNumber}</p>
                  </div>
                  <div className="flex space-x-2">
                    {!account.isDefault && (
                      <button 
                        onClick={() => onSetDefaultAccount(account.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Set as Default
                      </button>
                    )}
                    <button 
                      onClick={() => onDeleteAccount(account.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Paystubs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Paystubs</h2>
          {viewPaystub && (
            <button 
              onClick={() => setViewPaystub(null)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Back to List
            </button>
          )}
        </div>
        
        {viewPaystub ? (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{viewPaystub.employer}</h3>
                <p className="text-gray-600">Pay Period: {formatDate(viewPaystub.periodStart)} - {formatDate(viewPaystub.periodEnd)}</p>
                <p className="text-gray-600">Issue Date: {formatDate(viewPaystub.issueDate)}</p>
              </div>
              <button
                onClick={() => onDownloadPaystub(viewPaystub.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Download PDF
              </button>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700">Hours Worked</h4>
                  <p className="text-xl font-semibold text-gray-900">{viewPaystub.hoursWorked}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Total Gross</h4>
                  <p className="text-xl font-semibold text-gray-900">{formatCurrency(viewPaystub.totalGross)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Total Deductions</h4>
                  <p className="text-xl font-semibold text-gray-900">{formatCurrency(viewPaystub.totalDeductions)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Net Pay</h4>
                  <p className="text-xl font-semibold text-green-600">{formatCurrency(viewPaystub.netPay)}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Earnings</h4>
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Regular Pay</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.regularPay)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Overtime Pay</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.overtimePay)}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="py-2">Total</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.totalGross)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Deductions</h4>
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Federal Income Tax</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.totalDeductions * 0.7)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">CPP</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.totalDeductions * 0.15)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">EI</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.totalDeductions * 0.15)}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="py-2">Total</td>
                      <td className="text-right py-2">{formatCurrency(viewPaystub.totalDeductions)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <>
            {paystubs.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600">No paystubs available yet.</p>
                <p className="text-gray-500 text-sm mt-1">Paystubs will appear here once you've completed shifts.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-4 border-b text-left">Pay Period</th>
                      <th className="py-2 px-4 border-b text-left">Issue Date</th>
                      <th className="py-2 px-4 border-b text-left">Employer</th>
                      <th className="py-2 px-4 border-b text-left">Hours</th>
                      <th className="py-2 px-4 border-b text-left">Net Pay</th>
                      <th className="py-2 px-4 border-b text-left">Status</th>
                      <th className="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paystubs.map((paystub) => (
                      <tr key={paystub.id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">
                          {formatDate(paystub.periodStart)} - {formatDate(paystub.periodEnd)}
                        </td>
                        <td className="py-2 px-4 border-b">{formatDate(paystub.issueDate)}</td>
                        <td className="py-2 px-4 border-b">{paystub.employer}</td>
                        <td className="py-2 px-4 border-b">{paystub.hoursWorked}</td>
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          {formatCurrency(paystub.netPay)}
                        </td>
                        <td className="py-2 px-4 border-b">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            paystub.status === 'processed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {paystub.status === 'processed' ? 'Processed' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => setViewPaystub(paystub)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              View
                            </button>
                            <button 
                              onClick={() => onDownloadPaystub(paystub.id)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Download
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
