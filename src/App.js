import React from 'react';
import './App.css';
import TableList from './components/TableList';
import Carousel from './components/Carousel';
import CardsList from './components/CardsList';
import Navigation from './components/Navigation';
import words from './components/assets/words.json';
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <Navigation/>
        <Switch>
          <Route path="/table"> 
            <TableList/>
          </Route>
          <Route path="/game"> 
            <Carousel data={words}/>
          </Route>
          <Route path="/cards">
            <CardsList/>
          </Route>
          <Route path="/">
            Welcome to LOGOS!
            </Route>
        </Switch>
        </div>
    </BrowserRouter>
  ); 
}

export default App;
