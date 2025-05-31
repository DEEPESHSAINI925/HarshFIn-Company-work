import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Userdatacontext } from '../Usercontext/Usercontext'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
const HomeHeader = () => {
    
    const {userData, logout } = useContext(Userdatacontext)
    const profile = useRef()
    const { contextSafe } = useGSAP()
    const divisionRef = useRef(null)
    const division = useRef(null)


    const navigator = useNavigate()

    
  
  

console.log(userData)
    const divisionSlider = contextSafe((value) => {
        if (value == "enter") {
          gsap.to(divisionRef.current, {
            opacity: 1,
            display: "block"
          })
        } else {
          gsap.to(divisionRef.current, {
            opacity: 0,
            display: "none"
          })
        }
      })
      const Slider = contextSafe((value) => {
        if (value == "enter") {
          gsap.to(division.current, {
            opacity: 1,
            display: "block"
          })
        } else {
          gsap.to(division.current, {
            opacity: 0,
            display: "none"
          })
        }
      })
    const profileSlider = contextSafe((value) => {
        if (value == "enter") {

            gsap.to(profile.current, {
                transform: "translateX(0%)",
                duration: 1,
            })
        } else {
            gsap.to(profile.current, {
                transform: "translateX(100%)",
                duration: 1,
            })
        }
    })

    const Logout = async () => {
        try {
            const response = await axios.get("http://localhost:9090/user/logout", { withCredentials: true })
            if (response.status === 201) {
                logout()
                navigator('/login')
            }
        } catch (error) {
            console.error(error)
            alert(error.response.data.message || "login Failed")
        }
    }

 
    return (
        <>
            <nav id='navs' className=" flex fixed bloked z-[1] w-full items-center justify-between px-6 py-4 bg-transparent  animate-fadeIn">
                <div className="flex items-center animate-slideInLeft">
                <img onClick={()=>{window.location.href="/"}} src="./public/svg/logo.png" alt="Freelancer" className="h-8 cursor-pointer" />
                  <div className="ml-8 space-x-4 flex">
                    <div onMouseEnter={() => { divisionSlider("enter") }} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                     <button onMouseLeave={divisionSlider}> Division </button>
                      <div onMouseLeave={divisionSlider} ref={divisionRef} className='absolute top-10 left-0 w-60  rounded-md bg-black border-2 border-white hidden hidden opacity-0'>
                        <div className='p-2'>
                          <div className='flex flex-col '>
                            <button  className='text-white hover:bg-blue-500 w-full p-2 rounded-md'>Impact Link</button>
                            <button className='text-white hover:bg-blue-500 w-full p-2 rounded-md'>Pro Services</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onMouseEnter={() => { Slider("enter") }} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                      <button onMouseLeave={Slider} >Catelog </button>
                      <div onMouseLeave={Slider} ref={division} className='absolute top-10 left-0  rounded-md bg-black border-2 border-white hidden hidden opacity-0'>
                        <div className='p-2'>
                          <div className='flex flex-col '>
                            <button className='text-white hover:bg-blue-500 w-full p-2 rounded-md'>Seller</button>
                            <button className='text-white hover:bg-blue-500 w-full p-2 rounded-md'>Buyer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => window.location.href = "/contact"} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">ContactUs</button>
                    <button onClick={() => window.location.href = "/about"} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">AboutUs</button>
                  </div>
                </div>
                <div className="space-x-4 animate-slideInRight flex items-center ">

                {
                    !userData ? (
                    <>
                    <button onClick={() => window.location.href = "/login"} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">LogIn </button>
                    <button onClick={() => window.location.href = "/register"} className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">SignUp </button>
                    </> ) :(<></>)
                }

                  <button onClick={() => { window.location.href = '/post/projet' }} className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 animate-pulse">
                    Post a Project
                  </button>
                  <div onMouseEnter={() => { profileSlider("enter") }} className='w-10 h-10 rounded-full bg-red-500 cursor-pointer hover:scale-105'>
                    <img className='w-full h-full rounded-full object over' src={userData?.profilePicture || "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="" />
                  </div>
                  <div onMouseLeave={profileSlider} ref={profile} className='w-60 absolute top-0 right-0 translate-x-full h-[100vh] rounded-md bg-black border-2 border-white '>
                    <div className='p-6'>
                      {/* Profile Header */}
                      <div className='flex items-center space-x-4 mb-6'>
                        <img className='w-10 h-10 rounded-full object-cover' src={userData?.profilePicture || "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="Profile" />
                        <div>
                          <h3 className='text-white font-semibold'>{userData?.username || "Guest User"}</h3>
                          <p className='text-gray-400 text-[60%]'>{userData?.email || "GuestEmail@Email.com"}</p>
                        </div>
                      </div>

                      {/* View Channel Link */}
                      <Link to="/profile"  className='text-blue-400 hover:text-blue-300 block mb-6'>View My Profile</Link>

                      {/* Account Section */}
                      <div className='border-b border-gray-700 pb-4 mb-4'>
                        <div className='flex items-center space-x-3 mb-4'>
                          <div className='w-8 h-8 flex items-center justify-center'>
                            <i className="ri-google-fill text-white text-xl"></i>
                          </div>
                          <span className='text-white'>Impact Link</span>
                        </div>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-switch-line text-xl"></i>
                          <span  onClick={() => { window.location.href = '/pro-services' }}>Pro Services </span>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-switch-line text-xl"></i>
                          <span>Catelog </span>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-switch-line text-xl"></i>
                          <span onClick={()=>{
                            window.location.href="/about"
                          }}>AboutUs </span>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-switch-line text-xl"></i>
                          <span  onClick={() => { window.location.href = '/contact' }}>ContactUs </span>
                        </button>

                      </div>

                      {/* Settings Section */}
                      <div className='space-y-2'>

                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-money-dollar-circle-line text-xl"></i>
                          <Link to="/profile" className='text-gray-300 hover:text-gray-200'>Payment History</Link>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-settings-3-line text-xl"></i>
                          <span>Settings</span>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-question-line text-xl"></i>
                          <span>Help</span>
                        </button>
                      </div>

                      {/* Footer Section */}
                      <div className='mt-4 border-t border-gray-700 pt-4 space-y-2'>
                        <button onClick={Logout} className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-logout-box-line text-xl"></i>
                          <span>Sign out</span>
                        </button>
                        <button className='flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-md'>
                          <i className="ri-feedback-line text-xl"></i>
                          <span>Send feedback</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
        </>
    )
}

export default HomeHeader