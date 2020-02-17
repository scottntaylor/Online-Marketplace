import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home/home";
import Cart from "../src/components/Cart/cart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
