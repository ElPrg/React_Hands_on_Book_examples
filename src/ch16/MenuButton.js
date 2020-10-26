// import React, { Component } from "react";
import React, { PureComponent}  from "react";
import "./MenuButton.css";

// class MenuButton extends Component {
class MenuButton extends PureComponent {
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  //   }

  render() {

    console.log("Rendering: MenuButton");

    return (
      <button id="roundButton" 
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}

export default MenuButton;