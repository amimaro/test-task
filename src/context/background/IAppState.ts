import { Transaction } from "../../services/TransactionsService";
import defaults from "../../utils/constants";

export interface IAppState {
  transactions: Array<Transaction>;
}

export const initAppState: IAppState = {
  transactions: defaults.pastTransactions,
};
