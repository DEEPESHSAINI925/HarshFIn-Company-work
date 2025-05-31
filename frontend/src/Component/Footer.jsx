import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    categories: [
      { name: 'Graphics & Design', link: '#' },
      { name: 'Digital Marketing', link: '#' },
      { name: 'Writing & Translation', link: '#' },
      { name: 'Video & Animation', link: '#' },
      { name: 'Music & Audio', link: '#' },
      { name: 'Programming & Tech', link: '#' },
      { name: 'AI Services', link: '#' },
      { name: 'Consulting', link: '#' },
      { name: 'Data', link: '#' },
      { name: 'Business', link: '#' },
      { name: 'Personal Growth & Hobbies', link: '#' },
      { name: 'Photography', link: '#' },
      { name: 'Finance', link: '#' },
      { name: 'End-to-End Projects', link: '#' },
      { name: 'Service Catalog', link: '#' }
    ],
    forClients: [
      { name: 'How Fiverr Works', link: '#' },
      { name: 'Customer Success Stories', link: '#' },
      { name: 'Trust & Safety', link: '#' },
      { name: 'Quality Guide', link: '#' },
      { name: 'Fiverr Learn', subtext: 'Online Courses', link: '#' },
      { name: 'Fiverr Guides', link: '#' },
      { name: 'Fiverr Answers', link: '#' }
    ],
    forFreelancers: [
      { name: 'Become a Fiverr Freelancer', link: '#' },
      { name: 'Become an Agency', link: '#' },
      { name: 'Kickstart', link: '#' },
      { name: 'Community Hub', link: '#' },
      { name: 'Forum', link: '#' },
      { name: 'Events', link: '#' }
    ],
    businessSolutions: [
      { name: 'Fiverr Pro', link: '#' },
      { name: 'Project Management Service', link: '#' },
      { name: 'ClearVoice', subtext: 'Content Marketing', link: '#' },
      { name: 'Working Not Working', subtext: 'Creative Talent', link: '#' },
      { name: 'AutoDS', subtext: 'Dropshipping Tool', link: '#' },
      { name: 'Fiverr Logo Maker', link: '#' },
      { name: 'Contact Sales', link: '#' }
    ],
    company: [
      { name: 'About Fiverr', link: '#' },
      { name: 'Help & Support', link: '#' },
      { name: 'Social Impact', link: '#' },
      { name: 'Careers', link: '#' },
      { name: 'Terms of Service', link: '#' },
      { name: 'Privacy Policy', link: '#' },
      { name: 'Do not sell or share my personal information', link: '#' },
      { name: 'Partnerships', link: '#' },
      { name: 'Creator Network', link: '#' },
      { name: 'Affiliates', link: '#' },
      { name: 'Invite a Friend', link: '#' },
      { name: 'Press & News', link: '#' },
      { name: 'Investor Relations', link: '#' }
    ]
  };

  return (
    <footer className="bg-black border-t text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="text-blue-900 font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-300 hover:text-gray-500 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-blue-900 font-semibold mb-4">For Clients</h3>
            <ul className="space-y-3">
              {footerLinks.forClients.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-300 hover:text-gray-500 text-sm">
                    {link.name}
                    {link.subtext && (
                      <span className="block text-gray-300 text-xs">{link.subtext}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="text-blue-900 font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              {footerLinks.forFreelancers.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-300 hover:text-gray-500 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-blue-900 font-semibold mb-4">Business Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.businessSolutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-300 hover:text-gray-500 text-sm">
                    {link.name}
                    {link.subtext && (
                      <span className="block text-gray-400 text-xs">{link.subtext}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-blue-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="text-gray-300 hover:text-gray-500 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-900">
              <img src="../public/svg/loginlogo.svg" alt="Fiverr" className="h-6" />
            </Link>
            <span className="text-blue-500 text-sm">© Fiverr International Ltd. 2024</span>
          </div>

          <div className="flex items-center space-x-8">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <Link to="#" className="text-gray-400 hover:text-gray-600">
              <i class="ri-tiktok-line "></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
              <i class="ri-instagram-line"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
              <i class="ri-linkedin-box-fill"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
                <i class="ri-facebook-box-fill"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
              <i class="ri-pinterest-fill"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
              <i class="ri-twitter-line"></i>
              </Link>
            </div>

            {/* Language and Currency */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-300 hover:text-gray-600">
              <i class="ri-global-line"></i>
                English
              </button>
              <button className="text-gray-300 hover:text-gray-600">₹ INR</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 