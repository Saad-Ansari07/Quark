import React from 'react'
import Navigation from './components/Navigation.js'
import { Pad } from './components/Pad.js';
import { Volcano } from './components/Volcano.js'
import { Heading } from './components/Heading.js'
import { About } from './About/About.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router >
      <Navigation />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
     </Switch>
      </Router>
    </div>
  )
}

function Homepage() {
  return (
    <div>
      <Heading />
      <Volcano />
      <Pad />
       </div>
  )
}

export default App;