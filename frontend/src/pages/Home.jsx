import React, {  useEffect, useRef } from 'react'
import TalentNetwork from './TalentNetwork'
import 'remixicon/fonts/remixicon.css'
import Footer from '../Component/Footer'

import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import HomeHeader from '../Component/HomeHeader'

const Home = () => {
  
  const targetRef = useRef()
  const oneRef = useRef()
  const { contextSafe } = useGSAP()
  const userExist = localStorage.getItem("token")

  const hiddenDiv = contextSafe((value) => {
    if (value === "enter") {
      gsap.fromTo(targetRef.current, {
        y: 12,
        opacity: 0
      }, {
        y: 0,
        ease: "linear",
        opacity: 1
      })
    } else {
      gsap.to(targetRef.current, {
        opacity: 0
      })
    }
  })
  const Div = contextSafe((value) => {

    if (value === "enter") {
      gsap.fromTo(oneRef.current, {
        y: 12,
        opacity: 0
      }, {
        y: 0,
        ease: "linear",
        opacity: 1
      })
    } else {
      gsap.to(oneRef.current, {
        opacity: 0
      })
    }
  })

  

 
  useEffect(() => {
    gsap.fromTo("nav", {
      y: -32,
      opacity: 0
    }, {
      y: 0,
      ease: "linear",
      opacity: 1
    })
    gsap.to(".hero", {
      x: 22,
      ease: "back.in",
      duration: 0.8,
      opacity: 1
    })
  }, [])



  
  return (
    <>
      {
        !userExist ? (
          <>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Navigation */}
              <HomeHeader/>
              {/* Hero Section */}
              <div   className='  h-screen relative bg-black'>
                <img className=' w-full h-full ' src="https://firelaunchers.com/offers/ai-image-library-with-unrestricted-plr/images/vecteezy_freelance-png-with-ai-generated_30577581.png" alt="" />
                {/* Left Content */}
                <div className="hero w-2/5  opacity-0 p-8 absolute top-[20%] left-20 ">
                  <h1 className="text-5xl font-bold text-white mb-8">
                    Hire the best freelancers for any job, online.
                  </h1>
                  <ul className="space-y-4 text-white mb-8">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      World's largest freelance marketplace
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Any job you can possibly think of
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Save up to 90% & get quotes for free
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Pay only when you're 100% happy
                    </li>
                  </ul>
                  <div className="space-x-4 flex items-start gap-3">
                    <div onMouseLeave={hiddenDiv}>
                      <button onMouseEnter={() => { hiddenDiv("enter") }} onClick={() => {
                        window.location.href = '/post/projet'
                      }} className="bg-pink-600 text-white px-8 py-2 font-bold rounded-md hover:bg-pink-700">
                        Division
                      </button>
                      <div ref={targetRef} className='h-20 rounded-lg mt-1 bg-white opacity-0 flex flex-col items-center justify-center'>
                        <h2 className=' w-full h-8 text-center font-semibold cursor-pointer p-2 text-xs hover:text-blue-500 hover:text-sm'>Impact Link</h2>
                        <h2 onClick={() => { window.location.href = '/pro-services' }} className=' w-full h-10 text-center p-2 font-semibold cursor-pointer  text-xs hover:text-blue-500 hover:text-sm'>Pro Service</h2>
                      </div>
                    </div>
                    <div onMouseLeave={Div}>
                      <button onMouseEnter={() => { Div("enter") }} onClick={() => { window.location.href = '/pro-services' }} className="border border-white text-white font-bold px-8 py-2 rounded-md hover:bg-white hover:text-gray-900">
                        Catelog
                      </button>
                      <div ref={oneRef} className='h-20 rounded-lg mt-1 bg-white opacity-0 flex flex-col items-center justify-center'>
                        <h2 className='  w-full h-8 text-center font-semibold cursor-pointer p-2 text-xs hover:text-blue-500 hover:text-sm'>Seller</h2>
                        <h2 onClick={() => { window.location.href = '/pro-services' }} className=' w-full h-10 text-center p-2 font-semibold cursor-pointer text-xs hover:text-blue-500 hover:text-sm'>Buyer</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Section - Make it real with Freelancer */}
              <div className="w-full bg-black py-20">
                <div className="container mx-auto px-6">
                  {/* Trusted by logos */}
                  <div className="flex justify-center items-center gap-8 mb-20 opacity-70">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/adobe-logo-darkmode.svg" alt="Adobe" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2-darkmode.svg" alt="Facebook" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2-darkmode.svg" alt="Deloitte" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo-v4.png?image-optimizer=force&format=webply&width=132" alt="IBM" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2-darkmode.svg" alt="Airbus" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2-darkmode.svg" alt="Telstra" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo-darkmode.svg" alt="Fujitsu" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo-darkmode.svg" alt="Google" className="h-20" />
                  </div>

                  {/* Main content */}
                  <div id='nav' className="flex">
                    {/* Left side - Text content */}
                    <div className="w-1/2 pr-12">
                      <h2 className="text-5xl font-bold mb-16">
                        <span className="text-pink-500">Make it real</span>
                        <br />
                        <span className="text-white">with Freelancer</span>
                      </h2>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-8">
                        {/* The best talent */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">The best talent</h3>
                          <p className="sss text-gray-400">
                            Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.
                          </p>
                        </div>

                        {/* Fast bids */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Fast bids</h3>
                          <p className="text-gray-400">
                            Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.
                          </p>
                        </div>

                        {/* Quality work */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Quality work</h3>
                          <p className="text-gray-400">
                            With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.
                          </p>
                        </div>

                        {/* Be in control */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Be in control</h3>
                          <p className="text-gray-400">
                            Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-12">
                        <h3 className="text-white text-2xl font-bold mb-4">Make your dreams a reality.</h3>
                        <button className="text-pink-500 hover:text-pink-400 flex items-center">
                          Get started now
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right side - Mobile App Mockups */}
                    <div className="w-1/2 relative">
                      <div className="absolute top-0 right-0 w-full h-full">
                        <div className="relative w-full h-full">
                          {/* Colorful background effect */}
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <div className="w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
                          </div>

                          Mobile mockups
                          <div className="relative z-10 flex justify-center items-center h-full">
                            <img src="/mockups/app-screen-1.png" alt="Freelancer Mobile App" className="w-64 h-auto transform -rotate-12 shadow-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TalentNetwork />
              <Footer />
            </div>

          </>
        )
          :
          (<>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Navigation */}
              <HomeHeader/>

              {/* Hero Section */}
              <div className='h-screen relative bg-black'>
                <img className='w-full h-full' src="https://firelaunchers.com/offers/ai-image-library-with-unrestricted-plr/images/vecteezy_freelance-png-with-ai-generated_30577581.png" alt="" />
                {/* Left Content */}
                <div className="hero w-2/5 opacity-0 p-8 absolute top-32 left-20 ">
                  <h1 className="text-5xl font-bold text-white mb-8">
                    Hire the best freelancers for any job, online.
                  </h1>
                  <ul className="space-y-4 text-white mb-8">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      World's largest freelance marketplace
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Any job you can possibly think of
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Save up to 90% & get quotes for free
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Pay only when you're 100% happy
                    </li>
                  </ul>
                  <div className="space-x-4 flex items-start gap-3">
                    <div onMouseLeave={hiddenDiv}>
                      <button onMouseEnter={() => { hiddenDiv("enter") }} onClick={() => {
                        window.location.href = '/post/projet'
                      }} className="bg-pink-600 text-white px-8 py-4 font-bold rounded-md hover:bg-pink-700">
                        Division
                      </button>
                      <div ref={targetRef} className='h-20 rounded-lg mt-1 bg-white opacity-0 flex flex-col items-center justify-center'>
                        <h2 className=' w-full h-8 text-center font-semibold cursor-pointer p-2 text-xs hover:text-blue-500 hover:text-sm'>Impact Link</h2>
                        <h2 onClick={() => { window.location.href = '/pro-services' }} className=' w-full h-10 text-center p-2 font-semibold cursor-pointer  text-xs hover:text-blue-500 hover:text-sm'>Pro Service</h2>
                      </div>
                    </div>
                    <div onMouseLeave={Div}>
                      <button onMouseEnter={() => { Div("enter") }} onClick={() => { window.location.href = '/pro-services' }} className="border border-white text-white font-bold px-8 py-4 rounded-md hover:bg-white hover:text-gray-900">
                        Catelog
                      </button>
                      <div ref={oneRef} className='h-20 rounded-lg mt-1 bg-white opacity-0 flex flex-col items-center justify-center'>
                        <h2 className='  w-full h-8 text-center font-semibold cursor-pointer p-2 text-xs hover:text-blue-500 hover:text-sm'>Seller</h2>
                        <h2 onClick={() => { window.location.href = '/pro-services' }} className=' w-full h-10 text-center p-2 font-semibold cursor-pointer text-xs hover:text-blue-500 hover:text-sm'>Buyer</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              {/* New Section - Make it real with Freelancer */}
              <div className="w-full bg-black py-20">
                <div className="container mx-auto px-6">
                  {/* Trusted by logos */}
                  <div className="flex justify-center items-center gap-8 mb-20 opacity-70">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/adobe-logo-darkmode.svg" alt="Adobe" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2-darkmode.svg" alt="Facebook" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2-darkmode.svg" alt="Deloitte" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo-v4.png?image-optimizer=force&format=webply&width=132" alt="IBM" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2-darkmode.svg" alt="Airbus" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2-darkmode.svg" alt="Telstra" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo-darkmode.svg" alt="Fujitsu" className="h-20" />
                    <img src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo-darkmode.svg" alt="Google" className="h-20" />
                  </div>

                  {/* Main content */}
                  <div className="flex">
                    {/* Left side - Text content */}
                    <div className="w-1/2 pr-12">
                      <h2 className="text-5xl font-bold mb-16">
                        <span className="text-pink-500">Make it real</span>
                        <br />
                        <span className="text-white">with Freelancer</span>
                      </h2>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-8">
                        {/* The best talent */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">The best talent</h3>
                          <p className="text-gray-400">
                            Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.
                          </p>
                        </div>

                        {/* Fast bids */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Fast bids</h3>
                          <p className="text-gray-400">
                            Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.
                          </p>
                        </div>

                        {/* Quality work */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Quality work</h3>
                          <p className="text-gray-400">
                            With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.
                          </p>
                        </div>

                        {/* Be in control */}
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-4">Be in control</h3>
                          <p className="text-gray-400">
                            Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-12">
                        <h3 className="text-white text-2xl font-bold mb-4">Make your dreams a reality.</h3>
                        <button className="text-pink-500 hover:text-pink-400 flex items-center">
                          Get started now
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right side - Mobile App Mockups */}
                    <div className="w-1/2 relative">
                      <div className="absolute top-0 right-0 w-full h-full">
                        <div className="relative w-full h-full">
                          {/* Colorful background effect */}
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <div className="w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
                          </div>

                          Mobile mockups
                          <div className="relative z-10 flex justify-center items-center h-full">
                            <img src="/mockups/app-screen-1.png" alt="Freelancer Mobile App" className="w-64 h-auto transform -rotate-12 shadow-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TalentNetwork />
              <Footer />

            </div>
          </>)
      }
    </>
  )
}

export default Home