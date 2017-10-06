import React from 'react';
import './Nav.css';

class Nav extends React.Component{
    render(){
        const navTree = this.props.items.map((item) =>
            {if(item.level === 0) {
                <li className="nav-sub-title">
                    {item.parent}
                </li>
            }else if(item.level === 1) {
                <li className="nav">
                </li>   
            }}
            
        )
        return (
            <nav>
                <ul>
                    {navTree}    
                </ul>
            </nav>
        )
    }
}

export default Nav;