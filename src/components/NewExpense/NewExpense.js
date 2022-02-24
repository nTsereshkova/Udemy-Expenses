import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {
  const [isEditing, setIsEdicting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdicting(false);
  };

  const startEditingHandler = () => {
    setIsEdicting(true);
  };
  const stopEditingHandler = () => {
    setIsEdicting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
