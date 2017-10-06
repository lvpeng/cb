import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import NavItems from './components/Nav/NavItems.json'


class App extends React.Component {
  constructor(){
      super();
      this.state = {
        navItems: NavItems.list
      }
  }
  render() {
    return (
      <div className="App">
         <Header />
         <Nav items={this.state.navItems} />
      </div>
    );
  }
}

export default App;
