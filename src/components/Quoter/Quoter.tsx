import CustomInput from "../CustomInput/CustomInput";
import Separator from "../Separator/Separator";
import Viewer from "./Viewer/Viewer";
import QuoterProvider from "./Context/QuoterProvider";
import useQuoter from "./hooks/useQuoter";
import BtnModule from "./BtnModule/BtnModule";
import InputsModule from "./InputsModule/InputsModule";
import ViewerTotals from "./ViewerTotals/ViewerTotals";

const Quoter = () => {
  const { newQuote, handleChange, resetForm, setNewQuote } = useQuoter();

  return (
    <QuoterProvider>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "15px",
          /* width: "30vw", */
          padding: "10px",
        }}
      >
        <Separator size="small" />

        <InputsModule
          handleChange={handleChange}
          newQuote={newQuote}
          setNewQuote={setNewQuote}
        />

        <Separator size="small" />

        <BtnModule newQuote={newQuote} fn={[resetForm]} />

        <Separator size="small" />

        <ViewerTotals />

        <Separator size="small" />

        <Viewer />
      </div>
    </QuoterProvider>
  );
};

export default Quoter;
