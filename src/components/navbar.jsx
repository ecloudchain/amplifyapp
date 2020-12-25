import React, { Component } from "react";
import Header from './myapp.css'

class Navbar extends Component {
    
    render() { 
        return ( 

<div>
        <h3 className="navbar">  This is h3 Tag </h3>
        <ul>
        <li>Cloud Migration Service</li> 
        <li>MSP</li> 
        <li>Data Analysis</li> 
        </ul>
</div>


         );
    }
}
 
export default Navbar;