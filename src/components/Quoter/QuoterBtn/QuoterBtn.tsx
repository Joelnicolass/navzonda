import React from "react";
import { useContext } from "react";
import { QuoterContext } from "../Context/QuoterContext";
import CustomButton from "../../CustomButton/CustomButton";
import { QuoterActionTypes } from "../reducers/quoterReducer";

interface QuoterBtnProps {
  newQuote: { amount: number | string | null; date: string | null };
  fn: Array<() => void>;
}

const QuoterBtn = ({ newQuote, fn }: QuoterBtnProps) => {
  const { amount, date } = newQuote;
  const { dispatchQuoter, activeQuote, toggleEditQuote } =
    useContext(QuoterContext);

  return (
    <CustomButton
      style={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      disabled={!amount || !date}
      onClick={() => {
        if (toggleEditQuote && activeQuote) {
          dispatchQuoter({
            type: QuoterActionTypes.UPDATE_QUOTE,
            payload: {
              ...activeQuote,
              amount: amount,
              date: date,
            },
          });
        } else {
          dispatchQuoter({
            type: QuoterActionTypes.ADD_QUOTE,
            payload: {
              id: Date.now(),
              amount: amount,
              date: date,
            },
          });
        }

        fn.forEach((fn) => fn());
      }}
    >
      Cotizar
    </CustomButton>
  );
};

export default QuoterBtn;
