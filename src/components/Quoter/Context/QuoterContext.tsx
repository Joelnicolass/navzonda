import { createContext } from "react";
import { IQuote } from "../../../models/IQuote";
import { QuoterActions } from "../reducers/quoterReducer";

export interface IQuoterContext {
  quotes: IQuote[];
  toggleEditQuote: boolean;
  activeQuote: IQuote | null;
  dispatchQuoter: React.Dispatch<QuoterActions>;
}

export const QuoterContext = createContext({} as IQuoterContext);
