import React, { useReducer } from "react";
import { QuoterContext } from "./QuoterContext";
import { quoterReducer, quoterInitialState } from "../reducers/quoterReducer";

interface QuoterProviderProps {
  children: JSX.Element | JSX.Element[];
}

const QuoterProvider = ({ children }: QuoterProviderProps) => {
  const [stateQuoter, dispatchQuoter] = useReducer(
    quoterReducer,
    quoterInitialState
  );

  return (
    <>
      <QuoterContext.Provider
        value={{
          quotes: stateQuoter.quotes,
          toggleEditQuote: stateQuoter.toggleEditQuote,
          activeQuote: stateQuoter.activeQuote,
          dispatchQuoter: dispatchQuoter,
        }}
      >
        {children}
      </QuoterContext.Provider>
    </>
  );
};

export default QuoterProvider;
