import React from 'react';
import './Header.css'
import logo from '../../logo.gif';
import Button from '../Button/Button.jsx'

class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
                <img className="App-logo" src={logo} alt="cb"/>
                <h1 className="App-title">创作中心</h1>
                <Button text="写博客" icon="pencil" />
                <img className="avatar" alt=""/>
            </header>
        )
    }
}

export default Header;