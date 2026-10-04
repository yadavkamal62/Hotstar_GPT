import React, { useRef, useState } from 'react'

import { checkValidData } from '../utils/validation';


const Login = () => {


  
  const [signIn, setSignIn] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null);

  const toggleSignIn = () => { setSignIn(!signIn) }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const hendleButtonclick = () => {

    //validate the form data



    const message = checkValidData(email.current.value, password.current.value);
    const displayMessage = message.isValid ? null : message.errors.email || message.errors.password;
    seterrorMessage(displayMessage);
    if (!message.isValid) return;
    // sign in logic
    if (!signIn) {
    }
  }
     

       

  return (
    <div className="relative isolate min-h-dvh bg-black text-white">
    

      <div className="absolute inset-0 z-0">
        <img
          src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/feature/onboarding/in/welcome_mobile_in_12-02-25.png"
          alt="logo"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8"
      >
        <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8 md:max-w-md">
          <h1 className="mb-6 text-center text-2xl font-bold text-white drop-shadow">
            {signIn ? 'Sign In' : 'Sign Up'}
          </h1>

          {!signIn && (
            <input
              ref={name}
              type="text"
              placeholder="FullName"
              className="mb-3 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur-md transition focus:border-white/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="mb-3 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur-md transition focus:border-white/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-4 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur-md transition focus:border-white/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          />

          <p className="mb-4 text-xs text-red-500 sm:text-sm">{errorMessage}</p>

          <button
            className="w-full cursor-pointer rounded bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
            onClick={hendleButtonclick}
          >
            {signIn ? 'SignIn' : 'SignUp'}
          </button>

          <p
            className="mt-4 cursor-pointer text-center text-xs text-white transition hover:text-gray-300 sm:text-sm"
            onClick={toggleSignIn}
          >
            {signIn ? 'New to Netflix? SignUp Now' : 'Already registered? SignIn Now'}
          </p>
        </div>
      </div>
    </div>
  )
  
}
export default Login;
