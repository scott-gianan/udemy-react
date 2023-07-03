import { useState } from "react";
import Button from "../Button/Button";
function Bill({ isToggled, selectedFriend }) {
  const [totalBill, setTotalBill] = useState({
    bill: 0,
    "your-expense": 0,
    payee: true,
  });
  const currentBill = Number(totalBill.bill + totalBill["your-expense"]);
  const friendExpense = Number(totalBill.bill - totalBill["your-expense"]);

  const { id, balance, name } = selectedFriend;
  const handleOnChange = (event) => {
    if (Math.abs(friendExpense) > currentBill) {
      console.log("exceeded");
    }
    setTotalBill((currBill) => {
      return {
        ...currBill,
        [event.target.name]:
          event.target.name === "payee"
            ? event.target.value
            : Number(event.target.value),
      };
    });
  };
  return (
    isToggled && (
      <form className="form-split-bill">
        <h2>Split a bill with {name}</h2>
        <label htmlFor="bill">💰 Bill value</label>
        <input
          id="bill"
          name="bill"
          type="number"
          value={totalBill.bill}
          onChange={handleOnChange}
        />
        <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
        <input
          id="your-expense"
          type="number"
          name="your-expense"
          value={totalBill["your-expense"]}
          // value={
          //   totalBill.bill < totalBill["your-expense"]
          //     ? totalBill.bill
          //     : totalBill["your-expense"]
          // }
          onChange={handleOnChange}
        />
        <label>👫 {name}' expense</label>
        <input disabled type="number" value={friendExpense} />
        <label htmlFor="payee">🤑 Who is paying the bill ❓</label>
        <select id="payee" name="payee" onChange={handleOnChange}>
          <option value={true}>You</option>
          <option value={false}>{name}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    )
  );
}
export default Bill;
