import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, BookOpen, Calendar, File } from 'lucide-react';

export default function GuardResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Guard Application Checklist',
      type: 'PDF',
      description: 'Complete checklist of requirements for applying as a security guard on GuardFlex.',
      icon: File
    },
    {
      id: 2,
      title: 'Security License Renewal Guide',
      type: 'PDF',
      description: 'Step-by-step guide for renewing your security license in different states.',
      icon: File
    },
    {
      id: 3,
      title: 'Interview Preparation Guide',
      type: 'PDF',
      description: 'Tips and common questions to help you prepare for security job interviews.',
      icon: File
    },
    {
      id: 4,
      title: 'Uniform Standards Guide',
      type: 'PDF',
      description: 'Information on professional appearance standards for security professionals.',
      icon: File
    },
    {
      id: 5,
      title: 'Report Writing Templates',
      type: 'ZIP',
      description: 'Collection of professional templates for security incident reports.',
      icon: Download
    }
  ];

  const usefulLinks = [
    {
      title: 'International Association of Security Professionals',
      url: 'https://example.com/iasp',
      description: 'Professional organization offering certifications and networking for security professionals.'
    },
    {
      title: 'Security Industry Association',
      url: 'https://example.com/sia',
      description: 'Trade association representing the security industry and offering educational resources.'
    },
    {
      title: 'ASIS International',
      url: 'https://example.com/asis',
      description: 'Global community of security practitioners with certifications and standards.'
    },
    {
      title: 'National Council of Security Professionals',
      url: 'https://example.com/ncsp',
      description: 'Organization focused on standards and continuing education for security guards.'
    }
  ];

  const upcomingWebinars = [
    {
      title: 'De-escalation Techniques for Security Professionals',
      date: 'April 15, 2025',
      time: '1:00 PM - 2:30 PM EST',
      presenter: 'Michael Jordan, CPO'
    },
    {
      title: 'Technology in Modern Security Operations',
      date: 'April 22, 2025',
      time: '11:00 AM - 12:00 PM EST',
      presenter: 'Sarah Thompson, Security Technology Specialist'
    },
    {
      title: 'Career Advancement Strategies for Security Guards',
      date: 'May 5, 2025',
      time: '2:00 PM - 3:00 PM EST',
      presenter: 'Robert Chen, Career Development Coach'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Guard Resources</h1>
            <p className="text-xl text-gray-600">
              Tools, guides, and resources to help you succeed as a security professional
            </p>
          </div>
        </div>
      </div>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-start mb-3">
                    <div className="text-blue-500 mr-4">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
                      <p className="text-sm text-blue-600 mb-2">{resource.type} Document</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-block"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Useful Links</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
              {usefulLinks.map((link, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{link.title}</h3>
                      <p className="text-gray-600">{link.description}</p>
                    </div>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 md:mt-0 text-blue-600 hover:text-blue-800"
                    >
                      Visit Site
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Webinars</h2>
              <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
                View All Events
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center text-blue-600 mb-4">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{webinar.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">Time: {webinar.time}</p>
                    <p className="text-sm text-gray-500 mb-4">Presenter: {webinar.presenter}</p>
                    <Button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about working as a security guard through GuardFlex
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I update my security credentials on my profile?</h3>
                <p className="text-gray-600">
                  You can update your security credentials by navigating to your profile dashboard, selecting "Credentials," and uploading your new license or certification documents. Our team will verify them within 24-48 hours.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of jobs can I find on GuardFlex?</h3>
                <p className="text-gray-600">
                  GuardFlex offers a wide range of security positions including event security, corporate security, retail loss prevention, residential security, and more. The types of jobs available depend on your location, qualifications, and client needs in your area.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly will I get paid after completing an assignment?</h3>
                <p className="text-gray-600">
                  Payment processing typically occurs within 3-5 business days after job completion and approval. You can track your payment status through your dashboard and choose direct deposit or other payment methods in your account settings.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I do if I can't make it to an assigned shift?</h3>
                <p className="text-gray-600">
                  If you're unable to work an assigned shift, you should notify us as soon as possible through the app's "Manage Shifts" feature. Please provide at least 24 hours' notice when possible to maintain your reliability rating and avoid affecting future job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
              <p className="text-lg text-blue-100">
                Our guard support team is available to answer any questions you may have about working with GuardFlex.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link href="/contact" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-base font-medium">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
