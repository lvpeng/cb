import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon.jsx';

class Button extends React.Component {
    render(){
        return (
            <button className="Button Button-red" style={{marginLeft: "654px"}}>
                <Icon icon={this.props.icon}/>
                <span>{this.props.text}</span>
            </button>
        )
    }
}


export default Button;