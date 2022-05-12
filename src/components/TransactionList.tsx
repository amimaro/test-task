import { useContext } from "react";
import AppContext from "../context/background/AppContext";
import { reverseArray } from "../utils/helpers";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const { transactions } = useContext(AppContext);

  return (
    <div>
      {reverseArray(transactions).map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
