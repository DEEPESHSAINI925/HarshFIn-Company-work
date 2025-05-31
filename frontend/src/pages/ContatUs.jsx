import React, { useState } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import HomeHeader from '../Component/HomeHeader';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    location: '',
    websiteType: '',
    supportLanguage: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <HomeHeader/>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-transparent text-white">
          <h1 className="text-3xl font-bold text-center mb-2">Contact us</h1>
          <p className="text-center text-gray-300 mb-8">
            Please feel free to contact us & we would be happy to assist you!
          </p>

          {/* Contact Information */}
          <div className="mb-12 text-center">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <p>For Sales: sales@sauca.in</p>
              <p>For Support: support@sauca.in</p>
              <p>For Resellers: reseller@sauca.in</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Phone Numbers</h2>
              <p>Sales: 1800-212-2495</p>
              <p>Support: 080-6777-6777</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <div className="flex">
                  <select className="px-2 py-2 bg-white/20 border border-gray-600 rounded-l-md">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Website Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Type of Website</label>
                <select
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>

              {/* Support Language */}
              <div>
                <label className="block text-sm font-medium mb-2">Support Language</label>
                <select
                  name="supportLanguage"
                  value={formData.supportLanguage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Comment or Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">I'm not a robot</span>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;