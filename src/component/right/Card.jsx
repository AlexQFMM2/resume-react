// Card.jsx  
import React from 'react';  
import styles from '../styles/Card.module.css';  
import SkillButton from '../left/SkillButton';  

const Card = ({ title, date, icon, content, link, tag }) => {  
    return (  
        <div className={styles.card}>  
            <div className={styles.cardHeader}>  
                <img src={icon} alt="icon" className={styles.icon} />  
                <h3>{title}</h3>  
            </div>  
            <div className={styles.cardContent}>  
                {content}  
            </div>  
            <div className={styles.skillContainer}> {/* 新增容器 */}  
                {tag && tag.map((text, index) => (  
                    <SkillButton key={index} skill={text} />  
                ))}  
            </div>  
            <div className={styles.cardFooter}>  
                <span className={styles.date}>{date}</span>  
                {link && (<a href={link} className={styles.dateLink}> {/* 添加链接 */}  
                    点这里  
                </a>)}  
                {/* 其他小图标可以在这里添加 */}  
            </div>  
        </div>  
    );  
};  

export default Card;