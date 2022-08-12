import React, { useEffect, useState } from "react";
import Quoter from "../components/Quoter/Quoter";
import Modal from "../components/Modal/Modal";

const Chequera = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    delay(4000).then(() => setModalOpen(true));
  }, []);
  return (
    <>
      <Quoter />
      <Modal isOpen={modalOpen}>
        <div>
          <h2>¡Ups!</h2>
          <br />
          <h3>
            Los siguientes cheques presentan fallos de formato o información
            inválida:
          </h3>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid black",
            }}
          >
            <hr />
            <h4>Cheque 1</h4>
            <p>monto: $10000</p>
            <p>fecha: 10/10/2020</p>
            {/*             <p>nombre: Sartori Joel Nicolas</p>
            <p>razon social: JNS</p>
            <p>cuit: 20350154427</p>
            <p>cuit del firmante: 20350154427</p> */}
            <hr />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid black",
            }}
          >
            <hr />
            <h4>Cheque 2</h4>
            <p>monto: $20000</p>
            <p>fecha: 08/12/2020</p>
            {/*             <p>nombre: Sartori Joel Nicolas</p>
            <p>razon social: JNS</p>
            <p>cuit: 20350154427</p>
            <p>cuit del firmante: 20350154427</p> */}
            <hr />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Chequera;
