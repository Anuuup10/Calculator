import "./App.css";

function App() {
  return (
    <div className="calculator">
      <input className="display" type="text" />
      <div className="button-container">
        <button className="buttons">C</button>
        <button className="buttons">1</button>
        <button className="buttons">2</button>
        <button className="buttons">3</button>
      </div>
    </div>
  );
}

export default App;
