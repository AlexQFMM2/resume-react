import React from 'react';  
import styles from '../styles/Sidebar.module.css';  
import ProfilePicture from './ProfilePicture';  
import SkillButton from './SkillButton';  
import ExternalLinks from './ExternalLinks';  

const Sidebar = () => {  
  const skills = ['c/c++', 'java', 'Python', 'Git', 'MYSQL', 'React', 'HTML', 'Javascript', 'CSS', 'LINUX', 'Docker'];  
  const languages = ['English', 'Chinese'];  

  return (  
    <div className={styles.sidebar}>  
      <ProfilePicture />  
      <h2>徐为康</h2>  
      <span>he/him</span>  
      
      <h3>个人简介</h3>  
      <p>  
        大四在读学生，屡次获得一等奖学金，技术扎实，蓝桥杯国赛三等奖，正在找实习。 
      </p>  

      <h3>联系方式</h3>  
      <p>1434540343@qq.com</p>  
      <p>17551763527</p>  

      <h3>技能</h3>  
      <div className={styles.skills}>  
        {skills.map(skill => (  
          <SkillButton key={skill} skill={skill} />  
        ))}  
      </div>  

      <h3>熟悉语言</h3>  
      <div className={styles.languages}>  
        {languages.map(lang => (  
          <span className={styles.language} key={lang}>{lang}</span>  
        ))}  
      </div>  

      <ExternalLinks />  
    </div>  
  );  
};  

export default Sidebar;