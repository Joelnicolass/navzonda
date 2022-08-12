import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Separator from "../../Separator/Separator";
import { QuoterContext } from "../Context/QuoterContext";

interface IDetails {
  interes: string | number | undefined | null;
  gastos: string | number | undefined | null;
  iva: string | number | undefined | null;
}

const ViewerTotals = () => {
  const { quotes } = useContext(QuoterContext);

  const [total, setTotal] = useState(0);
  const [totalDetails, setTotalDetails] = useState<IDetails>({
    interes: 0,
    gastos: 0,
    iva: 0,
  });

  useEffect(() => {
    setTotal(
      quotes.reduce((acc, quote) => {
        const value: number = parseFloat(quote.amount.toString());
        return acc + value;
      }, 0)
    );

    setTotalDetails({
      interes: (Math.random() * (1000 - 1.5) * quotes.length).toFixed(2),
      gastos: (Math.random() * (1000 - 1.5) * quotes.length).toFixed(2),
      iva: (Math.random() * (1000 - 1.5) * quotes.length).toFixed(2),
    });
  }, [quotes]);

  return (
    <div
      style={{
        fontSize: "medium",
      }}
    >
      {quotes.length > 0 ? `Total: $${total}` : <div>$0</div>}
      <hr />
      <Separator size="small" />
      <div
        style={{
          fontSize: "small",
        }}
      >
        <p>Interes Total: ${totalDetails.interes}</p>
        <p>Gastos Totales: ${totalDetails.gastos}</p>
        <p>IVA Total: ${totalDetails.iva}</p>
      </div>
    </div>
  );
};

export default ViewerTotals;
