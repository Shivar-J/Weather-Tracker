import React from "react";
import "./Home.css";

export default class NotFound extends React.Component{
    render() {
        return(
            <div>
                <h1>Page Not Found</h1>
                <a className="notfound" href="/">Back to main page</a>
            </div>
        );
    }
}