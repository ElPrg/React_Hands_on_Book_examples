
import React,{Component} from 'react';
// import { Container } from 'react';


class LightningCounter extends Component
{
    constructor(props) 
    {
        super(props);
    
        this.state = { strikes: 0 };
        
        this.timerTick = this.timerTick.bind(this);
    }
    
  

    timerTick() {
        this.setState({
        strikes: this.state.strikes + 100
        });
        }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
        }

    // render() 
    // {
    //     return (
    //     // <h1>Привет!</h1>
    //     <h1>{this.state.strikes}</h1>
    //     );
    // }

    render() {
        var counterStyle = {
        color: "#66FFFF",
        fontSize: 50
        };

        var count = this.state.strikes.toLocaleString();
        
        return (
                <h1 style={counterStyle}>{count}</h1>
        );
    }

}

class LightningCounterDisplay extends Component
{
    render() 
    {
        var commonStyle = {
            margin: 0,
            padding: 0
          }
          var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "#020202",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999999",
            borderRadius: 10
          };

          var textStyles = {
            emphasis: {
              fontSize: 38,
              ...commonStyle
            },
            smallEmphasis: {
              ...commonStyle
            },
            small: {
              fontSize: 17,
              opacity: 0.5,
              ...commonStyle
            }
          }

        return (
            // <div style={divStyle}>

            //  <LightningCounter/>
            // </div>

            <div style={divStyle}>
            <LightningCounter />
            <h2 style={textStyles.smallEmphasis}> Вспышки молнии </h2>
            <h2 style={textStyles.emphasis}>На планете</h2>
            <p style={textStyles.small}>( с момента запуска кода)</p>
            </div>

        );
    }
}


class App extends Component 
{
    
    render() {  
            
        return (
            
                <LightningCounterDisplay/>
            
        );

    }
}

export  default App;
