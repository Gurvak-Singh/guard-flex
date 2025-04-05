import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Guidelines for using GuardFlex services
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600">
                Last Updated: April 4, 2025
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                These Terms of Service constitute a legally binding agreement between you and GuardFlex governing your access to and use of the website and platform. By accessing or using our service, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
              <p className="text-gray-600">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p className="text-gray-600 mt-4">
                You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Types and Requirements</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">For Security Guards</h3>
              <p className="text-gray-600">
                To register as a security guard on our platform, you must:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have a valid security license as required by your jurisdiction</li>
                <li>Successfully pass our verification process</li>
                <li>Maintain accurate profile information, including qualifications and experience</li>
                <li>Comply with all applicable laws and regulations related to security services</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">For Employers</h3>
              <p className="text-gray-600">
                To register as an employer on our platform, you must:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Represent a legitimate business or organization</li>
                <li>Provide valid business documentation for verification</li>
                <li>Accurately describe security needs and requirements</li>
                <li>Comply with all applicable employment laws and regulations</li>
                <li>Make timely payments for services rendered through the platform</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Platform Use and Restrictions</h2>
              <p className="text-gray-600">
                You may not:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Use the platform in any way that violates applicable laws or regulations</li>
                <li>Impersonate another person or misrepresent your affiliation with a person or entity</li>
                <li>Post false, misleading, or deceptive content</li>
                <li>Attempt to bypass any security measures or access unauthorized areas of the platform</li>
                <li>Use the platform to transmit malware, viruses, or other malicious code</li>
                <li>Engage in any activity that interferes with or disrupts the functioning of the service</li>
                <li>Collect or store personal data about other users without their consent</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
              <p className="text-gray-600">
                GuardFlex facilitates payments between employers and security guards. We may charge service fees for using the platform. All fees are specified on the platform and may be updated from time to time.
              </p>
              <p className="text-gray-600 mt-4">
                Employers agree to pay the agreed-upon rates for security services provided through the platform. Guards agree to provide the services as specified in the job description.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                The platform and its original content, features, and functionality are owned by GuardFlex and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event shall GuardFlex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                Email: legal@guardflex.com<br />
                Address: 123 Security Avenue, Suite 500, Phoenix, AZ 85001
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
