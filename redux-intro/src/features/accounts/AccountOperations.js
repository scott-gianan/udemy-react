import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";
import { formatCurrency } from "../../utils";
function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);
  const { balance, loan, isLoading } = account;

  function handleDeposit() {
    if (!depositAmount) return;
    const depositedAmount = Number(depositAmount);
    if (depositedAmount < 0) {
      throw new Error(`Negative amount is not allowed`);
    }
    // dispatch(deposit(depositedAmount, currency));
    dispatch(deposit(depositedAmount));
    setDepositAmount("");
    // setCurrency("");
  }

  function handleWithdrawal() {
    const withdrawnAmount = Number(withdrawalAmount);
    if (withdrawnAmount > balance) {
      throw new Error(
        `Maximum amount to be withdrawn is: ${balance} ${currency}`
      );
    }
    dispatch(withdraw(withdrawnAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    const loanedAmount = Number(loanAmount);
    if (loanedAmount < 0) {
      throw new Error(`Negative amount is not allowed`);
    }
    if (!loanAmount && !loanPurpose) return;
    dispatch(requestLoan(loanedAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (loanAmount > balance) {
      const minimumAmountToPayLoan = formatCurrency(loan - balance);
      throw new Error(
        `Insufficient balance to pay the loan. You need at least ${minimumAmountToPayLoan} more`
      );
    }

    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          {isLoading ? (
            "Converting Currency to USD..."
          ) : (
            <button onClick={handleDeposit}>Deposit</button>
          )}
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>

        {!loan && (
          <div>
            <label>Request loan</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
            <button onClick={handleRequestLoan}>Request loan</button>
          </div>
        )}

        {loan ? (
          <div>
            <span>Pay back {formatCurrency(loan, currency)} </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AccountOperations;
