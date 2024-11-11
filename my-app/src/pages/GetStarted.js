import React from "react";
//import img from "./calculator.png";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/SignIn'); 
    };
    return (
        <div className="container">
                <div className="header">
                    <h1 className ='h1'>Cognitive Budgeting Companion</h1>
                    <img className='image' src='/calculator.png' alt="calculator"/>
                </div>
            <button className="start-button" onClick={handleNavigate}>Get Started</button>
        </div>

    );
};

export default GetStarted;