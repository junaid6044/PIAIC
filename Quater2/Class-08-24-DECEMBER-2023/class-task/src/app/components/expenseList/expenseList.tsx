"use client"
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ExpenseType } from '../../types/commonTypes';
import ExpenseModal from '../expenseModal/expenseModal';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expense, setExpense] = useState<ExpenseType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  });
  const [total, setTotal] = useState<number>(0)

  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onAddExpense = (expense: ExpenseType) => {
    setExpenses([...expenses, expense]);
    setTotal(total + expense.amount);
  }
  
  const onUpdateExpense = (expenseRecord: ExpenseType) => {
    setExpenses(expenses.map((e) => (e.id === expenseRecord.id ? expenseRecord : e)));
    setTotal(total - expense.amount + expenseRecord.amount);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onDeleteHandler = (expense: ExpenseType) => {
    setExpenses(expenses.filter((e) => e.id !== expense.id));
    setTotal(total - expense.amount);
  }

  const onEditHandler = (expense: ExpenseType) => {
    setExpense(expense)
    setIsOpen(true);
  }
  return (
    <div className="mt-8">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-semibold my-4">Expense List</h2>
        <button onClick={onOpen} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border border-teal-800 hover:border-transparent rounded-full">Add Expense</button>
      </div>
      <ExpenseModal expense={expense} isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense} onUpdateExpense={onUpdateExpense} />
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.length > 0 ?
              expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{expense.id}</td>
                  <td className="py-2 px-4 border-b">PKR {expense.amount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{expense.category}</td>
                  <td className="py-2 px-4 border-b">{expense.note}</td>
                  <td className="py-2 px-4 border-b">{expense.date && new Date(expense.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b flex justify-center">
                    <button onClick={() => onEditHandler(expense)} className="flex items-center gap-2 mr-2 bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border border-blue-800 hover:border-transparent rounded-full">
                      <CiEdit /> Edit
                    </button>
                    <button onClick={() => onDeleteHandler(expense)} className="flex items-center gap-2 bg-transparent hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-10 border border-red-800 hover:border-transparent rounded-full">
                      <MdDeleteOutline /> Delete
                    </button>
                  </td>
                </tr>
              ))
              :
              <tr>
                <td colSpan={6}>No Expense Found!</td>
              </tr>
            }
        </tbody>
      </table>
      <div className="flex justify-end">
        <p className="text-2xl font-semibold mb-4">Total: PKR {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseList;
