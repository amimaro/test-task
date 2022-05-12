import { Transaction } from "../../services/TransactionsService";
import defaults from "../../utils/constants";

export type IModalState = "sending" | "sending_success" | null;

export interface IAppState {
  transactions: Array<Transaction>;
  modal: IModalState;
}

export const initAppState: IAppState = {
  transactions: defaults.pastTransactions,
  modal: null,
};
