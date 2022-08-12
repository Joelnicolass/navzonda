import { IQuote } from "../../../models/IQuote";
import { IAction } from "../../../interfaces/Action";

export interface IQuoterInitialState {
  quotes: IQuote[];
  toggleEditQuote: boolean;
  activeQuote: IQuote | null;
}

export interface QuoterActions extends IAction {
  type: QuoterActionTypes;
  payload?: any | any[];
}

export const quoterInitialState: IQuoterInitialState = {
  quotes: [] as IQuote[],
  toggleEditQuote: false,
  activeQuote: null,
};

export const quoterReducer = (
  state: IQuoterInitialState = quoterInitialState,
  action: QuoterActions
) => {
  switch (QuoterActionTypes[action.type]) {
    case QuoterActionTypes.ADD_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
      };

    case QuoterActionTypes.REMOVE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter((quote) => quote.id !== action.payload.id),
      };

    case QuoterActionTypes.UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map((quote) => {
          if (quote.id === action.payload.id) {
            return { ...quote, ...action.payload };
          }
          return quote;
        }),

        activeQuote: null,
        toggleAddQuote: false,
      };
    case QuoterActionTypes.TOGGLE_EDIT_QUOTE:
      return {
        ...state,
        toggleEditQuote: !state.toggleEditQuote,
        activeQuote: action.payload,
      };
    default:
      return state;
  }
};

export enum QuoterActionTypes {
  ADD_QUOTE = "ADD_QUOTE",
  REMOVE_QUOTE = "REMOVE_QUOTE",
  TOGGLE_EDIT_QUOTE = "TOGGLE_EDIT_QUOTE",
  UPDATE_QUOTE = "UPDATE_QUOTE",
}
