import { useEffect, useReducer, useState } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import {
  Transaction,
  TransactionsService,
} from "../../services/TransactionsService";
import { IAppState, IModalState, initAppState } from "./IAppState";

const transactionsService = new TransactionsService(initAppState);

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    (async () => {
      const transactionRes = await transactionsService.getListOfTransactions();
      setTransactions(transactionRes);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  // TODO: Complete the addTransaction method
  const addTransaction = async (transaction: Transaction) => {
    await transactionsService.addTransaction(transaction);
    setState({
      ...state,
      transactions: [...state.transactions, transaction],
    });
  };

  return (
    <AppContext.Provider
      value={{
        addTransaction,
        transactions,
        modalState: state.modal,
        setModalState: (modalState: IModalState) =>
          setState({ ...state, modal: modalState }),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
