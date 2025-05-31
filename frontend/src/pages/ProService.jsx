import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/Header'
import Footers from '../Component/Footers'
import axios from 'axios'

const ProService = () => {
    const [post, setpost] = useState(null)
      
    const submit=async(ele)=>{
        try {
            const response = await axios.put("http://localhost:9090/user/update", {addtocard:ele},{ withCredentials: true })
            if (response.status === 200) {
                alert(`hired freelancer`) 
            }
        } catch (error) {
            console.error(error)
            alert("Error:", error)
        }
    }

    const payments=async(amount,postdata)=>{
        try {
            const response=await axios.post("http://localhost:9090/payment/create/order",{amount,currency:"INR",postdata})
            let orderDatas; 
            if(response.status==201){
                orderDatas=response.data.order;
            }
            var options = {
                key:import.meta.env.Razopay_key , // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: postdata.postname,
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: orderDatas._id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new Razorpay(options);
            document.getElementById('rzp-button1').onclick = function(e){
                rzp1.open();
                e.preventDefault();
            }
            
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:9090/post/all/post", { withCredentials: true })
                if (response.status === 200) {
                    const sortedPosts = response.data.showAllPost.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setpost(sortedPosts)
                }
            } catch (error) {
                console.error(error)
                alert("Error:", error)
            }
        }

        fetchPosts() // Call the function directly
    
        // No need for return in useEffect unless you're cleaning up
    }, []) // Add dependency array to prevent infinite loops

    // Sample freelancer data


    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">Hire the best web designers</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Work with top-quality freelance web designers who will get your project done just right.
                        </p>
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:scale-105">
                            Hire Pro freelancers
                        </button>
                    </div>
                </div>
            </div>

            {/* Freelancers Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-3 gap-8">
                    {post && post.map((postdata) => (
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
                                <button onClick={()=>{submit(postdata._id)}} className="w-full mt-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                                    Hire
                                </button>
                                <button onClick={()=>{payments(postdata.hourlyRate,postdata._id)}} className="w-full mt-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => { window.location.href = "/view" }}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        View More Freelancer <i className="ri-arrow-right-long-fill"></i>
                    </button>
                </div>
            </div>
            <Footers />
        </div>
    )
}

export default ProService