import { createContext } from "react";
import { Transaction } from "../../services/TransactionsService";
import { IModalState } from "./IAppState";

type ContextType = {
  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;
  addTransaction: (transaction: Transaction) => void;
  transactions: Array<Transaction>;
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  modalState: null,
  setModalState: () => {},
  addTransaction: () => {},
  transactions: [],
});

export default AppContext;
