import React, { Component } from 'react';  
import { CSSTransition } from 'react-transition-group';  
import styles from './App.module.css';  
import Sidebar from './left/Sidebar';  
import MainContent from './right/MainContent';  
import FloatingNavBar from './right/FloatingNavBar';

class App extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showMainContent: false,  
        };  
    }  

    componentDidMount() {  
        this.setState({ showMainContent: true });  
    }  

    render() {     
        const sections = [  
            { id: 'section1', title: '自我介绍' },  
            { id: 'section2', title: '项目经验' },  
            { id: 'section3', title: '荣誉奖项' },  
            { id: 'section4', title: '教育经历' },  
        ];  

        return (  
            <div className={styles.container}>  
                <div className={styles.sidebar}>  
                    <Sidebar />  
                </div>  
                <FloatingNavBar sections={sections} /> {/* 添加导航栏 */}  
                <CSSTransition  
                    in={this.state.showMainContent}  
                    timeout={500}  
                    classNames="fade"  
                    unmountOnExit  
                >  
                    <div className={styles["main-content"]}>  
                        <MainContent />  
                    </div>  
                </CSSTransition>  
            </div>  
        );  
    }  
}  

export default App;