import AccountBalance from "../components/AccountBalance";
import AccountInfo from "../components/AccountInfo";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <AccountInfo />
      <AccountBalance />
      <TransactionList />
    </div>
  );
}
