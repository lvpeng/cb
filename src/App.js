import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Main />
      </div>
    );
  }
}

export default App;
