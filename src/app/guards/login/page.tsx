import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'

export default function GuardLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-guard-primary to-guard-secondary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your guard account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-200">
          Or{' '}
          <Link href="/guards/signup" className="font-medium text-white hover:text-gray-200">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm role="guard" mode="signin" />
        </div>
      </div>
    </div>
  )
}
