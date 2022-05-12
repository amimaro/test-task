import { useContext } from "react";
import AppContext from "../context/background/AppContext";
import { reverseArray } from "../utils/helpers";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const { transactions } = useContext(AppContext);

  return (
    <div className="overflow-x-auto h-full flex flex-col gap-2">
      {reverseArray(transactions).map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
