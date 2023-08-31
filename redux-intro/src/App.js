import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customerFullName = useSelector((state) => state.customer);
  const hasCustomerFullName =
    (customerFullName?.fullName && customerFullName?.nationalID) !== "";
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!hasCustomerFullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
