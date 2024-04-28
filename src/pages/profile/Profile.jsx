import React from 'react';
import { TbCircleDashed } from 'react-icons/tb';
import './Profile.css'; // Import the CSS file for this component
import Proposts from "../../components/profileposts/Proposts";

const ProfileUserDetails = () => {
  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <div className='profile-image'>
          <img src="https://images.freeimages.com/vhq/images/previews/c7e/sunflower-9820.png" alt="Profile" />
        </div>

        <div className='profile-info'>
          <div className='profile-info-top'>
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>

          <div className='profile-stats'>
            <div>
              <span>10</span>
              <span>  Total Projects</span>
            </div>
            <div>
              <span>5</span>
              <span> Completed</span>
            </div>
            <div>
              <span>5</span>
              <span> Created</span>
            </div>
          </div>

          <div className='profile-bio'>
            <p className='font-semibold'>Full Name</p>
            <p className='text-sm'>Bio</p>
          </div>
        </div>
      </div>
      <div className='x'>
      <Proposts/>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
