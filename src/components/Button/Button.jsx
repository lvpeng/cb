import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon.jsx';

class Button extends React.Component {
    render(){
        return (
            <a href="#" className="button button-red">
                <Icon icon={this.props.icon}/>
                <span>{this.props.text}</span>
            </a>
        )
    }
}


export default Button;