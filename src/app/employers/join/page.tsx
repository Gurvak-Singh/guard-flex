'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Users, CheckCircle, ArrowLeft } from 'lucide-react';

export default function JoinAsEmployer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    companySize: '',
    website: '',
    businessLicense: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setTimeout(() => {
        router.push('/employers/dashboard');
      }, 2000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">Thank you for registering your company with GuardFlex. You can now start hiring qualified security personnel.</p>
            <p className="text-gray-500">Redirecting to your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-start mb-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join as Employer</h1>
            <p className="text-gray-600">Register your company to hire qualified security personnel</p>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Full name of primary contact"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select industry</option>
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment & Events</option>
                  <option value="corporate">Corporate</option>
                  <option value="industrial">Industrial & Manufacturing</option>
                  <option value="residential">Residential</option>
                  <option value="government">Government</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                  Company Size <span className="text-red-500">*</span>
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  required
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1001+">1001+ employees</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Company Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="https://www.yourcompany.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700">
                Business License/Registration <span className="text-red-500">*</span>
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-6">
                <div className="text-center">
                  <Briefcase className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-1">Upload your business license or registration document</p>
                  <p className="text-sm text-red-500 mb-2">Required for account verification</p>
                  <label className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
                    <span>Browse files</span>
                    <input
                      type="file"
                      id="businessLicense"
                      name="businessLicense"
                      required
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                {formData.businessLicense && (
                  <div className="mt-2 text-center text-sm text-gray-500">
                    Selected: {formData.businessLicense.name}
                  </div>
                )}
              </div>
            </div>
            
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Register Company'}
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Access to Qualified Guards</h3>
            <p className="text-gray-600 text-sm">Find skilled and certified security personnel matched to your specific needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
              <Building className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Comprehensive Solution</h3>
            <p className="text-gray-600 text-sm">Manage scheduling, payments, and reporting all in one secure platform.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Management</h3>
            <p className="text-gray-600 text-sm">Our platform ensures all guards are verified, insured and properly trained.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
