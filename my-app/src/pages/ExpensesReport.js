import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
});

const ExpensesReport = () => {
  const [groupedExpenses, setGroupedExpenses] = useState({});
  const [advice, setAdvice] = useState("Fetching budgetary advice...");

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

  // Function to convert grouped expenses to a format suitable for OpenAI
  const formatExpensesForAPI = (expenses) => {
    return Object.entries(expenses).map(([category, items]) => {
      const total = items.reduce((sum, item) => sum + item.cost, 0);
      return `${category}: $${total}`;
    }).join(", ");
  };

  // Function to fetch budgetary advice from OpenAI
  const fetchBudgetaryAdvice = async () => {
    const formattedExpenses = formatExpensesForAPI(groupedExpenses);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a financial advisor." },
          { role: "user", content: `Provide budgeting advice for the following expenses: ${formattedExpenses}.` },
        ],
      });
      setAdvice(completion.choices[0].message.content); // Set the advice content in state
    } catch (error) {
      console.error("Error fetching budgetary advice:", error);
      setAdvice("Error fetching budgetary advice.");
    }
  };
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
