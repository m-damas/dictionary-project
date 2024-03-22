import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main></main>
        <Dictionary />
        <footer className="App-footer">
          <small>
            Coded by Melissa Damas and is open sourced on Github and hosted on
            Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
