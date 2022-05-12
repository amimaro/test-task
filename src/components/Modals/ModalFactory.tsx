import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../Layout";

export function ModalFactory({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: any;
}) {
  const [container] = useState(() => {
    const el = document.createElement("div");
    el.setAttribute("id", nanoid());
    return el;
  });

  useEffect(() => {
    if (isOpen) {
      document.body.appendChild(container);
    } else if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  });

  const Modal = (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-white">
      <Layout>{children}</Layout>
    </div>
  );

  return ReactDOM.createPortal(Modal, container);
}
