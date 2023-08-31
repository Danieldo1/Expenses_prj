import "./NewExpenses.css";
import FormExpenses from "./FormExpenses";

function NewExpenses(props) {
  function saveExpenseHandler(enteredData) {
    const expensesData = { ...enteredData, id: Math.random().toString() };
    props.onAddData(expensesData);
  }

  return (
    <div className="new-expense">
      <FormExpenses submitedData={saveExpenseHandler} />
    </div>
  );
}

export default NewExpenses;
