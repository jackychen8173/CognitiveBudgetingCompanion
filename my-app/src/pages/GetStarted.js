import React from "react";
import { useNavigate

 } from "react-router-dom";

const GetStarted = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/SignIn'); 
    };
    return (
        <div>
            <h1>Cognitive Budgeting Companion</h1>
            <button className="start-button" onClick={handleNavigate}>Get Started</button>
        </div>
    );
};

export default GetStarted;