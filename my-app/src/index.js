import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';   
import Expenses from './pages/Expenses';
import ExpensesReport from './pages/ExpensesReport';
import SignIn from './pages/SignIn';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Expenses",
    element: <Expenses />,
  },
  {
    path: "/ExpensesReport",
    element: <ExpensesReport />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);

// Render the application with the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Optional: Measure app performance
reportWebVitals();

// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
