import React from 'react';  
import styles from '../styles/FloatingNavBar.module.css';  

const FloatingNavBar = ({ sections }) => {  
    const handleScrollToSection = (id) => {  
        const section = document.getElementById(id);  
        if (section) {  
            section.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到指定标签  
        }  
    };  

    return (  
        <div className={styles.navBar}>  
            {sections.map(section => (  
                <button   
                    key={section.id}   
                    onClick={() => handleScrollToSection(section.id)}   
                    className={styles.navItem}  
                >  
                    {section.title}  
                </button>  
            ))}  
        </div>  
    );  
};  

export default FloatingNavBar;