import React, { useState, useContext, useEffect } from 'react';
import { Userdatacontext } from '../Usercontext/Usercontext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProservicesView from './ProservicesView';
import Payment from './Payment';



const SidebarLink = ({ icon, text, badge, active }) => (
  <Link
    to="#"
    className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
      }`}
  >
    <div className="flex items-center space-x-3">
      <i className={`${icon} text-xl`}></i>
      <span>{text}</span>
    </div>
    {badge && (
      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

const Profile = () => {

  const { userData, setuserData } = useContext(Userdatacontext);
  const [active, setactive] = useState("Myprofile")
  const [loading, setLoading] = useState(false)
  const [twoactive, settwoactive] = useState("Account Settings")
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    email: userData?.email || '',
    phoneNumber: userData?.phoneNumber || '',
    education: userData.education,
    location: userData.location || '',
    languages: userData.languages

  });
  const navigate = useNavigate()
  const [postname, setpostname] = useState(userData?.username)
  const [postProfile, setpostProfile] = useState(userData?.profilePicture)
  const [tittle, settittle] = useState(null)
  const [hourlyRate, sethourlyRate] = useState(null)
  const [skills, setskills] = useState(null)
  const [description, setdescription] = useState(null)
  const [pro, setpro] = useState(false)
  const [Images, setImages] = useState()
  const [hireData, setHireData] = useState(null)


  useEffect(() => {
    if (hireData) {
      hireData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [hireData]);

  const postSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const postdata = new FormData()
    postdata.append("postname", postname)
    postdata.append("profile", postProfile)
    postdata.append("tittle", tittle)
    postdata.append("description", description)
    postdata.append("hourlyRate", hourlyRate)
    postdata.append("isPro", pro)
    postdata.append("skills", skills)

    for (let filesdata of Images) {
      postdata.append("Images", filesdata)
    }


    try {
      const response = await axios.post(
        'http://localhost:9090/user/post',
        postdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      )
      if (response.status === 201) {
        alert('Post created successfully!')
        navigate('/pro-services')
      }
    } catch (error) {
      console.error('Post creation error:', error)
      alert(error.response?.data?.message || 'Error creating post')
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    const hire = async () => {
      try {
        const response = await axios.get("http://localhost:9090/user/hirePeople", { withCredentials: true })
        if (response.status === 200) {
          setHireData(response.data.user)
        }
      } catch (error) {
        console.error(error)
        alert("Error:", error)
      }
    }
    hire()
  }, [])


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      setProfileImage(file);

      // Upload image immediately when selected
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        setLoading(true);
        const response = await axios.put(
          'http://localhost:9090/user/update-profile',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
          }
        );

        if (response.status === 200) {
          setuserData(response.data.user);
          alert('Profile picture updated successfully!');
        }
      } catch (error) {
        console.error('Update failed:', error);
        alert(error.response?.data?.message || 'Update failed');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        'http://localhost:9090/user/update-profile-details',
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        setuserData(response.data.user);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Update failed:', error);
      alert(error.response?.data?.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 min-h-screen bg-white border-r fixed">
        <div className="p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="../public/svg/loginlogo.svg" alt="Logo" className="h-8" />
          </Link>
        </div>
        <nav className="mt-8 ">
          <Link
            to="#"
            onClick={() => { setactive("Myprofile") }}
            className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'Myprofile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`ri-user-line text-xl`}></i>
              <span>Myprofile</span>
            </div>
          </Link>
          
          <Link
            to="#"
            onClick={() => { setactive("ProServices") }}
            className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'ProServices' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`ri-briefcase-line text-xl`}></i>
              <span onClick={() => { window.location.href = '/pro-services' }}>ProServices</span>
            </div>
          </Link>
          <Link
            to="#"
            onClick={() => { setactive("Catelog") }}
            className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'Catelog' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`ri-user-line text-xl`}></i>
              <span>Catelog</span>
            </div>
          </Link>
          <Link
            to="#"
            onClick={() => { setactive("About_Us") }}
            className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'About_Us' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`ri-reply-line text-xl`}></i>
              <span onClick={()=>{window.location.href="/about"}}>About_Us</span>
            </div>
          </Link>
          <Link
            to="#"
            onClick={() => { setactive("Contact") }}
            className={`flex items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'Contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className={`ri-contacts-line text-xl`}></i>
              <span onClick={()=>{window.location.href="/contact"}}>Contact</span>
            </div>
          </Link>

          <Link
            to="#"
            onClick={() => { setactive("Logout") }}
            className={`flex mt-[110%] items-center justify-between px-6 py-3 hover:bg-gray-100 ${active === 'Logout' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
          >
            <div className="flex items-center space-x-3">
              <i className="ri-logout-box-line text-xl"></i>
              <span>Logout</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className="flex-1 ml-64">
        {/* Top Navigation */}
        <div className="bg-white border-b px-8 py-4 flex justify-between items-center fixed w-full">
          <h1 className="text-xl font-semibold"><i className={`ri-user-line text-xl`}></i> Profile</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="ri-notification-3-line text-xl"></i>
            </button>
            <img
              src={userData?.profilePicture || "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 mt-16">
          {/* Profile Header */}
          <div className="bg-blue-600 h-48 rounded-lg relative mb-20">
            <button className="absolute right-4 top-4 bg-white text-sm px-4 py-2 rounded-md hover:bg-gray-100">
              Change Cover
            </button>
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={userData?.profilePicture || "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white bg-white"
                />
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <i className="ri-camera-line"></i>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={loading}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Settings Navigation */}
          <div className="border-b mb-8">
            <nav className="flex space-x-8">
              <button onClick={() => { settwoactive("Account Settings") }} className={`px-4 py-2 border-b-2  ${twoactive === "Account Settings" ? "border-blue-600 text-blue-600  hover:text-blue-600" : "text-gray-500 hover:text-gray-700 "}  `}>
                Account Settings
              </button>
              <button onClick={() => {
                settwoactive("Freelancer Hire")
              }} className={`px-4 py-2 border-b-2  ${twoactive === "Freelancer Hire" ? "border-blue-600 text-blue-600" : "text-gray-500 "}`}>
                Freelancer Hire
              </button>
              <button onClick={() => { settwoactive("Freelancer Post") }} className={`px-4 py-2 border-b-2  ${twoactive === "Freelancer Post" ? "border-blue-600 text-blue-600" : "text-gray-500 "}`}>
                Freelancer Post
              </button>
              <button onClick={() => { settwoactive("Billing") }} className={`px-4 py-2 border-b-2  ${twoactive === "Billing" ? "border-blue-600 text-blue-600" : "text-gray-500 "}`}>
                Payment History
              </button>
            </nav>
          </div>

          { /* update Form Data */}
          <form onSubmit={handleSubmit} className={` ${twoactive != 'Account Settings' ? "hidden" : "max-w-4xl grid grid-cols-2 gap-6"} `}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) => { setFormData(prev => ({ ...prev, username: e.target.value })) }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="Email"
                value={formData.email}
                onChange={(e) => { setFormData(prev => ({ ...prev, email: e.target.value })) }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => { setFormData(prev => ({ ...prev, phoneNumber: e.target.value })) }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education (Degree/Course)
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={(e) => {
                  setFormData(prev => ({
                    ...prev,
                    education: e.target.value
                  }))
                }}
                placeholder="e.g., Bachelor of Science"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) => { setFormData(prev => ({ ...prev, location: e.target.value })) }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Languages
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={(e) => { setFormData(prev => ({ ...prev, languages: e.target.value })) }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </form>
          { /* post Form Data */}
          <form onSubmit={postSubmit} className={` ${twoactive != 'Freelancer Post' ? "hidden" : "max-w-4xl grid grid-cols-2 gap-6"} `}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Post Name *
              </label>
              <input
                type="text"
                name="postname"
                required
                value={postname}
                onChange={(e) => { setpostname(e.target.value) }}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                name="tittle"
                required
                value={tittle}
                onChange={(e) => { settittle(e.target.value) }}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                required
                value={description}
                onChange={(e) => { setdescription(e.target.value) }}
                rows="4"
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hourly Rate ($)
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={hourlyRate}
                onChange={(e) => { sethourlyRate(e.target.value) }}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                name="skills"
                value={skills}
                onChange={(e) => { setskills(e.target.value) }}
                placeholder="e.g., JavaScript, React, Node.js"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio Images
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const finalfine = []
                  for (let file of e.target.files) {
                    finalfine.push(file)
                  }
                  setImages(finalfine)
                }
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex items-center">
              <label className="ml-2 text-sm text-gray-700">
                Mark as Pro Service
              </label>

              <input
                type="text"
                name="isPro"
                checked={pro}
                onChange={(e) => { setpro(e.target.value) }}
                className="h-9 ml-5 w-40 text-blue-600 text-black border"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </form>
          <div className={` ${twoactive != 'Freelancer Hire' ? "hidden" : " overflow-x-hidden grid grid-cols-2 gap-6"} `}>
            <div className=" w-[140vh]  grid grid-cols-2 gap-8">
              {hireData && hireData?.map((postdata) => (
                <div key={postdata._id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={postdata.profile || "https://via.placeholder.com/48"}
                          alt={postdata.postname}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold mr-2">{postdata.postname}</h3>
                            {postdata.isPro && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Pro</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">{postdata.tittle}</h4>
                    <p className="text-gray-600 mb-4">{postdata.description}</p>

                    {postdata.skills && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {postdata.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Hourly Rate: ${postdata.hourlyRate}/hr
                      </p>
                    </div>
                    {postdata.portfolioImages && (
                      <div className="grid grid-cols-2 mt-2 gap-2">
                        {postdata.portfolioImages.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Portfolio"
                            className="w-full h-32 object-cover rounded-md"
                          />
                        ))}
                      </div>
                    )}
                    <button className="w-full mt-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={` ${twoactive != 'Billing' ? "hidden" : " overflow-x-hidden grid grid-cols-2 gap-6 "} `}>
            <Payment />
          </div>

        </div>
      </div>
    </div>

  );
};

export default Profile;