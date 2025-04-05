import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Users, Building, CheckCircle, FileText } from 'lucide-react';

export default function ServicesPage() {
  const securityServices = [
    {
      id: 1,
      title: 'On-Site Security Guards',
      description: 'Professional security personnel stationed at your location to provide a physical security presence and deter potential security threats.',
      icon: Shield,
      color: 'blue',
      benefits: [
        'Visual deterrent against potential threats',
        'Immediate response to security incidents',
        'Monitoring of access points and visitor management',
        'Regular patrol of premises',
        'Detailed security reports and documentation'
      ]
    },
    {
      id: 2,
      title: 'Event Security',
      description: 'Specialized security teams for conferences, concerts, festivals, sporting events, and private gatherings of any size.',
      icon: Users,
      color: 'green',
      benefits: [
        'Crowd management and control',
        'VIP protection services',
        'Access control and ticket verification',
        'Emergency response coordination',
        'Conflict de-escalation and resolution'
      ]
    },
    {
      id: 3,
      title: 'Loss Prevention',
      description: 'Retail security specialists trained to reduce inventory shrinkage and prevent theft without disrupting the customer experience.',
      icon: Building,
      color: 'purple',
      benefits: [
        'Shoplifting deterrence and detection',
        'Employee theft prevention',
        'Merchandise protection strategies',
        'Inventory shrinkage reduction',
        'Customer-friendly security presence'
      ]
    },
    {
      id: 4,
      title: 'Executive Protection',
      description: 'Close protection officers providing discreet, professional security for executives, VIPs, and high-profile individuals.',
      icon: Shield,
      color: 'yellow',
      benefits: [
        'Advance location security assessments',
        'Secure transportation coordination',
        'Threat assessment and prevention',
        'Close protection during travel',
        'Low-profile security presence'
      ]
    },
    {
      id: 5,
      title: 'Mobile Patrol Services',
      description: 'Regular security patrols of your property to ensure comprehensive coverage without the cost of a full-time guard.',
      icon: Clock,
      color: 'red',
      benefits: [
        'Random patrol patterns to prevent predictability',
        'Multiple location coverage',
        'Cost-effective alternative to static guards',
        'Detailed patrol logs and incident reports',
        'Quick response to alarms and security issues'
      ]
    },
    {
      id: 6,
      title: 'Security Consulting',
      description: 'Expert security assessment and recommendations to improve your overall security posture and address vulnerabilities.',
      icon: FileText,
      color: 'indigo',
      benefits: [
        'Comprehensive security risk assessment',
        'Customized security planning',
        'Emergency response procedure development',
        'Security technology recommendations',
        'Staff security awareness training'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Security Services</h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional security solutions tailored to your specific needs
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                Request a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Services We Offer</h2>
            <p className="text-lg text-gray-600">
              From on-site security guards to specialized consulting, we have solutions for every security need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-${service.color}-50`}>
                      <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link href="/contact" passHref>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600">
              What sets our security services apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thoroughly Vetted Guards</h3>
              <p className="text-gray-600">
                All our security personnel undergo rigorous background checks, licensing verification, and professional training to ensure the highest quality service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Security Plans</h3>
              <p className="text-gray-600">
                We develop tailored security solutions based on a thorough assessment of your specific needs, risks, and budget constraints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Management Support</h3>
              <p className="text-gray-600">
                Our management team is available around the clock to address any concerns, make adjustments to service, and ensure client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Our security services are tailored to meet the unique needs of various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Corporate</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Retail</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Healthcare</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Education</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Hospitality</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Construction</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Events</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-semibold text-gray-900">Residential</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to enhance your security?</h2>
            <p className="text-lg mb-8">
              Let us help you find the perfect security solution for your needs.
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-base font-medium">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
