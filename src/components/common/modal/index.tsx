import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);
    modalRoot!.style.display = "flex";

    return () => {
      modalRoot?.removeChild(el);
      modalRoot!.style.display = "none";
    };
  }, []);

  return ReactDOM.createPortal(props.children, el);
};

export default Modal;
