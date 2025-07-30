import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Accordian";
import faqData from "./utils/dummyData";

function App() {
  return (
    <div className="App" style={{ width: "600px", margin: "50px auto" }}>
      <h1>ESim FAQ</h1>
      <Accordian data={faqData} />
    </div>
  );
}

export default App;
