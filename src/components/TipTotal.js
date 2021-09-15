import { useContext } from "react";
import { DataContext } from "./TipCalculator";

function TipTotal() {
  const { bill, tip, people } = useContext(DataContext);

  function calTotal() {
    const amount = (bill * (tip / 100)) / people;
    const total = bill / people + amount;
    return total;
  }

  let value;
  let total = calTotal();

  if (isFinite(total)) value = total.toFixed(2);
  if (
    isNaN(total) ||
    bill === "0" ||
    bill === "0" ||
    people === "" ||
    people === "0"
  )
    value = "0.00";

  return (
    <div className="display-box">
      <div className="display-text">
        <p className="display-text--heading">Total</p>
        <p>/ person</p>
      </div>
      <div className="display-number">
        <p>${value}</p>
      </div>
    </div>
  );
}

export default TipTotal;
