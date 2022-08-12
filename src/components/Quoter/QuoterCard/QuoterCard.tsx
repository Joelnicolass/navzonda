import React, { useContext, useEffect, useState } from "react";
import { QuoterContext } from "../Context/QuoterContext";
import { QuoterActionTypes } from "../reducers/quoterReducer";
import { IQuote } from "../../../models/IQuote";
import useQuoterCard from "./hooks/useQuoterCard";
import Separator from "../../Separator/Separator";

interface QuoterCardProps {
  quote: IQuote;
}

const QuoterCard = ({ quote }: QuoterCardProps) => {
  const { amount, date, id } = quote;

  const { loading } = useQuoterCard();
  const { dispatchQuoter } = useContext(QuoterContext);

  const [activeDetails, setActiveDetails] = useState(false);

  useEffect(() => {}, [activeDetails]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          💰
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90vw",
              padding: "0 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Monto: {amount}</div>
              <div>Fecha: {date}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  setActiveDetails(!activeDetails);
                }}
              >
                📄
              </button>
              <button
                onClick={() => {
                  dispatchQuoter({
                    type: QuoterActionTypes.REMOVE_QUOTE,
                    payload: {
                      id,
                    },
                  });
                }}
              >
                ❌
              </button>
            </div>
          </div>
          {activeDetails && (
            <div>
              <Separator size="small" />
              <hr />
              <Separator size="small" />
              <div
                style={{
                  padding: "0 10px",
                }}
              >
                <p>monto: {amount}</p>
                <p>
                  interes: ${(Math.random() * (100 - 1.5) + 1.5).toFixed(2)}
                </p>
                <p>
                  gastos: ${(Math.random() * (1000 - 0.5) + 1.5).toFixed(2)}
                </p>
                <p>iva: ${(Math.random() * (100 - 1.5) + 1.5).toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuoterCard;
