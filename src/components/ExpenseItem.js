import React,{useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props ) => {
  const[title,setTitle] =useState(props.title);
  const[amount,setAmount] =useState(props.amount);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };
  
  const clickDeleteHandler=() => {
    console.log('deleted');
  };
  const clickExpenseHandler=() => {
    setAmount(amount+100);
  };
  console.log(props.date);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails  title={title} 
      amount={amount} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDeleteHandler}>Delete Title</button>
      <button onClick={clickExpenseHandler}>Add Expemse</button>

    </div>
  );
}

export default ExpenseItem