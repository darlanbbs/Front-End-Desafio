import * as C from "./styles";
import BimestreArea from "../components/BimestreArea/BimestreArea";

const HomePage = () => {
  return (
    <C.Container fluid>
      <BimestreArea Bimestre="Bimestre 1" />
      <BimestreArea Bimestre="Bimestre 2" />
      <BimestreArea Bimestre="Bimestre 3" />
      <BimestreArea Bimestre="Bimestre 4" />
    </C.Container>
  );
};

export default HomePage;
