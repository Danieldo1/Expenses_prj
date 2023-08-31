import React, { useState } from "react";
import Expenseitem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./FilterData/ExpensesFilter";

function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2023');
 
 function filterHandler(selectedYear) {
  setSelectedYear(selectedYear)
 };
 
  return (
<div>


    <div className='expenses'>
    <ExpensesFilter selected={selectedYear} onSelectedYear={filterHandler} />
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[0].date}
      />
    </div>
    </div>
  );
}

export default Expenses;
