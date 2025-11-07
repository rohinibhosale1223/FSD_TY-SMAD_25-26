import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    localStorage.setItem('userAuthToken', 'demo-user-token');
    localStorage.setItem('username', 'Demo User');
window.location.reload()
    navigate('/board');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDemoLogin(); 
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-16">
      <div className="w-full max-w-md p-8 space-y-8 bg-dark-custom rounded-lg shadow-2xl border border-gray-800 mx-4">
        <h2 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-darker-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom"
              required
              defaultValue="demo@user.com" 
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
              defaultValue="password123"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-primary-custom bg-gray-700 border-gray-600 rounded focus:ring-primary-custom"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary-custom hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          <div>
            <button
              type="button" 
              onClick={handleDemoLogin}
              className="w-full py-3 px-4 bg-darker-custom text-primary-custom border border-primary-custom rounded-md hover:bg-primary-custom hover:text-black transition-colors font-medium text-lg"
            >
              Login as Demo User
            </button>
          </div>

        </form>
        <p className="text-sm text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-primary-custom hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login