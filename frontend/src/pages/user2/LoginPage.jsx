import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Userdatacontext } from '../../Usercontext/Usercontext'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [role, setrole] = useState("")
  const navigation=useNavigate()
const {userData,setuserData}=useContext(Userdatacontext)

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)


  const handleGoogleLogin = async (credentialResponse) => {
    try {
        const response = await axios.post(
            'http://localhost:9090/user/google-login',
            { tokens: credentialResponse.credential },
            { withCredentials: true }
        );

        if (response.status === 201) {
            const data = response.data;
            localStorage.setItem("token", data.token);
            localStorage.setItem("userData", JSON.stringify(data.user));
            setuserData(data.user);
            navigation("/");
        }
    } catch (error) {
        console.error('Google Login Error:', error);
        alert(error.response?.data?.message || "Login Failed");
    }
};

  const submitHandler =async (e) => {
    e.preventDefault();
    const loginData={
      email:email,
      password:password,
      role:role
    }

try {
  const response=await axios.post(`http://localhost:9090/user/login`,loginData,{withCredentials:true})
  if(response.status===201){
    const data=response.data;
    localStorage.setItem("token",data.token)
    localStorage.setItem("userData", JSON.stringify(data.user))
    setuserData(data.user)
    navigation("/")
  }
} catch (error) {
  alert(error.response.data.message||"login Failed")
}

    setemail("")
    setpassword("")
    setrole("")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
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

          <h1 className="text-2xl font-bold text-center mb-8">Welcome back</h1>

          {/* Social Login Buttons */}
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
              <span className="px-4 bg-white  text-black">OR</span>
            </div>
          </div>

          {/* Login Form */}
          <form
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className="space-y-4">
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
            <div>
              <input
                required:true
                type="text"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                placeholder="Email or Username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
              />
            </div>

            <div className="relative">
              <input
                required:true
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4  py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  required:true
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-sm text-white-100">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Log in
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-white-100">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="w-1/2 relative  ">
        <img
          src="../public/svg/bird.webp"
          alt="Colorful hummingbird"
          className="absolute  w-full h-full object-cover"
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

export default LoginPage