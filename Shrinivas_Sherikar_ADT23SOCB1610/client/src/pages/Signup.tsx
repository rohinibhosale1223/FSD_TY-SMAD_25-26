
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
      <div className="w-full max-w-md p-8 space-y-8 bg-dark-custom rounded-lg shadow-2xl border border-gray-800 mx-4">
        <h2 className="text-3xl font-bold text-center text-white">
          Create Your Account
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-darker-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-darker-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom"
              required
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-darker-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-custom hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup