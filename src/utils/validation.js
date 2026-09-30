export const checkValidData = (email = '', password = '') => {
   // simple, robust email regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   // password: min 8 chars, at least one lower, one upper, one digit and one special char
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

   const isEmailValid = emailRegex.test(String(email).trim())
   const isPasswordValid = passwordRegex.test(String(password))

   const errors = {
      email: isEmailValid ? null : 'Please enter a valid email address',
      password: isPasswordValid
         ? null
         : 'Password must be at least 8 characters, include uppercase, lowercase, number and special character',
   }

   return {
      isValid: isEmailValid && isPasswordValid,
      errors,
   }

}


export const validateEmail = (email = '') => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return emailRegex.test(String(email).trim())
}

export const validatePassword = (password = '') => {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   return passwordRegex.test(String(password))
}  