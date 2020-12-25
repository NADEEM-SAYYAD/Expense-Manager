import React, { useContext } from "react";
import { ExpenseContext } from "../../App";

const ExpenseHis = () => {
    const expenseData = useContext(ExpenseContext);
    const { expenselist, deleteCategory } = expenseData;
    console.log(expenselist);
    return (
        <React.Fragment>
            <div
                className="row h-100 justify-content-center align-items-center"
                style={{ marginTop: "10px" }}
            >
                <span className="label label-primary">Transaction History</span>
            </div>
            <div
                className="row h-100 justify-content-center align-items-center"
                style={{ marginTop: "10px" }}
            >
                <div className="col-sm-6">
                    <ul
                        className="list-group"
                        style={{ overflow: "auto", height: "100px" }}
                    >
                        {expenselist.length > 0 ? (
                            expenselist.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`list-group-item list-group-item-${
                                            item.category === "income"
                                                ? "success"
                                                : "danger"
                                        }`}
                                    >
                                        {item.title} - {item.amount}{" "}
                                        <span
                                            className="close"
                                            style={{ cursor: "pointer" }}
                                            onClick={(e) =>
                                                deleteCategory(item.id)
                                            }
                                        >
                                            &times;
                                        </span>
                                    </li>
                                );
                            })
                        ) : (
                            <li className="list-group-item list-group-item-info">
                                No history Found
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ExpenseHis;