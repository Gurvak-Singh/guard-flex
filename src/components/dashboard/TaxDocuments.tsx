import React from 'react';
import { format } from 'date-fns';

export interface TaxDocument {
  id: string;
  type: 'T4' | 'T4A' | 'ROE' | 'other';
  year: string;
  issueDate: string;
  employer: string;
  description: string;
  fileName: string;
}

interface TaxDocumentsProps {
  documents: TaxDocument[];
  onDownload: (documentId: string) => void;
}

export default function TaxDocuments({ documents, onDownload }: TaxDocumentsProps) {
  const groupedDocuments = documents.reduce((groups, document) => {
    const year = document.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(document);
    return groups;
  }, {} as Record<string, TaxDocument[]>);

  const sortedYears = Object.keys(groupedDocuments).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-6">Tax Documents</h2>
      
      {sortedYears.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600">No tax documents available yet.</p>
          <p className="text-gray-500 text-sm mt-1">Tax documents will be available here after your employment period.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {sortedYears.map(year => (
            <div key={year}>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Tax Year {year}</h3>
              <div className="bg-gray-50 rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Document Type</th>
                        <th className="py-2 px-4 border-b text-left">Employer</th>
                        <th className="py-2 px-4 border-b text-left">Issue Date</th>
                        <th className="py-2 px-4 border-b text-left">Description</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedDocuments[year].map(document => (
                        <tr key={document.id} className="hover:bg-white">
                          <td className="py-3 px-4 border-b">
                            <span className="font-medium text-gray-900">{document.type}</span>
                          </td>
                          <td className="py-3 px-4 border-b">{document.employer}</td>
                          <td className="py-3 px-4 border-b">{format(new Date(document.issueDate), 'MMM d, yyyy')}</td>
                          <td className="py-3 px-4 border-b">{document.description}</td>
                          <td className="py-3 px-4 border-b">
                            <button
                              onClick={() => onDownload(document.id)}
                              className="inline-flex items-center text-blue-600 hover:text-blue-800"
                            >
                              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-md font-medium text-blue-800 mb-2">About Tax Documents</h3>
        <p className="text-sm text-blue-700 mb-2">
          Your tax documents will be provided here annually by February 28th for the previous tax year.
        </p>
        <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
          <li>T4 documents show income and deductions from employment</li>
          <li>Record of Employment (ROE) documents are provided upon termination</li>
          <li>All documents can be downloaded for your records</li>
          <li>Contact support if you have any questions about your tax documents</li>
        </ul>
      </div>
    </div>
  );
}
