import React, { useState, useEffect } from 'react';
import './Expenses.css'; 
import { useNavigate } from 'react-router-dom';

const Expenses = () => {
  const [formData, setFormData] = useState({
    category: '',
    cost: ''
  });
  const [expenses, setExpenses] = useState([]);

  // Retrieve expenses from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category && formData.cost) {
      // Save the expense to localStorage
      const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      storedExpenses.push(formData);
      localStorage.setItem('expenses', JSON.stringify(storedExpenses));

      // Update state and clear form
      setExpenses(storedExpenses);
      setFormData({
        category: '',
        cost: ''
      });
    } else {
      alert("Please fill out both fields.");
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ExpensesReport'); 
  };

  return (
    <div>
      <h1 className='h1'>Welcome!</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}>
              <option value="">Select a Category:</option>
              <option value="Rent">Rent</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
            </select>
          </label>
          <label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              placeholder="Cost"
            />
          </label>
          <button type="submit">Save Expense</button>
        </div>

        
      </form>

      {/* Displaying the table */}
      <br></br>
      <h2 className='h2'>Saved Expenses:</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.category}</td>
                  <td>${expense.cost}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-expenses">No expenses to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button className="view-button" onClick={handleNavigate}>View Monthly Report</button>
      </div>
    </div>
  );
};

export default Expenses;
