import React, { Component } from 'react';
import './App.css';
import './App.scss';
import Introduction from './Sections/Introduction/Introduction';
import Skillset from './Sections/Skillset/Skillset';
import Experience from './Sections/Experience/Experience';
import PublishedApp from './Sections/PublishedApps/PublishedApp';
import Footer from './Sections/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Introduction />
          <Skillset />
          <Experience />
          <PublishedApp />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
