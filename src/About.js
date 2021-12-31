import React from "react";

export default class About extends React.Component {
    componentDidMount(){
        alert("Hello world");
    }
    
    render() {
        return(
            <div>
                <h1>About Page</h1>
            </div>
        )
    }
}