
import React,{Component} from 'react';
// import { Container } from 'react';


class Circle extends React.Component {
    
    render() {
    var circleStyle = 
    {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: this.props.bgColor,
    borderRadius: "50%",
    width: 100,
    height: 100,
    };
    
    return (
    <div style={circleStyle}>
    </div>
    );
}
}

var theCircle = <Circle bgColor="#F9C240" />;

function showCircle() {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);
        
    
    return <Circle bgColor={colors[ran]} />;
    }


    function Create_Render_Data ()
    {
        var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
        "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
        var renderData = [];
        for (var i = 0; i < colors.length; i++) 
        {
            var color = colors[i];
            renderData.push(<Circle key={i + color} bgColor={colors[i]} />);
        }
    
        return renderData;
    }

class App extends Component 
{
    
    render() {  
            
        return (
            

            //1.
            // <Circle bgColor="#F9C240" />


            //2. My if use var need to frame with "div"
            // <div> 
            // {theCircle}    
            // </div>     
            
            //3.
            // <div> 
            // {showCircle()}
            // </div>
            //4.
            <div> 
            {Create_Render_Data()}
            </div>
            
                       
        );

    }
}

export  default App;
