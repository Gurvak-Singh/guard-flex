import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

export default function EmployerPricingPage() {
  const pricingTiers = [
    {
      name: 'Pay Per Guard',
      price: '$25',
      billing: 'per guard/day',
      description: 'Perfect for small businesses with occasional security needs',
      features: [
        'Pay only for what you use',
        'Access to pre-verified guards',
        'Basic guard filtering',
        'Standard support',
        'No monthly commitments',
        'Basic reporting',
      ],
      missingFeatures: [
        'Priority placement',
        'Advanced guard filtering',
        'Dedicated account manager',
        'Custom reporting',
      ],
      recommended: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Premium',
      price: '$899',
      billing: 'per year',
      description: 'For businesses with regular security staffing requirements',
      features: [
        'Unlimited guard postings',
        'Access to pre-verified guards',
        'Advanced guard filtering',
        'Priority support',
        'Advanced reporting',
        'Priority placement',
        'Guard performance tracking',
        'Dedicated account manager',
        'Custom reporting',
        'Urgent staffing services',
      ],
      missingFeatures: [],
      recommended: true,
      buttonText: 'Try Premium'
    }
  ];

  const frequentlyAskedQuestions = [
    {
      question: "Are there any setup or onboarding fees?",
      answer: "No, there are no setup fees for either of our plans. Our team will assist you with the onboarding process to ensure a smooth start."
    },
    {
      question: "What is included in the Pay Per Guard option?",
      answer: "With our Pay Per Guard option, you pay only when you hire a guard through our platform. The $25 per guard/day fee includes access to our guard verification system, basic filtering tools, and standard support services."
    },
    {
      question: "What are the benefits of the Premium yearly plan?",
      answer: "Our Premium plan ($899/year) includes unlimited guard postings, advanced filtering options, priority support, and dedicated account management. It's ideal for businesses with regular security staffing needs."
    },
    {
      question: "Can I change plans as my business needs evolve?",
      answer: "Yes, you can upgrade from Pay Per Guard to Premium at any time. Your new Premium features will be available immediately upon upgrading."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "The Pay Per Guard option has no commitment - you only pay when you use the service. The Premium plan is billed annually and includes a full year of service."
    },
    {
      question: "How are guard wages handled?",
      answer: "Guard wages are separate from the platform fees. When you hire a guard through GuardFlex, you'll pay their hourly rate plus the platform fee. All payments are processed securely through our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find the perfect plan for your security staffing needs
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm border ${tier.recommended ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} overflow-hidden flex flex-col`}
              >
                {tier.recommended && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">{tier.billing}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{tier.description}</p>
                  
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    
                    {tier.missingFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link href="/employers/join" passHref>
                    <Button className={`w-full ${tier.recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black hover:bg-gray-800'} text-white`}>
                      {tier.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Features</h2>
            <p className="text-lg text-gray-600">
              Detailed breakdown of what's included in each plan
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-gray-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold">Pay Per Guard</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Active Job Postings</td>
                  <td className="px-6 py-4 text-center text-gray-600">Pay as you go</td>
                  <td className="px-6 py-4 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Guard Filtering</td>
                  <td className="px-6 py-4 text-center text-gray-600">Basic</td>
                  <td className="px-6 py-4 text-center text-gray-600">Advanced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Support Level</td>
                  <td className="px-6 py-4 text-center text-gray-600">Standard</td>
                  <td className="px-6 py-4 text-center text-gray-600">Priority</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Reporting</td>
                  <td className="px-6 py-4 text-center text-gray-600">Basic</td>
                  <td className="px-6 py-4 text-center text-gray-600">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Priority Placement</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Guard Performance Tracking</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Dedicated Account Manager</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Urgent Staffing Services</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your security staffing?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses that trust GuardFlex for their security needs.
            </p>
            <Link href="/employers/join" passHref>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-base font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
