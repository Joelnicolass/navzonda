import React, { useEffect, useState } from "react";
import Separator from "../Separator/Separator";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      style={
        isOpenModal
          ? {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#404040",
              borderRadius: "10px",
              padding: "10px",
              width: "100vw",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }
          : { display: "none" }
      }
    >
      {children}
      <Separator size="small" />
      <button
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={handleCloseModal}
      >
        Cerrar
      </button>
    </div>
  );
};

export default Modal;
