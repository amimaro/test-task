import format from "date-fns/format";
import ethIcon from "../assets/icons/ETH.svg";
import { Transaction } from "../services/TransactionsService";
import defaults from "../utils/constants";

export default function TransactionItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <a
      href="https://etherscan.io/tx/0xa6afd9b55c8b5704433f69de285b276dfe85e1a39b153b7579c85c90bf1fe03c"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center gap-3">
        <div className="shadow rounded-full p-1">
          <img src={ethIcon} alt="eth logo" />
        </div>
        <div className="flex flex-col flex-grow">
          <p className="font-semibold">Send Ether</p>
          <p className="text-xs text-slate-400">
            {format(new Date(transaction.date!), "MM/dd/yyyy HH:m")}
          </p>
        </div>
        <div className="flex flex-col text-right">
          <p className="font-semibold">-{transaction.value} ETH</p>
          <p className="text-xs text-slate-400">
            -${transaction.value * defaults.ethPrice} USD
          </p>
        </div>
      </div>
    </a>
  );
}
