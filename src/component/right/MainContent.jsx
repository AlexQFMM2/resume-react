// MainContent.jsx  
import React from 'react';  
import Card from './Card';  
import styles from '../styles/MainContent.module.css';
const moveIco = `${process.env.PUBLIC_URL}/images/电影.svg`;  
const serIco = `${process.env.PUBLIC_URL}/images/服务器.svg`;  
const resuIco = `${process.env.PUBLIC_URL}/images/简历.svg`;  
const awardImg = `${process.env.PUBLIC_URL}/images/1733016441471.jpeg`;  
const awardIco = `${process.env.PUBLIC_URL}/images/奖杯.svg`;  
const studyIco = `${process.env.PUBLIC_URL}/images/教育.svg`;

const MainContent = () => {  
    return (  
        <div className={styles.mainContent}>
            <div id="section1">
                <h2>自我介绍</h2>  
                <p>  
                    面试官你好,我是即将毕业的大四在读学生。在校期间我成绩优异,屡次拿下各种奖学金;积极参加比赛,拿下蓝桥杯c/c++国赛三等奖，对计算机抱有巨大的兴趣,在课后时间也自学了相当多的知识，自己做了一些小的项目,个人博客,个人简历,搭建了高并发多线程服务器。
                    我对与前端/后端都可以接受,目标城市是南京、苏州、盐城、上海;期望薪资是6-12k。我非常希望能收到你给予的宝贵的实习机会! 
                </p> 
                <br></br> 
                <hr></hr>
                <br></br>
            </div>
            <div id="section2">
                <h2>项目</h2>  
                <Card   
                    title="电影推荐算法"   
                    date="2024/09 - 2024/10"   
                    icon={moveIco}   
                    content="这是一个基于Pytorch的模型,通过Movielens数据集,训练出了一个可以通过用户喜好推荐电影的模型 "
                    tag = {["python" , "pytorch"]}
                    link = "https://github.com/AlexQFMM2/MovieLens"
                />
                <Card   
                    title="高并发聊天服务器"   
                    date="2024/08 - 2024/10"   
                    icon={serIco}   
                    content="这是一个在linux环境里用c/c++搭建的高并发多线程服务器"
                    tag = {["c/c++","socket","数据库链接池","线程池","epoll"]}
                    link = "https://github.com/AlexQFMM2/MyChat/tree/master"
                />  
                <Card   
                    title="个人简历"   
                    date="2024/11 - 2024/12"   
                    icon={resuIco}   
                    content="这是一个用react做得页面"
                    tag = {["React","html","css","js"]}
                    link = "..."
                />   
            </div>

            <div id="section3">
                <br></br> 
                <hr></hr>
                <br></br>
                <h2>荣誉奖项</h2>
                <Card   
                    title="蓝桥杯C++算法组国赛三等奖"   
                    date="2024/6"   
                    icon={awardIco}   
                    content="在第十五届蓝桥杯c++组中，我拿到了国赛三等奖的优异成绩"
                    tag = {["c/c++","数据结构与算法"]}
                    link = {awardImg}
                />  
            </div>

            <div id="section4">
                <br></br> 
                <hr></hr>
                <br></br>
                <h2>教育经历</h2>
                <Card   
                    title="南京师范大学泰州学院(专转本)"   
                    date="2023/09- 2025/06"   
                    icon={studyIco}   
                    content="我在学校里成绩在前5%,GPA 3.5/4 ,屡次拿奖学金.虽然我的学历不是最出色的，但是我相信勤能补拙,还有无限的潜力,未来还有无限的可能"
                />  
            </div>
        </div>  
    );  
};  

export default MainContent;