// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllTrain from '../src/Pages/AllTrain';
import SingleTrain from '../src/Pages/SingleTrain';



function App() {
  return (
    <Router>
     
        <Route exact path="/" component={AllTrain} />
        <Route path="/trains/:trainId" component={SingleTrain} />
    
    </Router>
  );
}

export default App;
