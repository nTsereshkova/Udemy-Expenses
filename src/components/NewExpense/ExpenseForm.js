import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // создаем индивидуальные state  - более подходящий подход про мнению автора
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // но можно и общий сделать
  // там тоже 2 подхода, лушче идти через prevState и спред оператор

  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate: ''
  // })

  function titleChangeHadler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    // этот подход с одним стейтом не корректен, поэтому изменияем его

    // setUserInput((prevState)=> {
    //     return { ...prevState,
    //         enteredTitle: event.target.value
    //     }
    // })
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })

    // setUserInput((prevState)=> {
    //     return { ...prevState,
    //         enteredAmount: event.target.value
    //     }
    // })
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
    // setUserInput((prevState)=> {
    //     return { ...prevState,
    //         enteredDate: event.target.value
    //     }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(" ");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
