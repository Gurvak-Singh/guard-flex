'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Briefcase } from 'lucide-react';

export default function LoginPage() {
  const [userType, setUserType] = useState<string | null>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Here you would typically authenticate with your API
      // For now, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (userType === 'guard') {
        router.push('/guards/dashboard');
      } else {
        router.push('/employers/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login to GuardFlex</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
          {!userType ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-center mb-4">Choose Account Type</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setUserType('guard')}
                  className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <Shield className="h-12 w-12 text-blue-600 mb-3" />
                  <span className="font-medium">Security Guard</span>
                </button>
                
                <button
                  onClick={() => setUserType('employer')}
                  className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <Briefcase className="h-12 w-12 text-blue-600 mb-3" />
                  <span className="font-medium">Employer</span>
                </button>
              </div>
              
              <div className="pt-4 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/" className="text-blue-600 hover:underline">
                    Choose an option to sign up
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {userType === 'guard' ? 'Guard Login' : 'Employer Login'}
                </h2>
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Change account type
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 h-11"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    href={userType === 'guard' ? '/guards/join' : '/employers/join'} 
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
