import React from 'react';
import "./ExpenseItem.css";
const ExpenseItem = (props ) => {
  //const expenseDate=new Date(2021,2,28);
  //const expenseTitle='Car Insurane';
 // const expenseAmount=294.67;
  const LocationOfExpenditure='Delhi';

  return (
    <div className="expense-item">
      <div>{props.date}</div>
       <div className="expense-item__description">
        <h2>{props.title} </h2>
        <h3>{LocationOfExpenditure}</h3>
        <div className="expense-item__price">${props.amount}</div>
       </div>
    </div>
  );
}

export default ExpenseItem