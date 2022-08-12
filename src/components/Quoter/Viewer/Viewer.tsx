import React, { useContext, useEffect } from "react";
import QuoterCard from "../QuoterCard/QuoterCard";
import { QuoterContext } from "../Context/QuoterContext";
import { useLocation } from "react-router-dom";
import { QuoterActionTypes } from "../reducers/quoterReducer";

const Viewer = () => {
  const location = useLocation();
  const { quotes, dispatchQuoter } = useContext(QuoterContext);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const quoteGenerator = async (quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      const amount = Math.floor(Math.random() * (1000 - 1) + 1);
      const date = new Date().toLocaleDateString();
      const id = i;
      const quote = { amount, date, id };
      await delay(1000);
      dispatchQuoter({ type: QuoterActionTypes.ADD_QUOTE, payload: quote });
    }
  };

  useEffect(() => {
    if (location.pathname.includes("chequera")) {
      quoteGenerator(10);
    }
  }, []);

  return (
    <div>
      {quotes?.map((quote) => (
        <QuoterCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default Viewer;
