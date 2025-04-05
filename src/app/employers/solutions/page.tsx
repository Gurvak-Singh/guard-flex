import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Users, Building, CheckCircle, Briefcase, Calendar, Home, User } from 'lucide-react';

export default function EmployerSolutionsPage() {
  const securitySolutions = [
    {
      id: 1,
      title: 'Event Security',
      description: 'Professional security personnel for conferences, conventions, concerts, and special events of any size.',
      icon: Users,
      color: 'blue',
      features: [
        'Crowd management specialists',
        'Access control personnel',
        'VIP security details',
        'Emergency response teams',
        'Flexible scheduling for one-time or recurring events'
      ]
    },
    {
      id: 2,
      title: 'Corporate Security',
      description: 'Protect your business assets, employees, and visitors with professional security staff.',
      icon: Building,
      color: 'green',
      features: [
        'Front desk security officers',
        'Patrol services',
        'Access control management',
        'Emergency response protocols',
        'Executive protection services'
      ]
    },
    {
      id: 3,
      title: 'Retail Loss Prevention',
      description: 'Reduce theft and inventory shrinkage with our specialized retail security personnel.',
      icon: Shield,
      color: 'purple',
      features: [
        'Uniformed deterrence',
        'Plainclothes loss prevention officers',
        'CCTV monitoring specialists',
        'Inventory control assistance',
        'Shoplifter apprehension teams'
      ]
    },
    {
      id: 4,
      title: 'Residential Security',
      description: 'Keep your residential property, tenants, and visitors safe with dedicated security professionals.',
      icon: Building,
      color: 'yellow',
      features: [
        'Lobby security',
        'Parking garage monitoring',
        'Resident access control',
        'Patrol services',
        'Package and delivery management'
      ]
    }
  ];

  const clientTestimonials = [
    {
      quote: "GuardFlex transformed how we handle security staffing. The quality of guards and the ease of scheduling has saved us countless hours and improved our overall security posture.",
      name: "Sarah Johnson",
      title: "Head of Corporate Security, TechCorp Inc.",
      logo: "techcorp",
      icon: Briefcase
    },
    {
      quote: "As an event management company, we need reliable security staff on short notice. GuardFlex delivers consistently high-quality personnel who are professional and well-trained.",
      name: "Michael Rodriguez",
      title: "Operations Director, EventMasters",
      logo: "eventmasters",
      icon: Calendar
    },
    {
      quote: "The verification process for guards gives us peace of mind. We know that anyone assigned to our property has been thoroughly vetted and has the right qualifications.",
      name: "Lisa Chen",
      title: "Property Manager, Urban Living Properties",
      logo: "urbanliving",
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Solutions for Every Business</h1>
            <p className="text-xl text-gray-600 mb-8">
              From corporate offices to special events, we have the right security personnel for your needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/employers/join" passHref>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="outline" className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-6 py-3 rounded-md text-base">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How GuardFlex Works</h2>
            <p className="text-lg text-gray-600">
              A streamlined process to meet your security staffing needs
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Post Your Requirements</h3>
                <p className="text-gray-600">
                  Specify your security needs, location, schedule, and any special qualifications required.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Matched Guards</h3>
                <p className="text-gray-600">
                  Browse profiles of pre-verified security professionals who match your requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy & Manage</h3>
                <p className="text-gray-600">
                  Hire your selected guards, manage schedules, and process payments all through one platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Solutions</h2>
            <p className="text-lg text-gray-600">
              Tailored security services for various business needs
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securitySolutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-${solution.color}-50 mr-4`}>
                        <solution.icon className={`h-6 w-6 text-${solution.color}-600`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href="/contact" passHref>
                        <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GuardFlex</h2>
            <p className="text-lg text-gray-600">
              Benefits that make us the preferred security staffing platform
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Professionals</h3>
                <p className="text-gray-600">
                  All guards are pre-screened with background checks, license verification, and skills assessment for quality assurance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Staffing</h3>
                <p className="text-gray-600">
                  Fill positions quickly, sometimes within hours, with our large network of available security professionals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Access guards with industry-specific experience and specialized training for your unique security needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that trust GuardFlex for their security needs
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="h-16 w-16 bg-gray-200 mb-6 rounded-full flex items-center justify-center">
                    <testimonial.icon className="h-8 w-8 text-gray-500" />
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Specialized security solutions for various sectors
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Corporate</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Healthcare</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Retail</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Education</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Entertainment</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Hospitality</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Construction</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900">Residential</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to solve your security staffing needs?</h2>
            <p className="text-lg mb-8">
              Get started with GuardFlex today and find the perfect security personnel for your business.
            </p>
            <p className="text-sm mb-8">
              No long-term contracts required. Flexible staffing on your terms.
            </p>
            <div>
              <Link href="/employers/join" passHref>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-base font-medium">
                  Start Hiring Guards
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
