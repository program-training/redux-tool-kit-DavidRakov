import "./App.css";
import BodyComponent from "./pages/Body";
import Header from "./pages/Header";
import { useAppSelector } from "./store/hooks";

function App() {
  const animal = useAppSelector((store) => store.header.animal);

  return (
    <div id="app" dir="rtl">
      <Header animal={animal} />
      <BodyComponent />
    </div>
  );
}

export default App;
