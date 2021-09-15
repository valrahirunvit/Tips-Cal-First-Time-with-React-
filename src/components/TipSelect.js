import { useContext } from "react";
import { DataContext } from "./TipCalculator";

import InputPercent from "./UI/InputPercent";

function TipSelect() {
  const { tip, setTip } = useContext(DataContext);

  return (
    <div className="selectTip-box">
      <div className="selectTip-title">
        <p>Select Tip %</p>
      </div>
      <div className="selectTip-percent">
        <InputPercent
          label="five"
          labelText="5%"
          id="five"
          value="5"
          checked={tip === "5"}
          onChange={setTip}
        />
        <InputPercent
          label="ten"
          labelText="10%"
          id="ten"
          value="10"
          checked={tip === "10"}
          onChange={setTip}
        />
        <InputPercent
          label="fifteen"
          labelText="15%"
          id="fifteen"
          value="15"
          checked={tip === "15"}
          onChange={setTip}
        />
        <InputPercent
          label="twentyFive"
          labelText="25%"
          id="twentyFive"
          value="25"
          checked={tip === "25"}
          onChange={setTip}
        />
        <InputPercent
          label="fifty"
          labelText="50%"
          id="fifty"
          value="50"
          checked={tip === "50"}
          onChange={setTip}
        />
        <input
          id="input-custom"
          autoComplete="off"
          placeholder="Custom"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TipSelect;
