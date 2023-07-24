import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LoginPage = () => {
  const { signInWithGoogle, userSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleUserLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const recentUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const googleUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Welcome to College Portal</h2>
        <p className="text-center text-gray-600 mb-6">Please login to access your account.</p>
        <form onSubmit={handleUserLogin} className="mt-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium"
            >
              Login
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-sm text-gray-600">Don't have an account?</span>
            <Link to="/register" className="ml-2 text-sm font-medium text-blue-500 hover:text-blue-600">
              Register here
            </Link>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSignInWithGoogle}
              type="button"
              className="py-2 px-4 bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium"
            >
              Sign in with Google
            </button>
          </div>
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
