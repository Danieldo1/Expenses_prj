import "./FormExpenses.css";
import { useState } from "react";

function FormExpenses(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function changeTitle(event) {
    setTitle(event.target.value);
  }
  function changeAmount(event) {
    setAmount(event.target.value);
  }

  function changeDate(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expensesData = {
      title: title,
      amaount: amount,
      date: new Date(date),
    };
   
props.submitedData(expensesData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" vlaue={title} onChange={changeTitle} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            onChange={changeAmount}
            vlaue={amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            onChange={changeDate}
            value={date}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions-">
        <button>Add Expenses</button>
      </div>
    </form>
  );
}

export default FormExpenses;
