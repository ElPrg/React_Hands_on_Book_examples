
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import { Container } from 'react';
import './styles.css';



//----------------------------------------------------------------------

var destination = document.querySelector("#container");
var xhr;

class IPAddress extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>( This is your IP address...probably :P )</p>
            </div>
        );
    }
};

class IPAddressContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

   async componentDidMount() {
    // componentDidMount() {
        xhr = new XMLHttpRequest();
        
        // xhr.open('GET', "http://ipinfo.io/json", true);

        // ipinfo.io

        xhr.open('GET', "https://ipinfo.io/json", true);
        xhr.withCredentials = true;
        // xhr.setRequestHeader("Origin", "http://ipinfo.io/");
        // xhr.setRequestHeader("Access-Control-Request-Origin", "http://ipinfo.io");
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
        // xhr.setRequestHeader("Upgrade-Insecure-Requests","1");
        // xhr.setRequestHeader("Host", "ipinfo.io");
        // xhr.setRequestHeader("TE", "Trailers");
        // xhr.setRequestHeader("Connection", "keep-alive");
        
        // xhr.setRequestHeader("Accept",
        // "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");

        xhr.addEventListener("readystatechange", this.processRequest, false);
        xhr.send();
                  // var status = false;

                  // xhr.onload = function (e) {
                  //   if (xhr.readyState === 4) {
                  //     if (xhr.status === 200) {
                  //       this.setState({ data: xhr.responseText });
                  //       status = true;
                  //     } else {
                  //       console.error(xhr.statusText);
                  //     }
                  //   }
                  // };
                  // xhr.onerror = function (e) {
                  //   console.error(xhr.statusText);
                  // };
                  // xhr.send(null);

        
        // setRequestHeader("Access-Control-Allow-Origin","*")

        // let url= 'https://ipinfo.io/json';
        // let json = "";
        // let response = await fetch(url);

        // if (response.ok) { // если HTTP-статус в диапазоне 200-299
        //   // получаем тело ответа (см. про этот метод ниже)
        //   json = await response.json();
        // } else {
        //   alert("Ошибка HTTP: " + response.status);
        // }


        // console.log(json)
           
      
      }

    processRequest() {
        
      console.log(' xhr.readyState = ' +  xhr.readyState);
      console.log(' xhr.status = ' +  xhr.status );

      if (xhr.readyState == 4 && xhr.status == 200 )
      {
      // if (xhr.readyState == 4  ) 
                  var response = JSON.parse(xhr.responseText);

            console.log(' rsp = ' +  response);

            this.setState({
                ip_address: response.ip
            });
        }
    }
    
    render() {
        return (
            <IPAddress ip={this.state.ip_address}/>
        );
    }
};

//----------------------------------------------------------------------
class App extends Component 
{
    
    render() {  
            
        return (
                
                <IPAddressContainer/>
            
        );

    }
}

export  default App;
