import React, { useContext } from 'react';
import './App.css';
import TableList from './components/TableList';
import Carousel from './components/Carousel';
//import CardsList from './components/CardsList';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App"> 
      <Navigation/>
        <Switch>
          <Route path="/game"> 
            <Carousel/>
          </Route>
          {/* <Route path="/cards">
            <CardsList/>
          </Route> */}
          <Route path="/"> 
            <TableList/>
          </Route>
          {/* <Route path="/">
            Welcome to LOGOS!
            </Route> */}
        </Switch>
        </div>
    </BrowserRouter>
  ); 
}

export default App;
