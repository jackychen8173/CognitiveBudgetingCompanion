import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import GetStarted from "./pages/GetStarted";  
import Expenses from "./pages/Expenses";
import ExpensesReport from "./pages/ExpensesReport";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<GetStarted />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/expensesReport" element={<ExpensesReport />} />
            </Routes>
        </Router>
    );
}

export default App;
