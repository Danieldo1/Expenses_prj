import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function Expenseitem(props) {

  return (
    <div className='expense-item'>
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount} </div>
      </div>
      <button>Change title</button>
    </div>
  );
}

export default Expenseitem;
