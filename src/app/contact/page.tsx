'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      console.error("Error submitting form", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9am-5pm EST</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@guardflex.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">123 Security Avenue</p>
                <p className="text-gray-600">Suite 500</p>
                <p className="text-gray-600">Phoenix, AZ 85001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600 mt-2">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                {success ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-md text-center">
                    <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="careers">Careers</option>
                        <option value="partnerships">Partnerships</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white hover:bg-gray-800 h-12"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How quickly can I find security personnel?</h4>
                  <p className="text-gray-600">
                    In most cases, we can match you with qualified security personnel within 24-48 hours, depending on your specific requirements and location.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What verification do guards need to undergo?</h4>
                  <p className="text-gray-600">
                    All security personnel on GuardFlex undergo thorough background checks, license verification, and reference checks before being approved on our platform.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I get started?</h4>
                  <p className="text-gray-600">
                    Simply create an account as either a security professional or an employer, complete your profile, and you'll be ready to either find work or hire personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
