import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props ) => {
  
  console.log(props.date);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails  title={props.title} 
      amount={props.amount} />


    </div>
  );
}

export default ExpenseItem