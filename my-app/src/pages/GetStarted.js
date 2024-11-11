import React from "react";
//import img from "./calculator.png";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import img from '../assets/calculator.png';

const GetStarted = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/SignIn'); 
    };
    return (
        <div className="container">
<<<<<<< Updated upstream
            <h1>Cognitive Budgeting Companion</h1>
            <img className="img" src={img} alt="calculator" />
=======
                <div className="header">
                    <h1 className ='h1'>Cognitive Budgeting Companion</h1>
                    <img className='image' src='/calculator.png' alt="calculator"/>
                </div>
>>>>>>> Stashed changes
            <button className="start-button" onClick={handleNavigate}>Get Started</button>
        </div>

    );
};

export default GetStarted;