import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import { useHistory } from 'react-router-dom';

import Page1Feeling from '../Page1Feeling/Page1Feeling';
import Page2Understanding from '../Page2Understanding/Page2Understanding';
import Page3Supported from '../Page3Supported/Page3Supported';
import Page4Comments from '../Page4Comments/Page4Comments';
import Page5Review from '../Page5Review/Page5Review';
import Page6TY from '../Page6TY/Page6TY';

function App() {
  const history = useHistory();
  const startFeedbackLoop = () => {
    history.push('/');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        {/*changed page1 path from Page1Feeling to / */}
        <Router> 
          <Route exact path="/" component={Page1Feeling} />
          <Route exact path="/Page2Understanding" component={Page2Understanding} />
          <Route exact path="/Page3Supported" component={Page3Supported} />
          <Route exact path="/Page4Comments" component={Page4Comments} />
          <Route exact path="/Page5Review" component={Page5Review} />
          <Route exact path="/Page6TY" component={Page6TY} />
        </Router>
      </main>
    </div>
  );
}

export default App;
