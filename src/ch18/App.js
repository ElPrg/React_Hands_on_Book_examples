
import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import { Container } from 'react';

// import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router-dom';
//  import { Router, Route,NavLink, Link   } from 'react-router-dom'; //RRV4
//  import { createBrowserHistory } from 'history';

import './styles.css';

import Main from './Main'
//----------------------------------------------------------------------

// const hashHistory = createBrowserHistory()
// const rootElement = document.getElementById('root');

// ReactDOM.createPortal( "<div id='content'></div> ", rootElement);

var destination = document.querySelector("#root");

// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link } = ReactRouter

// class Apps extends React.Component
// {
//   render() 
//   {
//     return (
      
//       <Main />
//     )
//   }
// };




//------------------------------------------------------------------------
class App extends Component 
{
    

render() {  
        
    return (
            
     <Main/>
                    
    );

    }
}

export  default App;
