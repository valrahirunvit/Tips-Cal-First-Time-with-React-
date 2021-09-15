import TipBill from "./TipBill";
import TipSelect from "./TipSelect";
import TipPeople from "./TipPeople";
import Container from "./UI/Container";

function LeftContainer() {
  return (
    <Container className="tip tip-box-left">
      <TipBill />
      <TipSelect />
      <TipPeople />
    </Container>
  );
}

export default LeftContainer;
