import React from 'react'

const ExpenseForm = () => {
  return (
        <form>
            <label for="expense title">Expense title</label>
            <input type="text" id="title" name="title"></input>
            <label for="expense amount">Expense Amount</label>
            <input type="text" id="amount" name="amount"></input>
            <label for="expense date ">Expense Date</label>
            <input type="text" id="date" name="date"></input>
            <button  type="text">Add</button>
        </form>
  )
}

export default ExpenseForm