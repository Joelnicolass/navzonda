import React from "react";
import QuoterBtn from "../QuoterBtn/QuoterBtn";
import Separator from "../../Separator/Separator";
import CustomButton from "../../CustomButton/CustomButton";
import { useContext } from "react";
import { QuoterContext } from "../Context/QuoterContext";

interface BtnModuleProps {
  newQuote: { amount: number | string | null; date: string | null };
  fn: Array<() => void>;
}

const BtnModule = ({ newQuote, fn }: BtnModuleProps) => {
  const { quotes } = useContext(QuoterContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <QuoterBtn newQuote={newQuote} fn={fn} />
      <Separator size="small" />
      <CustomButton
        style={{
          width: "100%",
          borderRadius: "10px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        disabled={!quotes.length}
      >
        Continuar ( {quotes.length > 0 ? quotes.length : 0} )
      </CustomButton>
    </div>
  );
};

export default BtnModule;
