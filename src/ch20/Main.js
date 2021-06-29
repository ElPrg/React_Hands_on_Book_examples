
//App.js to Main.js

//Internal modules

import {connect} from "react-redux";
import Counter from "./Counter";

function mapStateToProps(state) 
{
 
  // My
  console.log("===mapStateToProps====", "state ===" , state.count);
  
  return {
    countValue: state.count
  };
}


//Actions

var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};
//Mapping Actions REact to Component Properties

function mapDispatchToProps(dispatch)
{
// My
  console.log("===mapDispatchToProps====");

  return { 
    

  increaseCount: function() { return dispatch(increaseAction); },
  decreaseCount: function() { return dispatch(decreaseAction); }

  };
}


// HOC component
var connectedComponent = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default connectedComponent;

// export default Main;