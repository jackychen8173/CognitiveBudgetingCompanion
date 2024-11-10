import React, { useState, useEffect } from 'react';

const ExpensesReport = () => {
  const [groupedExpenses, setGroupedExpenses] = useState({});

  // Helper function to group expenses by category
  const groupExpensesByCategory = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = [];
      }
      acc[expense.category].push(expense);
      return acc;
    }, {});
  };

  // Retrieve expenses from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const grouped = groupExpensesByCategory(storedExpenses);
    setGroupedExpenses(grouped);
  }, []);

  return (
    <div>
      <h1>Expenses Report</h1>
      {Object.keys(groupedExpenses).length === 0 ? (
        <p>No expenses available.</p>
      ) : (
        <div>
          {Object.keys(groupedExpenses).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedExpenses[category].map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.category}</td>
                      <td>${expense.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpensesReport;
