import React,{useContext} from "react";
import {ExpenseContext} from '../../App'
const ExpenseDash = () => {
    const expenseData = useContext(ExpenseContext);
    const { calcIncome,calcExpense} = expenseData;
    return (
        <div
            className="row h-100 justify-content-center align-items-center"
            style={{ marginTop: "10px" }}
        >
            <div className="col-sm-3">
                <div className="card border-success">
                    <div className="card-header">Income</div>
                    <div className="card-body">{calcIncome}/- INR</div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card border-danger">
                    <div className="card-header">Expense</div>
                    <div className="card-body">{calcExpense}/- INR</div>
                </div>
            </div>
        </div>
    );
};
export default ExpenseDash;
