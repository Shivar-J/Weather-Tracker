import React from "react";

export default class Home extends React.Component {
    componentDidMount(){
        alert("Hello world");
    }
    
    render() {
        return(
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}