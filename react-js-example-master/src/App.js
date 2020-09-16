import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddLoanComponent from "./component/loan/AddLoanComponent";


function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Loan management</h1>
                  <Switch>
                 
                     
                      <Route path="/add-loan" component={AddLoanComponent} />
                     
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
