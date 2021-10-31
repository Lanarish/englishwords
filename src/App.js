import React from 'react';
import './App.scss';
import TableList from './components/Table/TableList';
import Carousel from './components/Card/Carousel';

import Header from './components/Main/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WordsStore from './store/WordsStore';
import {Provider} from "mobx-react"; 

const stores={
  wordsStore:new WordsStore()
}

function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App"> 
      <Header/>
      <Provider {...stores}>
        <Switch>
          <Route path="/game"> 
            <Carousel/>
          </Route>
          <Route path="/"> 
            <TableList/>
          </Route>
        </Switch>
        </Provider>
        </div>
    </BrowserRouter>
  ); 
}

export default App;
