import React from 'react';

const Profile = ({ name, rating, reviews, services, profileImage }) => {
  return (
    <>
    <div className="border p-4 m-4 text-center">
      <img src={profileImage} alt={`${name}'s profile`} className="w-24 h-24 mx-auto rounded-full" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p>Rating: {rating}</p>
      <p>Reviews: {reviews}</p>
      <p>Services: {services.join(', ')}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">See profile</button>
    </div>
    </>
  );
};

export default Profile;
