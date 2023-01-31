import "./Tailwind.css";
import "./App.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="bg-background">
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
