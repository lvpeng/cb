import React from 'react';
import './Main.css';
import Nav from '../Nav/Nav.jsx';
import Aside from '../Aside/Aside.jsx';

class Main extends React.Component{
    render(){ 
        return (
            <div className="row main">
                <Nav />
                <Aside />
            </div>
        )
    }
}

export default Main;