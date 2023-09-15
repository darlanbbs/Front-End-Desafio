import * as C from "./styles";
import BimestreArea from "../components/BimestreArea/BimestreArea";

const HomePage = () => {
  return (
    <C.Container fluid>
      <BimestreArea bimestre="Bimestre 1" />
    </C.Container>
  );
};

export default HomePage;
