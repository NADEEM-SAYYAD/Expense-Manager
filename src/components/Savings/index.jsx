import React, { useContext } from "react";
import { ExpenseContext } from "../../App";

const Savings = () => {
    const expenseData = useContext(ExpenseContext);
    const { remeaningBal} = expenseData;

    return (
        <div
            className="row h-100 justify-content-center align-items-center"
            style={{ marginTop: "10px" }}
        >
            <div className="col-sm-6">
                <div className="card border-success">
                    <div className="card-header text-center">
                        <b>Your Savings {remeaningBal} /- INR</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Savings;