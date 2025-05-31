import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Userdatacontext } from '../../Usercontext/Usercontext'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

const RegisterPage = () => {

  const [username, setusername] = useState("")
  const [role, setrole] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const Navigation = useNavigate()
  const { userData, setuserData } = useContext(Userdatacontext)



  const handleGoogleLogin = async (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
        const response = await axios.post('http://localhost:9090/user/google-login',
           { tokens: credential },
           {withCredentials:true});
        // Handlecl successful login (e.g., save token, redirect)
        if(response.status===201){
          const data=response.data;
          localStorage.setItem("token",data.token)
          localStorage.setItem("userData", JSON.stringify(data.user))
          setuserData(data.user)
          Navigation("/")
        }
    } catch (error) {
      alert(error.response.data.message||"login Failed")
    }
};

  const submitHandler = async (e) => {
    e.preventDefault();
    const datauser = {
      email: email,
      password: password,
      role: role,
      username: username
    }
    try {
      const response = await axios.post("http://localhost:9090/user/register", datauser,{withCredentials:true})
      if (response.status == 201) {
        const data = response.data
        localStorage.setItem("token", data.token)
        localStorage.setItem("userData", JSON.stringify(data.user))
        setuserData(data.user)
        Navigation("/")
      }
    } catch (error) {
      alert(error.response.data.message || "Registration failed");
    }
    setemail("")
    setpassword("")
    setusername("")
    setrole("")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Registration Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r  from-gray-500 to-black text-white">
        <div className="w-[400px] p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="../public/svg/logo.png"
              alt="Freelancer"
              className="h-12"
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-8">Sign up</h1>

          {/* Google Sign Up */}
          <div className="space-y-4 mb-6">
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() => {
                        console.error('Login Failed');
                        alert('Google login failed. Please try again.');
                    }}
                    theme="filled_black"
                    size="large"
                    width="100%"
                    text="continue_with"
                />
            </GoogleOAuthProvider>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-black">OR</span>
            </div>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={(e) => { submitHandler(e) }}
            className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <input
                  required:true
                  value={username}
                  onChange={(e) => { setusername(e.target.value) }}
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
              </div>
              <div className="flex-1">
                <select
                  required:true
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="" className='text-gray-500'>Select Role</option>
                  <option value="client">Client</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                required:true
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                required:true
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2">
              <input
                required:true
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 rounded"
              />
              <p className="text-sm text-white-100">
                I agree to the Freelancer{' '}
                <Link to="/user-agreement" className="text-blue-400 hover:text-blue-700">
                  User Agreement
                </Link>
                {' '}and{' '}
                <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-700">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Join Freelancer
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-white-100">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-800">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="w-1/2 relative bg-black">
        <img
          src="../public/svg/bird.webp"
          alt="Colorful hummingbird"
          className=" inset-0 w-full absolute h-full object-cover"
        />
        <div className="absolute bottom-8 right-8">
          <h2 className="text-white text-4xl font-bold italic">
            make it real.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage