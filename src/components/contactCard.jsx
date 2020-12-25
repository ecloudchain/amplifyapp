import React, { Component } from "react";


function ContactCard(props) {

    console.log(props)
    
            return (  

    <div>
    <img src={props.imageurl} />
    <h3>{props.name}</h3>
    <p>{props.phone} </p>
    <p>{props.email} </p>
    </div>

        );
    }

 
export default ContactCard ;