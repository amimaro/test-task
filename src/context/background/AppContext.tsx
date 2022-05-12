import { createContext } from "react";
import { Transaction } from "../../services/TransactionsService";

type ContextType = {
  addTransaction: (transaction: Transaction) => void;
  transactions: Array<Transaction>;
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  addTransaction: () => {},
  transactions: [],
});

export default AppContext;
