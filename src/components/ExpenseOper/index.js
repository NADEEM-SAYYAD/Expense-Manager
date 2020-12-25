import React,{useContext} from "react";
import {ExpenseContext} from '../../App'

const ExpenseOper = () => {
    const expenseData = useContext(ExpenseContext);
    const {addCategory,setInputValues,addNewRecords} = expenseData;
    const { title,amount,category } = addCategory;

    return (
        <React.Fragment>
            <div
                className="row h-100 justify-content-center align-items-center"
                style={{ marginTop: "10px" }}
            >
                <span className="label label-primary">Add Expense/Income</span>
            </div>

            <div
                className="row h-100 justify-content-center align-items-center"
                style={{ marginTop: "10px" }}
            >
                <div className="col-sm-6">
                    <form onSubmit={addNewRecords} autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Title"
                                value={title}
                                onChange={e=>setInputValues(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                id="amount"
                                name="amount"
                                placeholder="Amount"
                                value={amount}
                                onChange={e=>setInputValues(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                className="form-control"
                                placeholder="Category"
                                name="category"
                                id="category"
                                value={category}
                                onChange={e=>setInputValues(e)}
                                required
                            >
                                <option value="">Select</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value=" Add Expense"/>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ExpenseOper;