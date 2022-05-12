import AccountBalance from "../components/AccountBalance";
import AccountInfo from "../components/AccountInfo";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  return (
    <div className="">
      <AccountInfo />
      <AccountBalance />
      <TransactionList />
    </div>
  );
}
