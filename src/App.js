import React from 'react';
import NavigationBar from './components/NavigationBar.jsx'
import HomePage from './components/HomePage.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Skills from './components/Skills.jsx'
import ContactMe from './components/ContactMe.jsx'
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import './css/App.css';


function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={HomePage}>
            {/* <HomePage/> */}
          </Route>
          <Route path="/work-experience" component={WorkExperience}>
            {/* <WorkExperience/> */}
          </Route>
          <Route path="/skills" component={Skills}>
            {/* <Skills/> */}
          </Route>
          <Route path="/contact-me" component={ContactMe}>
            {/* <ContactMe/> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
