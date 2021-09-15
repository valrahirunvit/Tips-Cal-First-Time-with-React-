import { useContext } from "react";
import { DataContext } from "./TipCalculator";

function TipAmount() {
  const { bill, tip, people } = useContext(DataContext);

  function calTipAmount() {
    const amount = (bill * (tip / 100)) / people;
    return amount;
  }

  let value;
  let amount = calTipAmount();

  if (isFinite(amount)) value = amount.toFixed(2);
  if (
    isNaN(amount) ||
    bill === "" ||
    bill === "0" ||
    people === "" ||
    people === "0"
  )
    value = "0.00";

  return (
    <div className="display-box">
      <div className="display-text">
        <p className="display-text--heading">Tip Amount</p>
        <p>/ person</p>
      </div>
      <div className="display-number">
        <p>${value}</p>
      </div>
    </div>
  );
}

export default TipAmount;
