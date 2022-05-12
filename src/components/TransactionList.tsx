import { useContext } from "react";
import AppContext from "../context/background/AppContext";

export default function TransactionList() {
  const { transactions } = useContext(AppContext);

  return <div>{transactions.length}</div>;
}
