import React from 'react'

const TalentNetwork = () => {
  // Sample freelancer data
  const freelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      avatar: "https://th.bing.com/th/id/R.30c3277e03c1a1b22fb2b9f04c8ccb73?rik=l65ni9xcIAXKoA&riu=http%3a%2f%2fassets.vogue.com%2fphotos%2f5876fe0a8a28e998768824d3%2fmaster%2fpass%2fdavid-gandy.jpg&ehk=NvnDBEzPzv5J1GPbog%2f2E8FfUAkJQu4EsD6HFxz3AiM%3d&risl=&pid=ImgRaw&r=0",
      skills: ["UI/UX", "Web Design"],
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4.9,
      avatar: "https://tse3.mm.bing.net/th?id=OIP.jnXyd9sXIEtpWj8pEiP8awHaHa&pid=ImgDet&w=184&h=184&c=7",
      skills: ["React", "Node.js"],
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 4.8,
      avatar: "https://tse1.mm.bing.net/th?id=OIP.DVW1v71s0yBdW8VK8ywJJQHaLH&pid=ImgDet&w=184&h=276&c=7",
      skills: ["Graphic Design", "Branding"],
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      avatar: "https://s-media-cache-ak0.pinimg.com/originals/f1/b7/7a/f1b77a31d5770ef36cfba4971997a5e4.jpg",
      skills: ["iOS", "Swift"],
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation (reuse from Home.jsx) */}
      <nav className="flex w-full items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md fixed">
        <div className="flex items-center">
          <img src="../public/svg/logo.png" alt="Freelancer" className="h-8" />
          <div className="ml-8 space-x-4">
            <button className="text-white hover:text-blue-400 transition-all duration-300">Hire freelancers</button>
            <button className="text-white hover:text-blue-400 transition-all duration-300">Find work</button>
            <button className="text-white hover:text-blue-400 transition-all duration-300">Solutions</button>
          </div>
        </div>
        <div className="space-x-4">
          <button className="text-white hover:text-blue-400 transition-all duration-300">Log In</button>
          <button className="text-white hover:text-blue-400 transition-all duration-300">Sign Up</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-all duration-300">
            Post a Project
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Tap into a <span className="text-pink-500">global talent network</span>
          </h1>
          <p className="text-xl text-gray-400">Find the perfect freelancer for your next project</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-16 mb-20">
          {/* Post your job */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Post your job</h3>
            <p className="text-gray-400 mb-6">
              It's free and easy! Get bids from our community of professionals within minutes. Start making your dreams reality.
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-all duration-300">
              Post a Project
            </button>
          </div>

          {/* Choose freelancers */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Choose freelancers</h3>
            <p className="text-gray-400 mb-6">
              No job is too big or too complex. We've got freelancers who work in every technical, professional, and creative field imaginable.
            </p>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300">
              Browse Freelancers
            </button>
          </div>

          {/* Pay safely */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Pay safely</h3>
            <p className="text-gray-400 mb-6">
              Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.
            </p>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* We're here to help */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">We're here to help</h3>
            <p className="text-gray-400 mb-6">
              Our team of experts is ready to assist you at every stage, from posting your job to managing your project and everything in between.
            </p>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>

        {/* Freelancer Profiles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Top Rated Freelancers</h2>
          <div className="grid grid-cols-4 gap-6">
            {freelancers.map((freelancer) => (
              <div key={freelancer.id} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src={freelancer.avatar} alt={freelancer.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{freelancer.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < freelancer.rating ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-400">{freelancer.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-20">
          <h2 className="text-3xl font-bold mb-4">Create the future.</h2>
          <button onClick={()=>{window.location.href='/pro-services'}} className="text-pink-500 hover:text-pink-400 flex items-center justify-center mx-auto">
            Get started now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TalentNetwork 