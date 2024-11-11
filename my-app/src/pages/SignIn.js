// Filename - pages/signin.js

import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Expenses'); 
    };


    return (
        <div className = "container"> 
        <h1 className ='h1'> Sign Up or Register</h1>
        <input type ="text"></input>
        <br />
        <input type ="password"></input>
        <br />
        <button className="start-button" onClick={handleNavigate}>Continue</button>
        </div>

    );
};

export default SignIn;