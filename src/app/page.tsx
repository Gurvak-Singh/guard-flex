import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Clock, DollarSign, Users, CheckCircle, Star, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              GuardFlex
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/automation" className="text-gray-600 hover:text-gray-900">Automation</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">Guard/Business Login</Link>
              <Link href="/guards/signup">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="text-sm text-gray-600">Smart guard management platform · Made for Businesses</p>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Turn your security needs into
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> professional service</span>
            </h1>
            <p className="text-gray-600 text-lg">
              60 Days free trial · No credit card required
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/guards/signup">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Join as Guard
                </Button>
              </Link>
              <Link href="/employers/signup">
                <Button size="lg" variant="outline" className="border-gray-200">
                  Hire Security Staff
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need to manage security operations</h2>
            <p className="text-gray-600 mt-4">Streamline your security staffing with our comprehensive platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Guards",
                description: "All guards are thoroughly vetted and licensed for your peace of mind"
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                description: "Monitor guard locations and attendance with precise GPS tracking"
              },
              {
                icon: DollarSign,
                title: "Instant Payments",
                description: "Automated weekly payments for guards and simplified billing"
              },
              {
                icon: Users,
                title: "Staff Management",
                description: "Easily manage schedules, shifts, and guard assignments"
              },
              {
                icon: CheckCircle,
                title: "Compliance",
                description: "Stay compliant with automated license tracking and renewals"
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description: "Regular performance reviews and client feedback system"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <feature.icon className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">3,536</div>
              <div className="text-gray-600 mt-2">Active Guards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">1,434</div>
              <div className="text-gray-600 mt-2">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600 mt-2">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to transform your security operations?
            </h2>
            <div className="flex justify-center gap-4">
              <Link href="/guards/signup">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Join as Guard
                </Button>
              </Link>
              <Link href="/employers/signup">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Hire Guards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">GuardFlex</h3>
              <p className="text-gray-600 text-sm">Revolutionizing security staffing with cutting-edge technology and verified professionals.</p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">For Guards</h4>
              <ul className="space-y-2">
                <li><Link href="/guards/signup" className="text-gray-600 hover:text-gray-900">Become a Guard</Link></li>
                <li><Link href="/guards/training" className="text-gray-600 hover:text-gray-900">Training</Link></li>
                <li><Link href="/guards/resources" className="text-gray-600 hover:text-gray-900">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2">
                <li><Link href="/employers/signup" className="text-gray-600 hover:text-gray-900">Hire Guards</Link></li>
                <li><Link href="/employers/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/employers/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} GuardFlex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
