import React, { Component } from 'react';
import "../styles/Header.css";

// this export allows App.js to display the HTML in the return to the DOM
// Header refers to the literal header seen in the DOM
// Component is an internal class Component
// this line allows class Header to have all the properties and methods of Component
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click on column name to filter by heading or use the search box to narrow your results.</p>
            </div>
        )
    }
}
