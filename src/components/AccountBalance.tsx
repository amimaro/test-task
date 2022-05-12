import defaults from "../utils/constants";
import arrow from "../assets/icons/arrow.svg";

export default function AccountBalance() {
  return (
    <div className="bg-[#e7f1fbff] rounded-md py-4">
      <div className="flex flex-col text-center gap-4">
        <div>
          <p className="font-bold text-2xl">{defaults.accountBalance} ETH</p>
          <p className="text-sm text-slate-400">$0.00 USD</p>
        </div>
        <div>
          <button className="bg-[#1673ff] rounded-full px-2.5 py-2 active:bg-[#1159c7] shadow-md">
            <img src={arrow} alt="" className="rotate-180" />
          </button>
          <p className="font-semibold text-xs pt-2">Send</p>
        </div>
      </div>
    </div>
  );
}
