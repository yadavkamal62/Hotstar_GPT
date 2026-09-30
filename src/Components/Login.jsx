import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGoogleAuth = () => {
    console.log("Google Login clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted for ${isSignUp ? 'Sign Up' : 'Sign In'}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl border border-base-200">
        <form onSubmit={handleSubmit} className="card-body gap-4">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm text-base-content/70 mt-1">
              {isSignUp 
                ? 'Fill in your details to get started' 
                : 'Please enter your credentials to sign in'}
            </p>
          </div>

          {/* Google Login - Only shown on Sign In */}
          {!isSignUp && (
            <>
              <button
                type="button"
                onClick={handleGoogleAuth}
                className="btn btn-outline w-full flex items-center gap-2 hover:bg-base-200"
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>

              <div className="divider text-xs text-base-content/50 uppercase my-0">
                or
              </div>
            </>
          )}

          {/* Full Name Field - Only shown on Sign Up */}
          {isSignUp && (
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/50">
                  <MdPerson size={18} />
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  required={isSignUp}
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/50">
                <MdEmail size={18} />
              </span>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full pl-10 focus:input-primary"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control">
            <div className="flex justify-between items-center">
              <label className="label py-1">
                <span className="label-text font-medium">Password</span>
              </label>
              {!isSignUp && (
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/50">
                <MdLock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full pl-10 focus:input-primary"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          {/* Bottom Switch Link */}
          <p className="text-center text-xs text-base-content/70 mt-1">
            {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary font-semibold hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Auth;