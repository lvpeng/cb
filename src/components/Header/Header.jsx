import React from 'react';
import './Header.css'
import logo from '../../logo.svg';
// import logo from '../../si-sprite.svg';
import avatar from '../../avatar.jpg';
import Button from '../Button/Button.jsx'

class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <div className="col-2 header-left">
                    <img className="header-left-logo" src={logo} alt="cb"/>    
                     <h3 className="header-left-title">创作中心</h3>   
                </div> 
                <div className="col-3 header-right">
                    {/* <Button text="写博客" icon="pencil" />
                    <img className="avatar" width="60" height="60" src={avatar} alt="avatar" /> */}
                    {/* <div className="user-center">
                        <div className="user-center-above">
                            <span className="user-name">evanLyu</span>
                        　   <span className="logout">退出</span>
                        </div>
                        <div className="user-center-below">
                            <img className="avatar2" width="24" height="24" src={avatar} alt="" />
                             <a href="" className="user-tag">CSDN编辑</a>
                        </div>
                    </div> */}
                </div> 
            </header>
        )
    }
}

export default Header;