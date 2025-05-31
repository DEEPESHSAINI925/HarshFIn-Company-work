import React from 'react';
import Header from '../Component/Header';
import { Link } from 'react-router-dom';
import Footers from '../Component/Footers';

const FreelancerCard = ({ name, rating, reviews, location, title, skills, price, image }) => (
  <div className="border rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow">
    <div className="flex items-start space-x-4">
      {/* Profile Section */}
      <div className="flex-shrink-0">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div className="mt-2 flex items-center">
          <span className="text-blue-600">★</span>
          <span className="ml-1 text-sm">{rating}</span>
          <span className="ml-1 text-sm text-gray-500">({reviews})</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">From</p>
            <p className="font-bold">${price}/project</p>
          </div>
        </div>

        <h4 className="mt-3 font-medium">{title}</h4>
        
        {/* Skills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Portfolio Preview */}
    <div className="mt-4 grid grid-cols-3 gap-2">
      {["https://tse4.mm.bing.net/th?id=OIP.e4u3C5Su-W8SqpH97CV2nAHaE8&w=3000&h=2000&rs=1&pid=ImgDetMain", "https://tse2.mm.bing.net/th?id=OIP.Pe4e7j1nxiK14uf8bxvqTAHaFJ&w=1000&h=695&rs=1&pid=ImgDetMain", "https://tse3.mm.bing.net/th?id=OIP.k0S9ozH96L0_RZnuEyOtowHaE8&rs=1&pid=ImgDetMain"].map((item) => (
        <div key={item} className="aspect-video bg-gray-100 rounded overflow-hidden">
          <img 
            src={`${item}`} 
            alt="Portfolio item" 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Actions */}
    <div className="mt-4 flex justify-end space-x-3">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <Link 
        to="/profile" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        See Profile
      </Link>
    </div>
  </div>
);

const ProservicesView = () => {
  const freelancers = [
    {
      name: "Asad F.",
      rating: 4.9,
      reviews: 2364,
      location: "United Arab Emirates",
      title: "4000+ Pro WordPress Projects Delivered, Let's Make Yours Next!",
      skills: ["WordPress", "Website Customization", "Website Design", "PHP"],
      price: 250,
      image: "https://tse1.mm.bing.net/th?id=OIP.HNhQD1-zh4ZhfogfMFMxLQAAAA&w=416&h=582&rs=1&pid=ImgDetMain"
    },
    {
      name: "Zain M.",
      rating: 5.0,
      reviews: 1635,
      location: "Pakistan",
      title: "Eager to help you reach your goals! No fake promises!",
      skills: ["WordPress", "Elementor Pro", "Website Development", "Web Design"],
      price: 225,
      image: "https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
    },
    {
      name: "Zain M.",
      rating: 5.0,
      reviews: 1635,
      location: "Pakistan",
      title: "Eager to help you reach your goals! No fake promises!",
      skills: ["WordPress", "Elementor Pro", "Website Development", "Web Design"],
      price: 225,
      image: "https://tse1.mm.bing.net/th?id=OIP.-9-Yvof-Rl9FrQAWiaxk8gAAAA&rs=1&pid=ImgDetMain"
    },
    {
      name: "Zain M.",
      rating: 5.0,
      reviews: 1635,
      location: "Pakistan",
      title: "Eager to help you reach your goals! No fake promises!",
      skills: ["WordPress", "Elementor Pro", "Website Development", "Web Design"],
      price: 225,
      image: "https://i.pinimg.com/originals/47/6f/4d/476f4d7d39fab555cb45ed1dcfa6fcd2.jpg"
    },
    {
      name: "Zain M.",
      rating: 5.0,
      reviews: 1635,
      location: "Pakistan",
      title: "Eager to help you reach your goals! No fake promises!",
      skills: ["WordPress", "Elementor Pro", "Website Development", "Web Design"],
      price: 225,
      image: "https://i.pinimg.com/originals/3b/14/04/3b1404dabe8a3897358832181616d23f.jpg"
    },
    {
      name: "Zain M.",
      rating: 5.0,
      reviews: 1635,
      location: "Pakistan",
      title: "Eager to help you reach your goals! No fake promises!",
      skills: ["WordPress", "Elementor Pro", "Website Development", "Web Design"],
      price: 225,
      image: "https://m.media-amazon.com/images/M/MV5BNDQyZDgxZDctZjhjZi00ZTMzLWEyYjAtNWI3MzlhNTU1N2Q4XkEyXkFqcGdeQXVyNTM1NzkyNDY@._V1_FMjpg_UY576_.jpg"
    },
    // Add more freelancers as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <select className="border rounded-md px-3 py-2">
              <option>Service Options</option>
              {/* Add options */}
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>Seller Details</option>
              {/* Add options */}
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>Budget</option>
              {/* Add options */}
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>Delivery Time</option>
              {/* Add options */}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="border rounded-md px-3 py-2">
              <option>Best Selling</option>
              {/* Add options */}
            </select>
          </div>
        </div>

        {/* Freelancer Listings */}
        <div className="space-y-6 overflow-y-auto overflow-hidden">
          {freelancers.map((freelancer, index) => (
            <FreelancerCard key={index} {...freelancer} />
          ))}
        </div>
      </main>
      <Footers/>
    </div>
  );
};

export default ProservicesView;