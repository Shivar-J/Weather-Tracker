import React from "react"
import "./Home.css"

export default class Historical extends React.Component {
    state = {
        start_date: '',
        end_date: '',
        name: '',
        data: {},
    };

    handleChange(evt, field) {
        this.setState({ [field]: evt.target.value });
        console.log(evt.target.value);
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        let start = this.state.start_date;
        let end = this.state.end_date;
        let name = this.state.name;
        let body = '&city=' + name + '&start_date=' + start + '&end_date=' + end;

        await fetch('http://0.0.0.0:8000/api/historical', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: body,
        })
        .then(data => data.json())
        .then(data => {
            return this.setState({ data: data })
        })
        .then(this.setState({ text: '', start_date: '', end_date: '' }))
        .catch((error) => {
            alert('Error ', error)
        })
    }

    render() {
        let display;
        if(Object.keys(this.state.data).length > 0) {
            display = (
                <body>
                    <div>
                        <h3>{this.state.data.city_name}</h3>
                        <p className="desc">{this.state.data.data[0].datetime}</p>
                        <p className="temp">{this.state.data.data[0].temp}</p>
                    </div>
                </body>
            )
        }
        return(
            <body>
                <h1>SEARCH A CITY.</h1>

                <form>
                    <input type="text" name="name" onChange={(event)=>this.handleChange(event, "name")}  placeholder="Name"/>

                    <input type="text" name="start_date" onChange={(event)=>this.handleChange(event, "start_date")} placeholder="Start Date"/>

                    <input type="text" name="end_date" onChange={(event)=>this.handleChange(event, "end_date")} placeholder="End Date"/>

                </form>

                <button onClick={this.handleSubmit}>Submit</button>
                {display}
            </body>
        )
    }
}

/*
                
                <form onSubmit={this.handleSubmit} className="input">
                    <input type="text" 
                        value={this.state.name} 
                        onChange={(event) => {this.setState({ name: event.target.value })}} 
                        className="inputValue" 
                        placeholder="Enter a city...">
                    </input>
                </form> 
                    <input type="text" 
                        value={this.state.start_date} 
                        onChange={(event) => {this.setState({ start_date: event.target.value })}}
                        className="inputValue2"
                        placeholder="Enter start date...">
                    </input>
                    <input type="text" 
                        value={this.state.end_date} 
                        onChange={(event) => {this.setState({ end_date: event.target.value })}}
                        className="inputValue3"
                        placeholder="Enter end date...">
                    </input> */