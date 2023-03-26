import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: parseInt(amount)
    };
    addTransaction(newTransaction)
    setAmount(0)
    setText('')
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
