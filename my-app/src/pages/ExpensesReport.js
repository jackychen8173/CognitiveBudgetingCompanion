import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import './ExpensesReport.css'; 

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,  // Ensure API key is set correctly
  dangerouslyAllowBrowser: true,
});

const ExpensesReport = () => {
  const [groupedExpenses, setGroupedExpenses] = useState({});
  const [advice, setAdvice] = useState("Fetching budgetary advice...");

  const groupExpensesByCategory = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) acc[expense.category] = [];
      acc[expense.category].push(expense);
      return acc;
    }, {});
  };

  const formatExpensesForAPI = (expenses) => {
    return Object.entries(expenses).map(([category, items]) => {
      const total = items.reduce((sum, item) => sum + item.cost, 0);
      return `${category}: $${total}`;
    }).join(", ");
  };

  const fetchBudgetaryAdvice = async () => {
    const formattedExpenses = formatExpensesForAPI(groupedExpenses);
    console.log("Formatted expenses for API:", formattedExpenses);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a financial advisor." },
          { role: "user", content: `Provide budgeting advice for the following expenses: ${formattedExpenses}.` },
        ],
      });
      setAdvice(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching budgetary advice:", error);
      setAdvice("Error fetching budgetary advice.");
    }
  };

  useEffect(() => {
    try {
      const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      const grouped = groupExpensesByCategory(storedExpenses);
      setGroupedExpenses(grouped);

      if (storedExpenses.length > 0) {
        fetchBudgetaryAdvice();
      }
    } catch (error) {
      console.error("Error loading expenses:", error);
    }
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
          <h2>Budgetary Advice</h2>
          <p className="advice">{advice}</p>
        </div>
      )}
    </div>
  );
};

export default ExpensesReport;
