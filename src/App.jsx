import React, {useState } from "react";
import ExpenseDash from "./components/ExpenseDash/";
import ExpenseHis from "./components/ExpenseHis";
import ExpenseOper from "./components/ExpenseOper/";
import Savings from "./components/Savings";
export const ExpenseContext = React.createContext();

const App = () => {
    const initialState = [];
    const [expenselist, setExpenselist] = useState(initialState);
    const initialState1 = {title:'',amount:'',category:''};
    const [addCategory,setAddCategory] = useState(initialState1)

    //Calculate total income from the given list
    let calcIncome = expenselist
        .filter((cat) => cat.category !== "expense" && cat)
        .reduce((total, num) => parseInt(total) + parseInt(num.amount), 0);
    //Calculate total expense from the given list
    let calcExpense = expenselist
        .filter((cat) => cat.category !== "income" && cat)
        .reduce((total, num) => parseInt(total) + parseInt(num.amount), 0);
     //Calculate Savings
    let remeaningBal = parseInt(calcIncome) - parseInt(calcExpense);
    //Set Input Values
    const setInputValues = (event) =>{
        setAddCategory({
            ...addCategory,
            [event.target.name] : event.target.value
        })
    }
    //Add Values
    const addNewRecords = (e) =>{
        e.preventDefault();
        let getId = expenselist.length;
        let modifiedCategory = {...addCategory,id:getId}
        setExpenselist([...expenselist,modifiedCategory])
        setAddCategory(initialState1)
    }
    //Delete Expense
    const deleteCategory = (delId) =>{
        let delExpenselist = expenselist.filter(cat=>cat.id !== delId && cat)
        setExpenselist(delExpenselist)
    }
    const combineValues = {
        calcIncome,
        calcExpense,
        remeaningBal,
        expenselist,
        addCategory,
        setInputValues,
        addNewRecords,
        deleteCategory
    }
    return (
        <div className="container h-100">
            <ExpenseContext.Provider value={combineValues}>
                <Savings />
                <ExpenseDash />
                <ExpenseHis />
                <ExpenseOper />
            </ExpenseContext.Provider>
        </div>
    );
};
export default App;
