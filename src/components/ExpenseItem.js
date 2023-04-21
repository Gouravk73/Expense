import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props ) => {
  const clickHandler=() => {
    
    console.log('Clicked');
  };
  console.log(props.date);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails  title={props.title} 
      amount={props.amount} />
      <button onClick={clickHandler}>Change Title</button>

    </div>
  );
}

export default ExpenseItem