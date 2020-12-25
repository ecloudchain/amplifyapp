import React, { Component } from "react";
import Navbar from "./navbar";
import joke from './myapp.css'

function Joke(props) {

    console.log(props)
  return (  

 <div>
    <h1 style={{display: props.question ? "block" :"none" }} className="joke-q"> Question:{props.question} </h1>
    <h2 className="joke-a" > Answer:{props.answer} </h2>
    <br></br>
    <hr></hr>

 </div>

        );
    }

    export default Joke ;