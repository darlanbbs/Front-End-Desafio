import { BimestreProvider } from "./Context/resultsContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BimestreProvider>
      <HomePage />
    </BimestreProvider>
  );
}

export default App;
