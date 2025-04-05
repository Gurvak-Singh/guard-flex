import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Practices</h1>
            <p className="text-xl text-gray-600">
              How we protect your data and ensure platform integrity
            </p>
          </div>
        </div>
      </div>

      {/* Security Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600">
                At GuardFlex, security is at the core of everything we do. We implement rigorous measures to protect your data and ensure the integrity of our platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
                  <p className="text-gray-600">
                    All data transmitted through our platform is encrypted using industry-standard TLS/SSL protocols. Your sensitive information, including personal details and payment data, is encrypted both in transit and at rest.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Identity Verification</h3>
                  <p className="text-gray-600">
                    We implement rigorous identity verification processes for both security guards and employers. This includes document verification, background checks, and credential validation to ensure platform integrity.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Monitoring</h3>
                  <p className="text-gray-600">
                    Our systems are continuously monitored for unusual activity. We employ advanced threat detection tools and regular security audits to identify and address potential vulnerabilities before they can be exploited.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 mb-4">
                    <Server className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Security</h3>
                  <p className="text-gray-600">
                    Our infrastructure is hosted in secure, SOC 2 compliant data centers with multiple layers of physical and network security. We implement regular backups and have disaster recovery procedures in place.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security Practices</h2>
              <p className="text-gray-600">
                Our comprehensive security approach includes:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li><strong>Regular Security Audits:</strong> We conduct periodic security assessments and penetration testing to identify and address potential vulnerabilities.</li>
                <li><strong>Secure Development:</strong> Our development practices follow industry-standard security guidelines, including code reviews and security testing.</li>
                <li><strong>Access Controls:</strong> Strict access controls limit data access to authorized personnel only, with comprehensive logging and monitoring.</li>
                <li><strong>Compliance:</strong> We adhere to relevant security standards and regulations to ensure the protection of your data.</li>
                <li><strong>Employee Training:</strong> Regular security awareness training for all staff to maintain a security-first culture.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Incident Response</h2>
              <p className="text-gray-600">
                In the unlikely event of a security incident, we have a comprehensive response plan in place:
              </p>
              <ol className="list-decimal pl-6 mt-4 text-gray-600 space-y-2">
                <li>Immediate investigation to assess the scope and impact</li>
                <li>Containment measures to limit any potential damage</li>
                <li>Timely notification to affected users in accordance with applicable laws</li>
                <li>Implementation of remediation measures to address vulnerabilities</li>
                <li>Post-incident analysis to strengthen our security posture</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Role in Security</h2>
              <p className="text-gray-600">
                While we implement robust security measures, security is a shared responsibility. We recommend:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Use strong, unique passwords for your GuardFlex account</li>
                <li>Enable two-factor authentication when available</li>
                <li>Be cautious about sharing sensitive information</li>
                <li>Keep your devices and browsers updated</li>
                <li>Report any suspicious activity immediately</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Report a Security Concern</h2>
              <p className="text-gray-600">
                If you have identified a potential security vulnerability or have concerns about security on our platform, please contact our security team immediately at:
              </p>
              <p className="text-gray-600 mt-4">
                Email: security@guardflex.com
              </p>
              <p className="text-gray-600 mt-2">
                We appreciate your help in keeping GuardFlex secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
