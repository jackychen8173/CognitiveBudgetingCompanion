import React, { useState } from 'react';

const Expenses = () => {
  const [formData, setFormData] = useState({
    category: '',
    cost: ''
  });

  const [expenses, setExpenses] = useState([]); // Store multiple expenses

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
      // Save the new expense to the array
      setExpenses([...expenses, formData]);

      // Optionally clear the form
      setFormData({
        category: '',
        cost: ''
      });
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div>
      <h1>Expense Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              <option value="Rent">Rent</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Cost:
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              min="0"
              step="0.01"
            />
          </label>
        </div>

        <button type="submit">Save Expense</button>
      </form>

      <h2>Saved Expenses:</h2>
      <pre>{JSON.stringify(expenses, null, 2)}</pre>
    </div>
  );
};

export default Expenses;
