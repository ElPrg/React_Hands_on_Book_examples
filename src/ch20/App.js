
//index.js to App.sj

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import counter from "./reducer";
import './styles.css';

import Main from './Main'
//----------------------------------------------------------------------

// store
var store = createStore(counter);

//------------------------------------------------------------------------
class App extends Component 
{
    

render() {  
        
    return (
            
      <Provider store={store}>
      <Main />
      </Provider>
                    
    );

    }
}

export  default App;
