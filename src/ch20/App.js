
//index.js to App.sj

import React, {Component} from "react";

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
      {/* My I add else Main */}
      {/* <Main /> */}
      </Provider>
                    
    );

    }
}

export  default App;
