import React from 'react';
import Profile from '../Component/Profile';

const profilesData = [
  {
    name: 'Asad R',
    rating: 5.0,
    reviews: 2260,
    services: ['WordPress', 'WordPress customization', 'Website consultation', 'Website editing'],
    profileImage: 'path_to_asad_image.jpg'
  },
  {
    name: 'Zain M',
    rating: 5.0,
    reviews: 1250,
    services: ['WordPress', 'Elementor Pro', 'Elementor', 'WordPress website development'],
    profileImage: 'path_to_zain_image.jpg'
  },
  {
    name: 'Safyan N',
    rating: 5.0,
    reviews: 543,
    services: ['WordPress', 'Elementor Pro', 'WordPress website development'],
    profileImage: 'path_to_safyan_image.jpg'
  }
];

const ProfilesList = () => {
  return (
    <>
    <div className="flex flex-wrap justify-around">
      {profilesData.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
    </div>
    </>
  );
};

export default ProfilesList;
