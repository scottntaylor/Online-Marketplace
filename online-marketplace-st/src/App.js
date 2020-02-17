import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
