import React, { useState } from 'react'

const PostProject = () => {
  const [projectDescription, setProjectDescription] = useState('')

  return (
    <div >

    <div className='flex items-center justify-between bg-gradient-to-r  from-gray-700 to-black text-white'>
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-3xl  ">
            {/* Header */}
            <div className="mb-12">
            <img 
              src="../public/svg/logo.png" 
              alt="Freelancer" 
              className="h-10 mb-5"
            />
            <h1 className="text-4xl font-bold mb-4">
                Tell us what you <span className="text-pink-500">need done.</span>
            </h1>
            <p className="text-white-100 font-medium">
                We'll guide you to create the perfect brief. The more detail the better.
            </p>
            </div>

            {/* Project Description Form */}
            <div className="mb-12">
                <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Enter a few bullet points or a full description."
                    className="w-full h-40 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
                />
                <button className="mt-4 bg-pink-500 text-white px-8 py-2 rounded-md hover:bg-pink-600 transition-colors">
                    Next
                </button>
            </div>

            {/* Features Section */}
            <div className="border-t pt-12">
                <h2 className="text-xl font-semibold mb-6">
                    Freelancer connects over 78 million professionals globally
                </h2>

                <div className="space-y-4">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-white-100">
                        From ₹100 tasks to ₹100 million projects, we've got you covered
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-white-100">
                        Connect with skilled freelancers in seconds
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-white-100">
                        Only pay freelancers once you are happy with their work
                    </p>
                </div>
            </div>
            </div>
        </div>

      {/* Background Image - Right Side */}
        <div className=" top-0 right-0 w-[35%] object-cover h-screen z-[1]">
            <img
            src="../public/svg/bird.webp"
            alt="Colorful hummingbird"
            className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8">
            <h2 className="text-white text-4xl font-bold italic">
                make it real.
            </h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PostProject