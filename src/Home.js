import React from "react";
import "./Home.css";

export default class Home extends React.Component {    
    state = {
        text: '',
        data: {},
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let text = this.state.text;
        await fetch('http://0.0.0.0:8000/api/query', {
            method: 'POST',
            headers: {
                'Content-Type' : 'text/plain'
            }, 
            body: text
        })
        .then(data => data.json())
        .then(data => {
            if(data.cod == 200){
                return this.setState({ data: data })
            } else {
                this.reject(data.cod)
            }
        })
        .then(this.setState({ text: '' }))
        .catch((error) => {
            alert('Error ', error)
        })
    }

    render() {
        let display;
        if(Object.keys(this.state.data).length > 0){
            display = (
            <body>
                <div>
                    <h3>{this.state.data.name}</h3>
                    <p className="desc">{this.state.data.weather[0].description}</p>
                    <p className="temp">{Number((this.state.data.main.temp - 273.15).toFixed(2))}°C | {Number(((this.state.data.main.temp - 273.15) * 9/5 + 32).toFixed(2))}°F</p>
                </div>
            </body>
            )
        }   
        return(
            <body>
                <h1>SEARCH A CITY.</h1>
                <form onSubmit={this.handleSubmit} className="input">
                    <input type="text" value={this.state.text} onChange={(event) => {this.setState({ text: event.target.value })}} className="inputValue" placeholder="Enter a city..."></input>
                </form>
                {display}
            </body>
        )
    }
}