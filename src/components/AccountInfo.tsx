import logo from "../assets/logo.svg";
import defaults from "../utils/constants";
import { abbreviateAddress } from "../utils/helpers";

export default function AccountInfo() {
  return (
    <button onClick={() => alert("open accounts panel")}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Account 1</p>
          <p className="text-xs text-slate-400">
            {abbreviateAddress(defaults.publicAddress)}
          </p>
        </div>
      </div>
    </button>
  );
}
