import * as C from "./styles";
import BimestreArea from "../components/BimestreArea/BimestreArea";

const HomePage = () => {
  return (
    <C.Container fluid>
      <BimestreArea bimestre="Bimestre 1" />
      <BimestreArea bimestre="Bimestre 2" />
      <BimestreArea bimestre="Bimestre 3" />
      <BimestreArea bimestre="Bimestre 4" />
    </C.Container>
  );
};

export default HomePage;
