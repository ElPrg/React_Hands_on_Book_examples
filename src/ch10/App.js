
import React,{Component} from 'react';
// import { Container } from 'react';


class Counter extends React.Component {
    render() 
    {
        var textStyle = 
        {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        return (
        <div style={textStyle}>
        {this.props.display}
        </div>
        );
    }
    
}

//----------------------------------------------------------------------
class PlusButton extends React.Component {
    render() {
    return (
    <button onClick={this.props.clickHandler}>
    +
    </button>
    );
    }
    }
//----------------------------------------------------------------------

// var foo = document.querySelector("btn");


class CounterParent extends React.Component {

constructor(props) 
{
    super(props);

        

    this.state = {
    count: 0
    };

    var foo = document.getElementsByClassName(".btn"); // Возращает коллекцию
    // var foo = document.querySelector(".btn");

    var ind = foo.length;
    // while (ind--)
    // {
    // //   closeIcons[ind].addEventListener("click", closeBigImgAndContainer);

    // foo.addEventListener("click", this.doSomething, false);
    // }

    this.increase = this.increase.bind(this);
    //My
    this.decrease = this.decrease.bind(this);
}

handleMyEvent(e) 
{
    //do else
    this.doSomething(e) ;
}

componentDidMount()
{
    window.addEventListener("someEvent", this.handleMyEvent);
}

componentWillUnmount() 
{
window.removeEventListener("someEvent", this.handleMyEvent);
}

doSomething(e) 
{
    console.log(this); // button element
}

increase(event) 
{
        var currentCount = this.state.count;
        if (event.shiftKey) 
        {
            currentCount += 10;
        } 
        else
        {
            currentCount += 1;
        }
        this.setState({ count: currentCount });
}

decrease(e) 
{
        var currentCount = this.state.count;
        if (e.shiftKey) {
        currentCount -= 10;
        } else {
        currentCount -= 1;
        }
        this.setState({
        count: currentCount
        });
}


    render() 
    {
        var backgroundStyle = 
        {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        
        var buttonStyle = 
        {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            
            //1.
            // <div style={backgroundStyle}>
            // <Counter display={this.state.count} />
            // <button style={buttonStyle}>+</button>
            // </div>
            // );
            //2.
            <div style={backgroundStyle}>
            <Counter display={this.state.count}/>
            <button className="btn" onClick={this.increase} style={buttonStyle}>+</button>
            {/* //My */}
            <button onClick={this.decrease} style={buttonStyle}>-</button>

            <PlusButton clickHandler={this.increase} />
            </div>

            

            );
        }
}

//----------------------------------------------------------------------
class App extends Component 
{
    
    render() {  
            
        return (
            
                <CounterParent/>
            
        );

    }
}

export  default App;
