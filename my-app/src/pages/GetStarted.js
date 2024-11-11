import React from "react";
import { useNavigate

 } from "react-router-dom";
import "./GetStarted.css";
import img from '../assets/calculator.png';

const GetStarted = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/SignIn'); 
    };
    return (
        <div className="container">
            <h1>Cognitive Budgeting Companion</h1>
            <img className="img" src={img} alt="calculator" />
            <button className="start-button" onClick={handleNavigate}>Get Started</button>
        </div>
    );
};

export default GetStarted;