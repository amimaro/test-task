import { useContext, useState } from "react";
import AppContext from "../../context/background/AppContext";
import { ModalFactory } from "./ModalFactory";
import closeIcon from "../../assets/icons/close.svg";
import dotLoading from "../../assets/icons/dot_loading.svg";
import defaults from "../../utils/constants";
import { nanoid } from "nanoid";
import format from "date-fns/format";
import Layout from "../Layout";

export default function SendModal() {
  const { modalState, setModalState, addTransaction } = useContext(AppContext);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const address = formData.get("address") as string;
    const amount = parseFloat(formData.get("amount") as string);

    if (isNaN(amount)) {
      // Error handling and check amount
      return;
    }

    setIsSending(true);

    addTransaction({
      from: defaults.publicAddress,
      to: address,
      value: amount,
      id: nanoid(),
      date: format(new Date(), "MM/dd/yyyy HH:m"),
    });

    setTimeout(() => {
      e.target.reset();
      setIsSending(false);
      setModalState("sending_success");
    }, 2000);
  };

  return (
    <ModalFactory isOpen={modalState === "sending"}>
      <Layout>
        <div className="flex justify-between items-center py-3">
          <p className="font-semibold text-lg">Send Ether</p>
          <button onClick={() => setModalState(null)}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="h-full">
          <div className="flex flex-col gap-4">
            <hr />
            <div className="flex-grow flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="text-slate-500 font-semibold"
                >
                  Add Recipient
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter the Public Address"
                  className="border-b-2 focus:border-black outline-none pb-2"
                  pattern="0x[a-fA-F0-9]{40}"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="text-slate-500 font-semibold"
                >
                  Add Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter the Eth Amount"
                  className="border-b-2 focus:border-black outline-none pb-2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center sticky top-[92vh]">
            <div className="grid grid-cols-2 gap-4 w-full">
              <button
                className="w-full px-5 py-2 rounded-md border-[3px] border-black font-semibold"
                onClick={() => setModalState(null)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full px-5 py-2 rounded-md bg-[#1673ff] text-white font-semibold"
              >
                <div className="flex justify-center">
                  {isSending ? (
                    <img src={dotLoading} alt="dot loading" />
                  ) : (
                    "Next"
                  )}
                </div>
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </ModalFactory>
  );
}
