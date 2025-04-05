import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Security Operations Manager',
      department: 'Operations',
      location: 'Phoenix, AZ',
      type: 'Full-time',
      description: 'Lead our security operations team and ensure the efficient deployment of security personnel to our clients.'
    },
    {
      id: 2,
      title: 'Security Technology Specialist',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build and maintain our security platform with a focus on user experience and system reliability.'
    },
    {
      id: 3,
      title: 'Business Development Representative',
      department: 'Sales',
      location: 'Denver, CO',
      type: 'Full-time',
      description: 'Drive growth by connecting with potential clients and explaining the benefits of our security staffing platform.'
    },
    {
      id: 4,
      title: 'Guard Success Specialist',
      department: 'Guard Relations',
      location: 'Phoenix, AZ',
      type: 'Full-time',
      description: 'Support our security guards with onboarding, training, and ongoing professional development.'
    },
    {
      id: 5,
      title: 'Marketing Coordinator',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create engaging content and campaigns to promote our platform to both guards and employers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us revolutionize the security industry by connecting qualified guards with the businesses that need them.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at GuardFlex</h2>
            <p className="text-lg text-gray-600">
              Join a mission-driven team that's making a real difference in the security industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
              <p className="text-gray-600">
                We offer competitive salaries, comprehensive benefits, and equity options for all full-time employees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Work Environment</h3>
              <p className="text-gray-600">
                We support remote work and flexible schedules that help you maintain work-life balance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                We invest in your professional development with training, mentorship, and clear career paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your role in our mission to transform the security industry
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            {openPositions.map((position) => (
              <div key={position.id} className="py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-gray-600 mt-1">{position.department}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button className="inline-flex items-center bg-white border border-gray-300 shadow-sm text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{position.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Don't see the right position for you?</p>
            <Link href="/contact" passHref>
              <Button variant="outline" className="inline-flex items-center border border-gray-300 shadow-sm px-4 py-2 rounded-md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Company Culture</h2>
            <p className="text-lg text-gray-600">
              We're building a diverse, inclusive, and collaborative workplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Teamwork</h3>
              <p className="text-gray-600">
                We believe that the best ideas come from collaboration across departments and disciplines. Our open office environment and virtual collaboration tools foster communication and teamwork.
              </p>
            </div>
            
            <div>
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Mindset</h3>
              <p className="text-gray-600">
                We're constantly looking for ways to improve our platform and processes. We encourage experimentation, learning from failures, and celebrating successes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore our open positions and take the next step in your career.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
