'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Calendar, Award, CheckCircle, Globe, UserCheck } from 'lucide-react';

export default function JoinAsGuard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    certifications: '',
    availability: '',
    canadianStatus: '',
    licenseExpiryDate: '',
    resume: null as File | null,
    securityLicense: null as File | null,
    workPermit: null as File | null,
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
        router.push('/guards/dashboard');
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">Thank you for applying to join our security team. We will review your application and contact you soon.</p>
            <p className="text-gray-500">Redirecting to your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Security Team</h1>
            <p className="text-gray-600">Fill out the form below to apply as a security professional</p>
          </div>
          
          <div className="w-28"></div> {/* Empty div for spacing balance */}
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
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your full name"
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
                  placeholder="you@example.com"
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
              
              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
                Security Certifications (comma separated)
              </label>
              <input
                type="text"
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="e.g., CPR, First Aid, Security License"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                Availability <span className="text-red-500">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select availability</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="weekends">Weekends only</option>
                <option value="evenings">Evenings only</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            
            {/* Canadian Work Authorization Status */}
            <div className="space-y-2">
              <label htmlFor="canadianStatus" className="block text-sm font-medium text-gray-700">
                Canadian Work Authorization Status <span className="text-red-500">*</span>
              </label>
              <select
                id="canadianStatus"
                name="canadianStatus"
                required
                value={formData.canadianStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select status</option>
                <option value="citizen">Canadian Citizen</option>
                <option value="permanent_resident">Permanent Resident</option>
                <option value="work_permit">Work Permit</option>
                <option value="study_permit">Study Permit with Work Authorization</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                You must be legally authorized to work in Canada to register as a security guard.
              </p>
            </div>
            
            {/* Work Permit Upload - Only show if work/study permit is selected */}
            {(formData.canadianStatus === 'work_permit' || formData.canadianStatus === 'study_permit') && (
              <div className="space-y-2">
                <label htmlFor="workPermit" className="block text-sm font-medium text-gray-700">
                  Upload Work Authorization Document <span className="text-red-500">*</span>
                </label>
                <div className="border border-dashed border-gray-300 rounded-md p-6">
                  <div className="text-center">
                    <Globe className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-1">Upload your work/study permit (PDF or image format)</p>
                    <p className="text-sm text-red-500 mb-2">Work authorization verification is required</p>
                    <label className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
                      <span>Browse files</span>
                      <input
                        type="file"
                        id="workPermit"
                        name="workPermit"
                        required
                        onChange={handleFileChange}
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </label>
                  </div>
                  {formData.workPermit && (
                    <div className="mt-2 text-center text-sm text-gray-500">
                      Selected: {formData.workPermit.name}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="securityLicense" className="block text-sm font-medium text-gray-700">
                Upload Security License <span className="text-red-500">*</span>
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-6">
                <div className="text-center">
                  <Shield className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-1">Upload your valid security license (PDF or image format)</p>
                  <p className="text-sm text-red-500 mb-2">Security license is required to proceed</p>
                  <label className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
                    <span>Browse files</span>
                    <input
                      type="file"
                      id="securityLicense"
                      name="securityLicense"
                      required
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                {formData.securityLicense && (
                  <div className="mt-2 text-center text-sm text-gray-500">
                    Selected: {formData.securityLicense.name}
                  </div>
                )}
              </div>
            </div>
            
            {/* Security License Expiry Date */}
            <div className="space-y-2">
              <label htmlFor="licenseExpiryDate" className="block text-sm font-medium text-gray-700">
                Security License Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="licenseExpiryDate"
                name="licenseExpiryDate"
                required
                value={formData.licenseExpiryDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">
                GuardFlex will send you renewal reminders 90 days before your license expires.
              </p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Upload Resume (PDF or Word) <span className="text-red-500">*</span>
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-6">
                <div className="text-center">
                  <FileText className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-1">Drag and drop your resume here, or</p>
                  <label className="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
                    <span>Browse files</span>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                </div>
                {formData.resume && (
                  <div className="mt-2 text-center text-sm text-gray-500">
                    Selected: {formData.resume.name}
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
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/guards/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join GuardFlex?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose assignments that fit your availability and preferences.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Competitive Pay</h3>
                <p className="text-gray-600">Earn above-average wages for your skills and experience.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Professional Development</h3>
                <p className="text-gray-600">Access training opportunities to advance your security career.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">License Management</h3>
                <p className="text-gray-600">Our automatic license tracking ensures you never miss renewal deadlines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
