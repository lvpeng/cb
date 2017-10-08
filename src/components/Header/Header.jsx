import React from 'react';
import './Header.css'
import logo from '../../logo.svg';
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
                    <Button text="写博客" icon="pencil" />
                </div> 
            </header>
        )
    }
}

export default Header;