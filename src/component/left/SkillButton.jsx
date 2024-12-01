import React from 'react';  
import styles from '../styles/SkillButton.module.css';  

const SkillButton = ({ skill }) => {  
  return (  
    <button className={styles.skillButton}>{skill}</button>  
  );  
};  

export default SkillButton;