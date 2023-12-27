import ExpenseList from "./components/expenseList/expenseList"

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-semibold my-4 text-center">Expense Tracker App</h1>
      <ExpenseList />
    </div>
  )
}
