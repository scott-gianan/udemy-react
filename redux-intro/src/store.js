import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customersSlice";
import accountReducer from "./features/accounts/accountSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
