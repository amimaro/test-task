import { useContext } from "react";
import AppContext from "../../context/background/AppContext";
import { ModalFactory } from "./ModalFactory";
import checkMark from "../../assets/icons/checkmark_notes.svg";
import Layout from "../Layout";

export default function SendSuccessModal() {
  const { modalState, setModalState } = useContext(AppContext);
  return (
    <ModalFactory isOpen={modalState === "sending_success"}>
      <Layout>
        <div className="h-full max-h-[90vh]">
          <div className="flex flex-col justify-center items-center h-full gap-4">
            <img src={checkMark} alt="check mark" />
            <p className="text-2xl font-bold">Success</p>
            <p className="text-slate-500">
              You've successfully sent your funds
            </p>
            <a
              href="https://etherscan.io/tx/0xab2786d88bb3714e846e417eb5d53ee721f69c136bcd1de30e1c628418720083"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-blue-600">
                <p>View on Etherscan</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center sticky">
            <button
              className="px-5 py-2 rounded-md border-[3px] border-black font-semibold w-full"
              onClick={() => setModalState(null)}
            >
              Done
            </button>
          </div>
        </div>
      </Layout>
    </ModalFactory>
  );
}
