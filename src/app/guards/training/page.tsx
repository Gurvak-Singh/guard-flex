import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, CheckCircle, Clock } from 'lucide-react';

export default function GuardTrainingPage() {
  const trainingCourses = [
    {
      id: 1,
      title: 'Security Guard Certification',
      level: 'Beginner',
      duration: '20 hours',
      description: 'Learn the fundamentals of security operations, legal requirements, and best practices for new security professionals.',
      topics: ['Security fundamentals', 'Legal authorities', 'Emergency procedures', 'Communication skills', 'Report writing']
    },
    {
      id: 2,
      title: 'Conflict De-escalation Techniques',
      level: 'Intermediate',
      duration: '8 hours',
      description: 'Master the art of verbal de-escalation to safely manage confrontational situations without physical intervention.',
      topics: ['Recognizing aggression signs', 'Verbal de-escalation', 'Personal space management', 'Tone and body language', 'Case studies']
    },
    {
      id: 3,
      title: 'Advanced Threat Assessment',
      level: 'Advanced',
      duration: '12 hours',
      description: 'Develop skills to identify potential security threats and implement appropriate preventative measures.',
      topics: ['Threat identification', 'Risk analysis', 'Prevention strategies', 'Response planning', 'Continuous assessment']
    },
    {
      id: 4,
      title: 'Event Security Management',
      level: 'Intermediate',
      duration: '16 hours',
      description: 'Learn specialized techniques for crowd management and event security operations.',
      topics: ['Crowd psychology', 'Access control', 'Emergency evacuation', 'VIP protection', 'Team coordination']
    },
    {
      id: 5,
      title: 'Electronic Security Systems',
      level: 'Intermediate',
      duration: '10 hours',
      description: 'Understand modern security technologies including CCTV, access control systems, and alarm monitoring.',
      topics: ['CCTV operations', 'Access control systems', 'Alarm response', 'System integration', 'Technology trends']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Guard Training</h1>
            <p className="text-xl text-gray-600 mb-8">
              Enhance your skills and increase your earning potential with professional security training
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Training Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest in Your Training?</h2>
            <p className="text-lg text-gray-600">
              Professional development leads to better assignments and higher compensation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Recognized</h3>
              <p className="text-gray-600">
                Our certification programs are recognized throughout the security industry, making you a more competitive candidate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Earning Potential</h3>
              <p className="text-gray-600">
                Guards with specialized training earn up to 30% more than those with basic certifications only.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose from online, in-person, or hybrid courses that fit your schedule and learning style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Training Courses</h2>
            <p className="text-lg text-gray-600">
              Build your security career with our professional development courses
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {trainingCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {course.level}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="outline" className="mr-2">
                      Learn More
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">
              Hear from guards who have advanced their careers through our training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">David Johnson</h4>
                <p className="text-sm text-gray-600 mb-3">Corporate Security Manager</p>
                <p className="text-gray-600 italic">
                  "The Advanced Threat Assessment course completely changed how I approach security planning. Within three months of completing the certification, I was promoted to a management position with a 40% salary increase."
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Maria Rodriguez</h4>
                <p className="text-sm text-gray-600 mb-3">Event Security Specialist</p>
                <p className="text-gray-600 italic">
                  "After completing the Event Security Management course, I was able to specialize in high-profile events. The flexible online format allowed me to continue working while upgrading my skills."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of security professionals who have enhanced their skills through our training programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
                Browse All Courses
              </Button>
              <Link href="/guards/join" passHref>
                <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md text-base">
                  Join GuardFlex
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
