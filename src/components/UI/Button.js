import { useContext } from "react";
import { DataContext } from "../TipCalculator";

function Button() {
  const { bill, setBill, setTip, setPeople } = useContext(DataContext);

  const resetValues = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  const btnDisabled = bill ? false : true;

  return (
    <button disabled={btnDisabled} onClick={resetValues}>
      RESET
    </button>
  );
}

export default Button;
