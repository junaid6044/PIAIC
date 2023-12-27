import { ExpenseType } from "./commonTypes"

export type ExpenseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    expense: ExpenseType
    onAddExpense: (expense:ExpenseType)=> void
    onUpdateExpense: (expense:ExpenseType)=> void
}