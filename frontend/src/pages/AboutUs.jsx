import React from 'react';
import HomeHeader from '../Component/HomeHeader';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HomeHeader />
      
      {/* Social Icons */}
      <div className="fixed left-8 top-20 flex flex-col gap-4">
        <a href="#" className="text-[#B8860B] hover:text-[#DAA520]">
          <i className="ri-facebook-fill text-xl"></i>
        </a>
        <a href="#" className="text-[#B8860B] hover:text-[#DAA520]">
          <i className="ri-twitter-fill text-xl"></i>
        </a>
        <a href="#" className="text-[#B8860B] hover:text-[#DAA520]">
          <i className="ri-linkedin-fill text-xl"></i>
        </a>
        <a href="#" className="text-[#B8860B] hover:text-[#DAA520]">
          <i className="ri-instagram-fill text-xl"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#B8860B]">About us</h1>
            <p className="text-lg text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in the
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="https://th.bing.com/th/id/OIP.VWeZTx9P7w2C2Wp0Ws96UgHaE7?rs=1&pid=ImgDetMain" 
              alt="Team Meeting" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#B8860B] mb-8">Our Story</h2>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            printer took a galley of type and scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-[#B8860B] mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Values Grid */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the industry's
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum h
                </p>
              </div>
            </div>
            {/* Values Image */}
            <div className="md:col-span-2 relative">
              <img 
                src="/images/team-collaboration.jpg" 
                alt="Team Collaboration" 
                className="w-full h-[300px] object-cover rounded-tr-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#B8860B]">Team</a></li>
              <li><a href="#" className="hover:text-[#B8860B]">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#B8860B]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#B8860B]">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;