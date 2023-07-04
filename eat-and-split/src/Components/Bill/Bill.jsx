import { useState } from "react";
import Button from "../Button/Button";
function Bill({ isToggled, selectedFriend, setFriends, setToggleBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [payee, setPayee] = useState(true);
  const { id, balance, name } = selectedFriend;
  const friendExpense = Number(bill - myExpense);
  const handleChangeBill = (event) => {
    setBill(() => Number(event.target.value));
  };
  const handleMyExpense = (event) => {
    const expense = Number(event.target.value);
    if (expense > bill) {
      return;
    }
    setMyExpense(() => expense);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (payee) {
      setFriends((currFriends) => {
        return currFriends.map((friend) => {
          return friend.id === id
            ? { ...friend, balance: balance + friendExpense, isSelected: false }
            : friend;
        });
      });
    } else {
      setFriends((currFriends) => {
        return currFriends.map((friend) => {
          return friend.id === id
            ? { ...friend, balance: balance + myExpense, isSelected: false }
            : friend;
        });
      });
    }
    setToggleBill((v) => !v);
    setBill("");
    setMyExpense("");
    setPayee(true);
  };
  return (
    isToggled && (
      <form className="form-split-bill" onSubmit={handleOnSubmit}>
        <h2>Split a bill with {name}</h2>
        <label htmlFor="bill">💰 Bill value</label>
        <input
          id="bill"
          type="number"
          value={bill}
          onChange={handleChangeBill}
        />
        <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
        <input
          id="your-expense"
          type="number"
          value={myExpense}
          onChange={handleMyExpense}
        />
        <label>👫 {name}' expense</label>
        <input disabled type="number" value={friendExpense} />
        <label htmlFor="payee">🤑 Who is paying the bill ❓</label>
        <select
          id="payee"
          name="payee"
          value={payee}
          onChange={(e) => setPayee(e.target.value)}
        >
          <option value={true}>You</option>
          <option value={false}>{name}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    )
  );
}
export default Bill;
