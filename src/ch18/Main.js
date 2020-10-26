
//Ext modules
import React, {Component} from "react";
import {Route,NavLink,HashRouter } from "react-router-dom";


import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

//Internal modules

var destination = document.querySelector("#container");

class Main extends Component {
    render() 
    {
      return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
      )
    }
}
export default Main;