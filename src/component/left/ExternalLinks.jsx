import React from 'react';  
import styles from '../styles/ExternalLinks.module.css';  

//力扣，博客
const leetcode = `${process.env.PUBLIC_URL}/images/leetcode.svg`;  
const github = `${process.env.PUBLIC_URL}/images/github.svg`;  
const blog = `${process.env.PUBLIC_URL}/images/blog.svg`;


const ExternalLinks = () => {  
  return (  
    <div className={styles.externalLinks}>  
      <a href="https://github.com/AlexQFMM2/alexqfmm2.github.io" target="_blank" rel="noopener noreferrer">  
        <img src={github} alt="GitHub" />  
      </a>  
      <a href="https://leetcode.cn/u/gan-mo-7/" target="_blank" rel="noopener noreferrer">  
        <img src={leetcode} alt="LinkedIn" />  
      </a>  
      <a href="https://alexqfmm2.github.io/" target="_blank" rel="noopener noreferrer">  
        <img src={blog} alt="LinkedIn" />  
      </a>  
    </div>  
  );  
};  

export default ExternalLinks;