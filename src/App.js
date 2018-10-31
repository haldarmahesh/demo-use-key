import React, { Component } from 'react';
import './App.css';
import UseKeyComponent from './use-key/index';

class App extends Component {

  render() {
    return (
      <>
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">useKey - React hook</h3>
          </div>
        </header>
        <main className="inner cover">
          <UseKeyComponent />
        </main>
        <footer className="mastfoot mt-auto">
          Github
          </footer>
      </>
    );
  }
}

export default App;
