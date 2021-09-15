import TipAmount from "./TipAmount";
import TipTotal from "./TipTotal";
import Button from "./UI/Button";
import Container from "./UI/Container";

function RightContainer() {
  return (
    <Container className="tip tip-box-right">
      <TipAmount />
      <TipTotal />
      <Button />
    </Container>
  );
}

export default RightContainer;
