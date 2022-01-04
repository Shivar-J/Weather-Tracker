import React from "react";
import "./Home.css";

export default class NavBar extends React.Component{
    render(){
        return(
            <body>
                <span>
                    <a href="/">Weather Tracker</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </span>
            </body>
        );
    }
}