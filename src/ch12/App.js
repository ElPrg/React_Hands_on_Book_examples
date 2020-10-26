
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import { Container } from 'react';
import './styles.css';

class Colorizer extends React.Component {
    constructor(props, context) {
          super(props, context);

      this.state = {
        color: "",
        bgColor: "white"
      }

      this.colorValue = this.colorValue.bind(this);
      this.setNewColor = this.setNewColor.bind(this);
    }

    colorValue(e) {
      this.setState({color: e.target.value});
    }
    
    setNewColor(e){
      this.setState({
        bgColor: this.state.color
      });

      this._input_my.focus(); // change focus on input
      this._input_my.value = "muu"; // clear edit

      e.preventDefault();
    }

    render() {
      var squareStyle = {
        backgroundColor: this.state.bgColor
      };

      var self = this;

      return (
        <div>
        <div className="colorArea">
          <div style={squareStyle} className="colorSquare"></div>

          <form onSubmit={this.setNewColor}>
            <input onChange={this.colorValue} 
                    ref={
                      function(el) {
                        self._input_my = el;
                      }
                    }
                    placeholder="Enter a color value"></input>
            <button type="submit">go</button>
          </form>
          <ColorLabel color={this.state.bgColor}/>
        </div>

        </div>
      );
    }
  }

//   var heading = document.querySelector("#colorHeading");
  var heading = document.querySelector("#foot");

  class ColorLabel extends React.Component {
    render() {
      return ReactDOM.createPortal(
        ": " + this.props.color,
        heading
      );
    }
  }

//----------------------------------------------------------------------
class App extends Component 
{
    
    render() {  
            
        return (
                
                <Colorizer/>
            
        );

    }
}

export  default App;
