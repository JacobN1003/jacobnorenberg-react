import React from 'react';
import NavigationBar from './components/NavigationBar.jsx'
import HomePage from './components/HomePage.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Skills from './components/Skills.jsx'
import ContactMe from './components/ContactMe.jsx'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './css/App.css';


function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename= {process.env.PUBLIC_URL}>
      <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/work-experience">
            <WorkExperience/>
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/contact-me">
            <ContactMe/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
