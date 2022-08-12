import React, { useEffect } from "react";
import CustomInput from "../../CustomInput/CustomInput";
import Separator from "../../Separator/Separator";
import { useContext } from "react";
import { QuoterContext } from "../Context/QuoterContext";

interface InputsModuleProps {
  children?: JSX.Element | JSX.Element[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newQuote: { amount: number | string | null; date: string | null };
  setNewQuote: React.Dispatch<
    React.SetStateAction<{
      amount: string;
      date: string;
    }>
  >;
}

const InputsModule = ({
  handleChange,
  newQuote,
  setNewQuote,
}: InputsModuleProps) => {
  const { toggleEditQuote, activeQuote } = useContext(QuoterContext);

  useEffect(() => {
    if (toggleEditQuote && activeQuote) {
      setNewQuote({
        amount: activeQuote.amount.toString(),
        date: activeQuote.date,
      });
    }
  }, [toggleEditQuote]);

  return (
    <>
      <CustomInput
        name="amount"
        style={{
          width: "100%",
          height: "30px",
          borderRadius: "10px",
        }}
        value={newQuote.amount}
        onChange={handleChange}
      />

      <Separator size="small" />

      <CustomInput
        name="date"
        type="date"
        style={{
          width: "100%",
          height: "30px",
          borderRadius: "10px",
        }}
        onChange={handleChange}
        value={newQuote.date}
      />
    </>
  );
};

export default InputsModule;
