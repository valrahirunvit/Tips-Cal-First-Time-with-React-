import { useContext } from "react";
import { DataContext } from "./TipCalculator";

function TipPeople() {
  const { people, setPeople } = useContext(DataContext);
  return (
    <div className="formControl">
      <div className="people-text">
        <label htmlFor="people">Number of People</label>
        {people === "0" && <p className="error-text">Can't be zero</p>}
      </div>
      <div className="input-box">
        <input
          id="people"
          autoComplete="off"
          placeholder="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
        <img src="/images/icon-person.svg" alt="icon-person" />
      </div>
    </div>
  );
}

export default TipPeople;
