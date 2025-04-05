import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            GuardFlex
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
