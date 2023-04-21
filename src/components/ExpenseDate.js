import React from 'react'

const ExpenseDate=(props)=> {
  const dateObject = new Date(props.date);
  if (isNaN(dateObject.getTime())) {
    return <div>Error: Invalid date</div>;
  }
  const month = dateObject.toLocaleString('en-US', { month: 'long' });
  const day = dateObject.toLocaleString('en-US', { day: '2-digit' });
  const year = dateObject.getFullYear();
      return (
        <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  )
}

export default ExpenseDate