import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotificationButton from './notification-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         
            <NotificationButton />
        
        </header>
      </div>
    );
  }
}

export default App;
