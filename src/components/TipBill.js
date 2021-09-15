import { useContext } from "react";
import { DataContext } from "./TipCalculator";

function TipBill() {
  const { bill, setBill } = useContext(DataContext);

  return (
    <div className="formControl">
      <div className="bill-text">
        <label htmlFor="bill">Bill</label>
        {bill === "0" && <p className="error-text">Can't be Zero</p>}
      </div>
      <div className="input-box">
        <input
          id="bill"
          autoComplete="off"
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
        <img src="/images/icon-dollar.svg" alt="icon-dollar" />
      </div>
    </div>
  );
}

export default TipBill;
