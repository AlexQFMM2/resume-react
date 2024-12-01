import React from 'react';  
import styles from '../styles/ProfilePicture.module.css';
const Avatar = `${process.env.PUBLIC_URL}/images/Avatar.png`;

const ProfilePicture = () => {  
  return (  
    <div className={styles.profilePicture}>  
      <img src={Avatar} alt="Profile" />  
    </div>  
  );  
};  

export default ProfilePicture;