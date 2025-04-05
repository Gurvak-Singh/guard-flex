import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600">
                Last Updated: April 4, 2025
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to GuardFlex. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you voluntarily provide to us when you register on the platform, express interest in obtaining information about us or our products and services, or otherwise contact us.
              </p>
              <p className="text-gray-600 mt-4">
                The personal information that we collect depends on your interaction with us and our platform, the choices you make, and the features you use. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Name, email address, and contact details</li>
                <li>Login credentials</li>
                <li>Profile information (e.g., profile photos, skills, qualifications)</li>
                <li>Payment information</li>
                <li>Content you post on our platform</li>
                <li>Communications with us and other users</li>
                <li>Security license information for guards</li>
                <li>Business verification documents for employers</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our platform</li>
                <li>Improve, personalize, and expand our platform</li>
                <li>Understand and analyze how you use our platform</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information to you</li>
                <li>Respond to comments, questions, and requests</li>
                <li>Verify security credentials and business documents</li>
                <li>Protect against fraudulent, unauthorized, or illegal activity</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
              <p className="text-gray-600">
                We may share information in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                <li><strong>With Users:</strong> We share information between guards and employers as necessary to facilitate connections and services.</li>
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors or agents who perform services for us.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, reorganization, or sale of assets.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where required to do so by law.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-600">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions or comments about this policy, you may contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                Email: privacy@guardflex.com<br />
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
