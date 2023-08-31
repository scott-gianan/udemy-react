import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils";

function BalanceDisplay() {
  const account = useSelector((state) => state.account);
  const { balance } = account;
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
