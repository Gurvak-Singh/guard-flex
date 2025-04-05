import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Users, Building, CheckCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About GuardFlex</h1>
            <p className="text-xl text-gray-600">
              Connecting qualified security professionals with businesses that need them.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At GuardFlex, we believe security shouldn&apos;t be complicated. Our mission is to transform how businesses hire and manage security personnel through technology, while creating meaningful employment opportunities for security professionals.
                </p>
                <p className="text-gray-600 mb-6">
                  We&apos;re committed to raising industry standards through rigorous vetting, ongoing training, and a platform that benefits both security professionals and the organizations they protect.
                </p>
                <div className="flex space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Safety First:</span> Every guard on our platform is fully vetted, licensed, and qualified.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">2,500+</p>
                    <p className="text-gray-600">Security Guards</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">750+</p>
                    <p className="text-gray-600">Businesses</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">12,000+</p>
                    <p className="text-gray-600">Deployments</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">15</p>
                    <p className="text-gray-600">Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to transforming the security industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                  <div className="w-full h-52 bg-blue-100 flex items-center justify-center">
                    <Users className="h-20 w-20 text-blue-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Alex Johnson</h3>
                  <p className="text-blue-600 mb-4">CEO & Co-Founder</p>
                  <p className="text-gray-600 mb-4">
                    Former head of security operations with 15+ years experience in the industry.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                  <div className="w-full h-52 bg-green-100 flex items-center justify-center">
                    <Building className="h-20 w-20 text-green-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Williams</h3>
                  <p className="text-blue-600 mb-4">CTO & Co-Founder</p>
                  <p className="text-gray-600 mb-4">
                    Tech innovator with background in developing workforce management platforms.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                  <div className="w-full h-52 bg-purple-100 flex items-center justify-center">
                    <Shield className="h-20 w-20 text-purple-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
                  <p className="text-blue-600 mb-4">COO</p>
                  <p className="text-gray-600 mb-4">
                    Operations expert specializing in security logistics and personnel management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">We uphold the highest standards of honesty and ethical conduct in all we do.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600 text-sm">We deliver on our promises and are there when our customers need us most.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Respect</h3>
                <p className="text-gray-600 text-sm">We treat everyone with dignity and create an inclusive environment for all.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 mb-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">We strive for exceptional quality in our service and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the GuardFlex Community</h2>
            <p className="text-gray-300 mb-8">
              Whether you're a security professional looking for meaningful work or a business in need of qualified security personnel, GuardFlex is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/guards/join">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">
                  Join as Guard
                </Button>
              </Link>
              <Link href="/employers/join">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                  Join as Employer
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
