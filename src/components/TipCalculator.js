import { useState, createContext } from "react";

import Container from "./UI/Container";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

export const DataContext = createContext(null);

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  return (
    <DataContext.Provider
      value={{ bill, setBill, tip, setTip, people, setPeople }}
    >
      <Container className="container">
        <LeftContainer />
        <RightContainer />
      </Container>
    </DataContext.Provider>
  );
}

export default TipCalculator;
